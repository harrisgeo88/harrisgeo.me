export interface NewsletterCopy {
  title: string;
  quote: string;
  placeholder: string;
  subscribe: string;
}


export interface SignupFormProps {
  dark: boolean;
  copy: NewsletterCopy;
}

export const NewsletterCopy: NewsletterCopy = null