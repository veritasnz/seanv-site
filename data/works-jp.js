const works = [
  /**
   * Wonideto
   */
  {
    name: "Wonideto (をにでと)",
    url: "https://wonideto.seanv.dev/",
    thumbnailURL: "/img/works/wonideto.png",
    type: "個人プロジェクト・アプリ",
    stack: ["typescript", "nextjs", "react", "nodejs"],
    summary:
      "日本語の助詞の使い方を練習するアプリ。このプロジェクトを少しずつ改善していく予定。TypescriptとNextJSで書かれています。テストはVitestで行っています。",
    links: [
      {
        icon: "anchor",
        url: "https://wonideto.seanv.dev/",
        tooltip: "アプリへ行く",
      },
      {
        icon: "github",
        url: "https://github.com/veritasnz/wonideto",
        tooltip: "コードを見る（英語）",
      },
    ],
  },
  /**
   * Next Wordless
   */
  {
    name: "NextJSでヘッドレスWP",
    url: "https://github.com/veritasnz/next-wordless-front",
    thumbnailURL: "/img/works/wordless.png",
    type: "個人プロジェクト・アプリ",
    stack: ["nextjs", "react", "graphql", "wordpress", "nodejs", "php"],
    summary:
      "ヘッドレスWordpressの概念実証。NextJSのサーバーレス機能とNodeJSを「お問い合わせ」フォームに使用しています。",
    links: [
      {
        icon: "anchor",
        url: "https://wordless.seanv.dev/",
        tooltip: "デモサイトを見る",
      },
      {
        icon: "github",
        url: "https://github.com/veritasnz/next-wordless-front",
        tooltip: "コードを見る（英語）",
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
    type: "個人プロジェクト - アプリ",
    stack: ["react", "redux", "javascript"],
    summary:
      "作業の効率性を上げるためのタイマーアプリ。時間サイクルから音声案内の声の種類まで、全体的に設定可能。その設定は、訪問の度に記憶される。",
    links: [
      {
        icon: "github",
        url: "https://github.com/veritasnz/devclock",
        tooltip: "コードを見る",
      },
    ],
  },

  /**
   * WP Boilerplate
   */
  {
    name: "Wordpressテンプレート",
    url: null,
    thumbnailURL: "/img/works/boilerplate.png",
    type: "個人プロジェクト",
    stack: ["wordpress", "webpack", "sass", "javascript", "php"],
    summary:
      "自分なりのWPテーマ制作をするためのテーマテンプレート。よく使うプラグインやライブラリーを対応しているテンプレートの使用では、スムーズに手早くテーマ制作が始めれる",
    links: [
      {
        icon: "github",
        url: "https://github.com/veritasnz/wp-boilerplate",
        tooltip: "コードを見る",
      },
    ],
  },

  /**
   * Kurage Digital Site
   */
  {
    name: "クラゲデジタルＨＰ",
    url: "https://kuragedigital.com/",
    thumbnailURL: "/img/works/kurage-digital.png",
    type: "顧客依頼 - デザイン&開発",
    stack: ["wordpress", "sass", "javascript", "php"],
    summary:
      "クラゲデジタルはWordpressのサイト制作を専門とするエージェンシーです。この会社ＨＰのデザインと開発を担当",
    links: [],
  },

  /**
   * Various Client Sites
   */
  {
    name: "今までの依頼集",
    url: "/posts/various-client-sites",
    thumbnailURL: "/img/works/client-sites.png",
    type: "顧客依頼 - 開発",
    stack: ["wordpress", "sass", "javascript", "php"],
    summary:
      "Wordpressと特注のテーマで作った、様々な依頼されたサイト集。記事でその詳細の確認が出来る",
    links: [
      {
        icon: "article",
        url: "/posts/various-client-sites",
        tooltip: "記事を読む",
      },
    ],
  },

  /**
   * Maplink
   */
  {
    name: "マップリンク",
    url: "/posts/map-link-app",
    thumbnailURL: "/img/works/map-link.png",
    type: "顧客依頼 - 開発",
    stack: ["react", "svg", "javascript"],
    summary:
      "Reactで作ったオリジナル地図作成ツール。拡大、縮小、左右上下への移動がスムーズにでき、ダブルクリックで好きな色付けをし、完成した地図をPNGファイルとしてダウンロードすることが可能。",
    links: [
      {
        icon: "article",
        url: "/posts/map-link-app",
        tooltip: "Read the article",
      },
      {
        icon: "anchor",
        url: "https://ee-arts.biz/map/mollweide-0/",
        tooltip: "Demo the app",
      },
    ],
  },
];

export default works;
