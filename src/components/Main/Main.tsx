import React, { useEffect, useRef } from "react"
import Typed from 'typed.js';
import {
  Wrapper,
  ProfilePhoto,
  Bio,
  Link,
  Container,
  SocialMediaIcon,
  IconsContainer,
  TypedContainer,
  TypedContent,
  Greet,
} from "../Layout"
import { Interest } from "../../types"
import { styleInterests } from '../../helpers/styleInterests'

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
    dark,
    greet,
    interests,
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
  const typedRef = useRef(null)

  useEffect(() => {
    var options = {
      strings: interests.map(({interest}:Interest) => `${styleInterests(interest)}!`),
      typeSpeed: 10,
      loop: true,
    };
    new Typed(typedRef.current, options);
  },[])

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
          <Greet>{greet}</Greet>
          <TypedContainer>
            <TypedContent ref={typedRef} />
          </TypedContainer>
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
