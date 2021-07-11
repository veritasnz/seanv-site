import WaveBreak from "../UI/WaveBreak";
import DateFormatter from "../UI/DateFormatter";
import Category from "./PostMeta/Category";

export default function PostHead({ post, lang }) {
    const formatString = lang === "en" ? "LLLL do yyyy" : "yyyy-MM-dd";
    const categorySuffix = lang === "en" ? "Category: " : "記事カテ：";

    /**
     * Read Duration
     */
    let readDurationString = post.readDuration || null;
    if (readDurationString) {
        if (lang === "en") {
            readDurationString = readDurationString + " minute read";
        } else {
            readDurationString =
                "この記事を読むに" + readDurationString + "分くらいかかる";
        }
    }

    /**
     * Post Date
     */

    return (
        <header className="post-head">
            <div className="post-head__wrap">
                <div className="post-head__cat">
                    <Category
                        slug={post.categorySlug}
                        name={post.categoryName}
                        tooltip={categorySuffix + post.categoryName}
                        noText={true}
                    />
                </div>
                <div className="post-head__text">
                    {readDurationString && (
                        <p className="post-head__read">{readDurationString}</p>
                    )}
                    <p className="post-head__date">
                        {lang === "en" ? "Published " : "掲載日："}
                        <DateFormatter
                            dateString={post.date}
                            formatString={formatString}
                        />
                        {post.modifiedDate && (
                            <>
                                {lang === "en"
                                    ? ", Last updated "
                                    : "、　最終更新日："}
                                <DateFormatter
                                    dateString={post.date}
                                    formatString={formatString}
                                />
                            </>
                        )}
                    </p>
                </div>
            </div>

            <WaveBreak />
        </header>
    );
}
