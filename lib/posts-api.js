import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

/**
 * Posts API
 */

export function getPostsDirectory(lang) {
  return join(process.cwd(), `/data/_posts-${lang}`);
}

export function getPostSlugs(lang) {
  return fs.readdirSync(getPostsDirectory(lang));
}

export function getPostBySlug(slug, fields = [], lang) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(getPostsDirectory(lang), `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = [], lang) {
  const slugs = getPostSlugs(lang);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields, lang))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
