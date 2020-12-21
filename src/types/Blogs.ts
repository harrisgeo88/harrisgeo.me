type Frontmatter = {
  date: string;
  description: string;
  id: string;
  path: string;
  tags: string[];
  title: string;
}

export type Edge = {
  node: {
    frontmatter: Frontmatter;
  }
}

export type Blogs = {
  edges: Edge[];
}

export const Blogs: Blogs = null;