import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";

import {
  FULL_POST_ITEM_MATTER_TYPES,
  REVALIDATION_DUR,
} from "../../lib/constants";
import { getAllPosts } from "../../lib/posts-api";

import PageTransitionWrapper from "../../components/Layout/PageTransitionWrapper";
import PostArchive from "../../components/Posts/PostArchive";
import PageTitle from "../../components/Layout/Second/PageTitle";
import Container from "../../components/UI/Container";

function PostsPage(props) {
  const { allPosts, allTerms } = props;

  const { t } = useTranslation("common");
  const postsTitle = t("posts-title");

  const breadcrumbs = [{ name: postsTitle, url: null }];

  return (
    <>
      <NextSeo title={postsTitle} />

      <PageTransitionWrapper>
        <PageTitle title={postsTitle} breadcrumbs={breadcrumbs} />
        <Container type="second">
          <PostArchive allPosts={allPosts} allTerms={allTerms} />
        </Container>
      </PageTransitionWrapper>
    </>
  );
}

export default PostsPage;

export async function getStaticProps(context) {
  const { locale } = context;

  const allPosts = getAllPosts(FULL_POST_ITEM_MATTER_TYPES, locale);

  // Create array with all unique cat terms
  const allSlugs = []; // array of unique slugs
  const allTerms = [];

  allPosts.forEach((post) => {
    // Add 'term' if unique
    if (allSlugs.indexOf(post.categorySlug) === -1) {
      allTerms.push({
        name: post.categoryName,
        slug: post.categorySlug,
      });

      allSlugs.push(post.categorySlug);
    }
  });

  // Finally, add obligatory "all" category
  allTerms.unshift({
    name: locale === "en" ? "All" : "全て",
    slug: "all",
  });

  return {
    props: { allPosts, allTerms },
    revalidate: REVALIDATION_DUR,
  };
}
