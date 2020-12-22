import { NewsletterCopy } from "../components/SignupForm"

type PrismicText = {
  text: string;
}

export type PrismicURL = {
  url: string;
  alt: string;
}

export type ProjectItem = {
  project_url: PrismicURL;
  project_name: string;
}

type Tech = {
  framework: string;
}

export type SocialMedia = {
  social_text: string;
  social_name: string;
  social_link: string;
}

export type Interest = {
  interest: string;
}

export type Copy = Partial<NewsletterCopy> & {
  bio: PrismicText[];
  blog_title: PrismicText[];
  blogs: string;
  greet: string;
  newsletter: string;
  enjoys: string;
  interests: Interest[];
  current_job: PrismicText[];
  current_job_link: PrismicURL;
  current_job_link_text: PrismicText[];
  dev_icon_dark: PrismicURL;
  dev_icon_light: PrismicURL;
  dev_link: PrismicURL;
  feed: string;
  footer_questions: string;
  github_icon_dark: PrismicURL;
  github_icon_light: PrismicURL;
  github_link: PrismicURL;
  home: string;
  home_title: PrismicText[];
  icon_light: PrismicURL;
  image: PrismicURL;
  li_icon_dark: PrismicURL;
  li_icon_light: PrismicURL;
  li_link: PrismicURL;
  likes: string;
  newsletter_title: string,
  newsletter_quote: string,
  newsletter_input_placeholder: string,
  subscribe: string,
  project_items: ProjectItem[];
  projects: string;
  quote: string;
  site_name: string;
  social_media: SocialMedia[];
  tech: Tech[];
  twitter_icon_dark: PrismicURL;
  twitter_icon_light: PrismicURL;
  twitter_link: PrismicURL;
}

export type CopyData = {
  data: Copy;
}

export const Copy: Copy = null;
export const CopyData: CopyData = null;
export const Interest: Interest = null;