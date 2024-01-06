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
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                // HACK: Stop SVGR from prefixing classnames inside of the SVGs
                svgoConfig: { plugins: [] },
              },
            },
          ],
        });

        return config;
      },
    })
  )
);
