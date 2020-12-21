import { Interest, PrismicURL } from "../../types"


export type IconOption = {
  url: string
  lightImg: PrismicURL;
  darkImg: PrismicURL;
}

export interface MainProps {
  dark: boolean;
  greet: string;
  interests: Interest[];
  githubImgDark: PrismicURL;
  githubImgLight: PrismicURL;
  liImgLight: PrismicURL;
  liImgDark: PrismicURL;
  devImgLight: PrismicURL;
  devImgDark: PrismicURL;
  profilePhoto: string;
  githubUrl: string;
  twitterUrl: string;
  devUrl: string;
  liUrl: string;
  twitterImgDark: PrismicURL;
  twitterImgLight: PrismicURL;
}
