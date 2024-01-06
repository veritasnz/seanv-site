import React, { useCallback, useState } from "react";

import PostList from "./PostList";
import CategoryFilter from "./PostMeta/CategoryFilter";

function PostArchive({ allPosts, allTerms }) {
  const [filterState, setFilterState] = useState({
    term: "all",
    posts: [],
  });

  // Update filter function
  // (query params managed by CategoryFilter)
  const termChangeHandler = useCallback(
    (newTerm) => {
      if (newTerm !== "all") {
        setFilterState({
          term: newTerm,
          posts: allPosts.filter((post) => post.categorySlug === newTerm),
        });
      } else {
        setFilterState({
          term: newTerm,
          posts: [...allPosts],
        });
      }
    },
    [allPosts]
  );

  return (
    <>
      <CategoryFilter
        allTerms={allTerms}
        currentTerm={filterState.term}
        onTermUpdate={termChangeHandler}
      />
      <PostList posts={filterState.posts} />
    </>
  );
}

export default React.memo(PostArchive);
