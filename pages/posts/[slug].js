import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import { bundleMDX } from "mdx-bundler";
import { NextSeo } from "next-seo";
import fs from "fs";

import {
  SHORT_POST_ITEM_MATTER_TYPES,
  POST_BODY_MATTER_TYPES,
  REVALIDATION_DUR,
  SITE_URL,
} from "../../lib/constants";

import { getPostBySlug, getAllPosts } from "../../lib/posts-api";

import PageTransitionWrapper from "../../components/Layout/PageTransitionWrapper";
import Error404 from "../../components/Layout/Error404";
import PostBody from "../../components/Posts/PostBody";
import PostList from "../../components/Posts/PostList";
import PageTitle from "../../components/Layout/Second/PageTitle";
import Container from "../../components/UI/Container";
import PostHead from "../../components/Posts/PostHead";
import LinkButton from "../../components/UI/LinkButton";
import WaveBreak from "../../components/UI/WaveBreak";

function PostPage({ post, morePosts }) {
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  if (!router.isFallback && !post?.slug) return <Error404 />;

  const catPath = {
    pathname: "/posts",
    query: { filterBy: post.categorySlug },
  };

  const breadcrumbs = [
    { name: t("posts-title"), url: "/posts/" },
    { name: post.categoryName, url: catPath },
  ];

  return (
    <PageTransitionWrapper>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          images: [
            {
              url: SITE_URL + post.ogImage.url,
              width: post.ogImage.width || 1200,
              height: post.ogImage.height || 900,
              alt: post.title,
            },
          ],
          type: "article",
          article: {
            publishedTime: post.date,
            modifiedTime: post.modifiedDate,
            tags: [post.categoryName],
          },
        }}
      />

      <PageTitle title={post.title} breadcrumbs={breadcrumbs} />

      <Container type="second" width="thin">
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <>
            <PostHead post={post} />
            <PostBody content={post.content} lang={lang} />
            {morePosts.length > 0 && (
              <section className="more-posts">
                <WaveBreak />
                <h2 className="o-title">{t("post-more-articles")}</h2>
                <PostList posts={morePosts} isGrid />
                <div className="o-archive-bttn">
                  <LinkButton color="orange" href="/posts/">
                    {t("post-all-articles")}
                  </LinkButton>
                </div>
              </section>
            )}
          </>
        )}
      </Container>
    </PageTransitionWrapper>
  );
}

export default PostPage;

export async function getStaticProps({ params, locale }) {
  /**
   * MDX
   */
  let post;

  post = getPostBySlug(params.slug, POST_BODY_MATTER_TYPES, locale);

  const result = await bundleMDX(post.content, {
    files: {
      ".Code.jsx": fs.readFileSync("components/MDX/Code.jsx"),
      ".ExampleMDXComponent.jsx": fs.readFileSync(
        "components/MDX/ExampleMDXComponent.jsx"
      ),
      "./Clouds.jsx": fs.readFileSync("components/UI/Animations/Clouds.jsx"),
      "./Hill.jsx": fs.readFileSync("components/UI/Animations/Hill.jsx"),
      "./Cloud": fs.readFileSync("components/UI/Animations/Cloud.jsx"),
    },
  });
  const { code: content } = result;

  /**
   * More Posts
   */
  const allPosts = getAllPosts(SHORT_POST_ITEM_MATTER_TYPES, locale);
  const morePosts = allPosts
    .filter((currentPost) => currentPost.slug != post.slug)
    .slice(0, 2);

  return {
    props: {
      post: {
        ...post,
        content,
      },
      morePosts: morePosts,
    },
    revalidate: REVALIDATION_DUR,
  };
}

export async function getStaticPaths() {
  const enPosts = getAllPosts(["slug"], "en");
  const jpPosts = getAllPosts(["slug"], "jp");

  const enPaths = enPosts.map((post) => ({
    params: { slug: post.slug },
    locale: "en",
  }));

  const jpPaths = jpPosts.map((post) => ({
    params: { slug: post.slug },
    locale: "jp",
  }));

  return {
    paths: enPaths.concat(jpPaths),
    fallback: false,
  };
}
