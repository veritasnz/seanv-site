import React, { useEffect } from "react";
import App from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";

import * as gtag from "../lib/gtag";
import { SITE_URL } from "../lib/constants";

import "../styles/style.global.scss";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Clouds from "../components/UI/Animations/Clouds";

function MyApp({ Component, pageProps, router }) {
    /**
     * SEO Setup
     */
    const url = router.pathname;
    const locale = router.locale;

    const isEnglish = locale === "en";
    const seoName = isEnglish ? "Sean Veritas" : "ショーンヴェリタス";
    const seoRole = isEnglish ? "Web Developer" : " ウェブ開発者";
    const seoSite = seoName + " | " + seoRole;
    const seoDescription = isEnglish
        ? "Portfolio website & blog Sean Veritas. A developer that makes websites using tools like Wordpress & React."
        : "ショーンヴェリタスのポートフォリオサイトとブログです。ウェブ開発者で、Wordpressやリアクトといった道具でサイトを作ります";

    const seo = {
        titleTemplate: `%s | ${seoName}`,
        defaultTitle: seoSite,
        description: seoDescription,
        openGraph: {
            title: seoName,
            description: seoDescription,
            type: "website",
            locale: locale,
            url: "seanv.dev",
            site_name: seoSite,
            images: [
                {
                    url: `${SITE_URL}/img/og-image-${locale}.png`,
                    width: 1320,
                    height: 1200,
                    alt: seoSite,
                },
            ],
        },
        twitter: {
            handle: "@veritas_nz",
            site: "@veritas_nz",
            cardType: "summary_large_image",
        },
    };

    /**
     * Analytics Setup
     */
    const gtagRouter = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => gtag.pageview(url);
        gtagRouter.events.on("routeChangeComplete", handleRouteChange);
        return () =>
            gtagRouter.events.off("routeChangeComplete", handleRouteChange);
    }, [gtagRouter.events]);

    /**
     * JSX Return
     */
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/img/favicon.png" />
                <link rel="stylesheet" href={`/fonts/${locale}/fonts.css`} />
                {getFontPreloadTags(locale)}
            </Head>

            <DefaultSeo {...seo} />

            <Header />

            <main className={isEnglish ? "en" : "jp"}>
                <Clouds count="3" yOffset="-2vw" />
                <Clouds count="2" yOffset="-2vw" />

                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={url} />
                </AnimatePresence>
            </main>

            <Footer />
        </>
    );
}

MyApp.getInitialProps = async (appContext) => {
    const appProps = await App.getInitialProps(appContext);
    const { locale } = appContext;

    return { ...appProps, locale };
};

export default MyApp;

/**
 *
 * Helpers
 *
 */
const getFontPreloadTags = (locale) => {
    if (locale === "jp") {
        return (
            <link
                rel="preload"
                href="/fonts/jp/DotGothic16-Regular.woff2"
                as="font"
                crossOrigin="true"
            />
        );
    }

    return (
        <>
            <link
                rel="preload"
                href="/fonts/en/AnonymousPro-Bold.woff2"
                as="font"
                crossOrigin="true"
            />
            <link
                rel="preload"
                href="/fonts/en/AnonymousPro.woff2"
                as="font"
                crossOrigin="true"
            />
        </>
    );
};
