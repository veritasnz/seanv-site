import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}', {
                                    page_path: window.location.pathname,
                                    anonymize_ip: false,
                                });
                            `,
                        }}
                    />
                </Head>
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `<!-- notice me Bunpro senpai!! -->`,
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
