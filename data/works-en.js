const works = [
    /**
     * Next Wordless
     */
    {
        name: "Next Wordless",
        url: "https://github.com/veritasnz/next-wordless-front",
        thumbnailURL: "/img/works/wordless.png",
        type: "Personal Project - App",
        stack: ["nextjs", "react", "graphql", "wordpress", "nodejs", "php"],
        summary:
            "Concept project for a headless Wordpress template. Utilises NextJS serverless functions + NodeJS for the 'Contact' form",
        links: [
            {
                icon: "anchor",
                url: "https://wordless.seanv.dev/",
                tooltip: "See the sample site",
            },
            {
                icon: "github",
                url: "https://github.com/veritasnz/next-wordless-front",
                tooltip: "See the code",
            },
        ],
    },

    /**
     * _Devclock
     */
    {
        name: "_Devclock",
        url: "https://devclock.seanv.dev/",
        thumbnailURL: "/img/works/devclock.png",
        type: "Personal Project - App",
        stack: ["react", "redux", "javascript"],
        summary:
            "An interactive pomodoro-style countdown timer app that works in cycles, with fully configurable cycle & voice settings, which are stored between visits.",
        links: [
            {
                icon: "github",
                url: "https://github.com/veritasnz/devclock",
                tooltip: "See the code",
            },
        ],
    },

    /**
     * Kurage Digital Site
     */
    {
        name: "Kurage Digital Site",
        url: "https://kuragedigital.com/",
        thumbnailURL: "/img/works/kurage-digital.png",
        type: "Client Work - Complete design & development",
        stack: ["wordpress", "sass", "javascript", "php"],
        summary:
            "Kurage Digital is a boutique agency specialising in corporate website production with Wordpress.",
        links: [],
    },

    /**
     * Various Client Sites
     */
    {
        name: "Various Client Sites",
        url: "/posts/various-client-sites",
        thumbnailURL: "/img/works/client-sites.png",
        type: "Client Work - Development",
        stack: ["wordpress", "sass", "javascript", "php"],
        summary:
            "Various client sites created using Wordpress CMS and bespoke PHP-based themes for the front end. Read the article for details.",
        links: [
            {
                icon: "article",
                url: "/posts/various-client-sites",
                tooltip: "Read the article",
            },
        ],
    },

    /**
     * Maplink
     */
    {
        name: "Map-Link",
        url: "/posts/map-link-app",
        thumbnailURL: "/img/works/map-link.png",
        type: "Client Work - Development",
        stack: ["react", "svg", "javascript"],
        summary:
            "A React-based map-manipulation tool, capable of panning, painting, zooming the map, and also downloading the final map as a PNG file",
        links: [
            {
                icon: "article",
                url: "/posts/map-link-app",
                tooltip: "Read the article",
            },
            {
                icon: "anchor",
                url: "https://ee-arts.biz/map/47%e9%83%bd%e9%81%93%e5%ba%9c%e7%9c%8c-2/",
                tooltip: "Demo the app",
            },
        ],
    },

    /**
     * WP Boilerplate
     */
    {
        name: "Wordpress Boilerplate",
        url: null,
        thumbnailURL: "/img/works/boilerplate.png",
        type: "Personal Project",
        stack: ["wordpress", "sass", "javascript", "php"],
        summary:
            "My boilerplate for creating WP themes. Gets me straight into theme production quickly and smoothly, supporting all my heavily used plugins and libraries.",
        links: [
            {
                icon: "github",
                url: "https://github.com/veritasnz/wp-boilerplate",
                tooltip: "See the code",
            },
        ],
    },
];

export default works;
