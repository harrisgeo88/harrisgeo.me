import React, { Fragment } from "react"
import {
  Wrapper,
  ProfilePhoto,
  Bio,
  Link,
  Container,
  SocialMediaIcon,
  IconsContainer,
} from "../Layout"

interface IconOption {
  url: string
  lightImg: {
    alt: string
    url: string
  }
  darkImg: {
    alt: string
    url: string
  }
}

export const Main = (props: any) => {
  const {
    bio,
    tech,
    likes,
    dark,
    githubImgDark,
    githubImgLight,
    liImgLight,
    liImgDark,
    devImgLight,
    devImgDark,
    profilePhoto,
    githubUrl,
    twitterUrl,
    devUrl,
    liUrl,
    twitterImgDark,
    twitterImgLight,
  } = props

  const andCommas = (i: number, length: number) => {
    if (i < length - 2) {
      return ", "
    } else if (i === length - 2) {
      return " and "
    } else {
      return ". "
    }
  }

  const openURL = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const iconOptions: IconOption[] = [
    {
      url: githubUrl,
      lightImg: githubImgLight,
      darkImg: githubImgDark,
    },
    {
      url: twitterUrl,
      lightImg: twitterImgLight,
      darkImg: twitterImgDark,
    },
    {
      url: devUrl,
      lightImg: devImgLight,
      darkImg: devImgDark,
    },
    {
      url: liUrl,
      lightImg: liImgLight,
      darkImg: liImgDark,
    },
  ]

  return (
    <Container dark={dark} id="home">
      <Wrapper>
        <ProfilePhoto src={profilePhoto} />
        <Bio>
          {bio}&nbsp;
          {tech.map(({ framework }: any, i: number) => (
            <Fragment key={i}>
              <b key={i}>{framework}</b>
              {andCommas(i, tech.length)}
            </Fragment>
          ))}
          {likes}
          <IconsContainer>
            {iconOptions.map(
              ({ url, lightImg, darkImg }: IconOption, i: number) => (
                <Link key={i} onClick={() => openURL(url)} dark={dark}>
                  <SocialMediaIcon
                    src={dark ? lightImg.url : darkImg.url}
                    alt={dark ? lightImg.alt : darkImg.alt}
                    width={30}
                    height={30}
                    ml={10}
                  />
                </Link>
              )
            )}
          </IconsContainer>
        </Bio>
      </Wrapper>
    </Container>
  )
}
