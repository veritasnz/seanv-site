import React from "react";
import App from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";

import { SITE_URL } from "../lib/constants";

import "../styles/style.global.scss";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Clouds from "../components/UI/Animations/Clouds";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
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
            type: "website",
            locale: locale,
            url: "seanv.dev",
            site_name: seoSite,
            images: [
                {
                    url: `${SITE_URL}/img/og-${locale}.png`,
                    width: 1200,
                    height: 630,
                    alt: seoSite,
                },
            ],
        },
        twitter: {
            handle: "@veritas_nz",
            site: "@veritas_nz",
            cardType: "summary_large_image",
        },
        dangerouslySetAllPagesToNoIndex: true,
    };

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
