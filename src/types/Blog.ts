type Frontmatter = {
  date: string;
  description: string;
  id: string;
  path: string;
  tags: string[];
  title: string;
  seoBackground: string;
}

export type Blog = {
  html: string;
  frontmatter: Frontmatter;
}

export const Blog: Blog = null;
