/**
 * Required node version v16.9.1
 */

const nextTranslate = require("next-translate");

const { withPlaiceholder } = require("@plaiceholder/next");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withPlaiceholder(
    withBundleAnalyzer(
        nextTranslate({
            reactStrictMode: true,
            i18n: {
                locales: ["en", "jp"],
                defaultLocale: "en",
            },
        })
    )
);
