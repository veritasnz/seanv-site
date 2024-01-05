import useTranslation from "next-translate/useTranslation";

import {
  FULL_POST_ITEM_MATTER_TYPES,
  REVALIDATION_DUR,
} from "../lib/constants";
import { getAllPosts } from "../lib/posts-api";
import { getWorksData } from "../lib/works-api";

import Hero from "../components/Home/Hero";
import About from "../components/Home/About";

import PageTransitionWrapper from "../components/Layout/PageTransitionWrapper";
import WorksGrid from "../components/Works/WorksGrid";
import PostList from "../components/Posts/PostList";
import Container from "../components/UI/Container";
import LinkButton from "../components/UI/LinkButton";

function HomePage({ latestThreeWorks, latestTwoPosts }) {
  const { t } = useTranslation("common");

  return (
    <>
      <PageTransitionWrapper>
        <Hero />
        <Container title={t("about-title")} type="second" isShortTitle>
          <About />
        </Container>
        <Container title={t("works-title")} type="first">
          <WorksGrid works={latestThreeWorks} />
          <div className="o-archive-bttn">
            <LinkButton color="blue" href="/works/">
              {t("view-all")}
            </LinkButton>
          </div>
        </Container>
        <Container title={t("posts-title")} type="second">
          <PostList posts={latestTwoPosts} />
          <div className="o-archive-bttn">
            <LinkButton color="orange" href="/posts/">
              {t("view-all")}
            </LinkButton>
          </div>
        </Container>
      </PageTransitionWrapper>
    </>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  const { locale } = context;

  const allPosts = getAllPosts(FULL_POST_ITEM_MATTER_TYPES, locale);
  const latestTwoPosts = allPosts.slice(0, 2);

  const allWorks = await getWorksData(locale);
  const latestThreeWorks = allWorks.slice(0, 3);

  return {
    props: {
      latestThreeWorks,
      latestTwoPosts,
    },
    revalidate: REVALIDATION_DUR,
  };
}
