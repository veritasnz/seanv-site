import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";

import WaveBreak from "../UI/WaveBreak";
import DateFormatter from "../UI/DateFormatter";
import Category from "./PostMeta/Category";

export default function PostHead({ post }) {
  const { t, lang } = useTranslation("common");

  const formatString = lang === "en" ? "LLLL do yyyy" : "yyyy-MM-dd";

  const categoryTooltip =
    t("post-cat-prefix", {
      count: post.categoryName,
    }) || false;

  const durationString = t("post-read-duration", {
    count: post.readDuration,
  });

  return (
    <header className="post-head">
      <div className="post-head__wrap">
        <div className="post-head__cat">
          <Category
            slug={post.categorySlug}
            name={post.categoryName}
            tooltip={categoryTooltip}
            noText={true}
          />
        </div>
        <div className="post-head__text">
          {durationString && (
            <p className="post-head__read">{durationString}</p>
          )}
          <p className="post-head__date">
            <Trans
              i18nKey="common:post-published"
              components={[
                <DateFormatter
                  key="0"
                  dateString={post.date}
                  formatString={formatString}
                />,
              ]}
            />

            {post.modifiedDate && (
              <Trans
                i18nKey="common:post-updated"
                components={[
                  <DateFormatter
                    key="0"
                    dateString={post.modifiedDate}
                    formatString={formatString}
                  />,
                ]}
              />
            )}
          </p>
        </div>
      </div>

      <WaveBreak />
    </header>
  );
}
