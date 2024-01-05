import { useEffect } from "react";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

import Icon from "../../UI/Icons/Icon";
import WaveBreak from "../../UI/WaveBreak";

function CategoryFilter(props) {
  const router = useRouter();
  const { allTerms, currentTerm, onTermUpdate } = props;

  const updateTermHandler = useCallback(
    (termSlug) => {
      const termQuery = termSlug === "all" ? null : { filterBy: termSlug };

      // // Update the router location (forces page redraw - thus also forces unneeded page-animation)
      // router.push(
      //     {
      //         pathname: router.pathname,
      //         query: termQuery,
      //     },
      //     undefined,
      //     { shallow: true } // don't rerender page (only works in prod)
      // );

      onTermUpdate(termSlug);
    },
    [onTermUpdate]
  );

  // On page load / locale change, retrieve
  // URL query and update term
  useEffect(() => {
    if (router.query.filterBy) {
      updateTermHandler(router.query.filterBy);
    } else {
      updateTermHandler("all");
    }
  }, [router.locale]); //eslint-disable-line

  // Update archive if list-item's cat button is pressed
  // (update current term if page query changes)
  useEffect(() => {
    if (
      router.query.filterBy !== currentTerm &&
      router.query.filterBy !== undefined
    ) {
      updateTermHandler(router.query.filterBy);
    }
  }, [router.query.filterBy]); //eslint-disable-line

  return (
    <div className="cat-filter">
      <ul className="cat-filter__wrap">
        <li className="cat-filter__icon" aria-hidden>
          <Icon name="filter" />
        </li>
        {allTerms.map((term) => {
          // Assign active class
          const classNames = `cat-filter__item ${
            term.slug === currentTerm ? "cat-filter__item--active" : ""
          }`;

          return (
            <li key={term.slug} className={classNames}>
              <button onClick={updateTermHandler.bind(null, term.slug)}>
                {term.name}
              </button>
            </li>
          );
        })}
      </ul>
      <WaveBreak />
    </div>
  );
}

export default React.memo(CategoryFilter);
