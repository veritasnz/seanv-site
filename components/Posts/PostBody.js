import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";

import { H2, H3 } from "../MDX/Headings";
import { ATag } from "../MDX/Links.jsx";

export default function PostBody(props) {
  const { content, lang = "en" } = props;

  const BodyComponent = useMemo(() => getMDXComponent(content), [content]);

  return (
    <div className="o-prose" data-lang={lang}>
      <BodyComponent
        components={{
          h2: H2,
          h3: H3,
          a: ATag,
        }}
      />
    </div>
  );
}
