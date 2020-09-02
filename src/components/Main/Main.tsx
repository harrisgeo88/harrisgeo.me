import React, { Fragment } from "react"
import {
  Wrapper,
  ProfilePhoto,
  H1,
  Bio,
  Link,
  Container,
  SocialMediaIcon,
  IconsContainer,
} from "../Layout"
import { Parser } from "html-to-react"

const parser = new Parser()

export const Main = (props: any) => {
  const {
    bio,
    tech,
    likes,
    currentJob,
    currentJobLink,
    currentJobLinkText,
    dark,
    githubImgDark,
    githubImgLight,
    liImgLight,
    liImgDark,
    devImgLight,
    devImgDark,
    profilePhoto,
    title,
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
            <Link href={githubUrl} target="_blank" dark={dark}>
              <SocialMediaIcon
                src={dark ? githubImgLight.url : githubImgDark.url}
                alt={dark ? githubImgLight.alt : githubImgDark.alt}
                width={30}
                height={30}
                mr={10}
              />
            </Link>
            <Link href={twitterUrl} target="_blank" dark={dark}>
              <SocialMediaIcon
                src={dark ? twitterImgLight.url : twitterImgDark.url}
                alt={dark ? twitterImgLight.alt : twitterImgDark.alt}
                width={30}
                height={30}
                ml={10}
              />
            </Link>
            <Link href={devUrl} target="_blank" dark={dark}>
              <SocialMediaIcon
                src={dark ? devImgLight.url : devImgDark.url}
                alt={dark ? devImgLight.alt : devImgDark.alt}
                width={30}
                height={30}
                ml={10}
              />
            </Link>
            <Link href={liUrl} target="_blank" dark={dark}>
              <SocialMediaIcon
                src={dark ? liImgLight.url : liImgDark.url}
                alt={dark ? liImgLight.alt : liImgDark.alt}
                width={30}
                height={30}
                ml={10}
              />
            </Link>
          </IconsContainer>
        </Bio>
      </Wrapper>
    </Container>
  )
}
