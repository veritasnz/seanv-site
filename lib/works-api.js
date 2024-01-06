import { getPlaiceholder } from "plaiceholder";

import englishWorks from "../data/works-en";
import japaneseWorks from "../data/works-jp";

export const getWorksData = async (lang) => {
  if (lang === "en") {
    return await insertPlaceholder(englishWorks);
  } else {
    return await insertPlaceholder(japaneseWorks);
  }
};

const insertPlaceholder = async (workArray) => {
  return await Promise.all(
    workArray.map(async (work) => {
      const { svg, img } = await getPlaiceholder(work.thumbnailURL);
      work.placeholderData = svg;
      return work;
    })
  );
};
