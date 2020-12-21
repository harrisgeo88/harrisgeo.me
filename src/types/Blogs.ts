type Frontmatter = {
  date: string;
  description: string;
  id: string;
  path: string;
  tags: string[];
  title: string;
}

type Edge = {
  node: {
    frontMatter:Frontmatter;
  }
}

export type Blogs = {
  edges: Edge[];
}

export const Blogs: Blogs = null;