import React from "react"
import { navigate } from "gatsby"
import { Container, H1, H2, Tag, HeaderContainer, Link } from "../Layout"
import { reformatDate } from "../../helpers/reformatDate"
import { BlockWrapper, Block, Title } from "../BlogItems/BlogItems.styles"

export const ProjectItems = ({ dark, title, preview }: any) => {
  const handleClick = (path: any) => {
    navigate(path)
  }

  return (
    <Container dark={dark} id="blog">
      <HeaderContainer preview={preview}>
        <H2>{preview && "Latest "} Projects</H2>
        {preview && (
          <Link dark={dark} onClick={() => navigate("/blogs")}>
            View all posts
          </Link>
        )}
      </HeaderContainer>
      <BlockWrapper>
        <Block dark={dark}>
          <Title>This is a long title because why not</Title>
        </Block>
      </BlockWrapper>
    </Container>
  )
}
