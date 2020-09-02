import React from "react"
import { navigate } from "gatsby"
import { Container, H1, H2, Tag, HeaderContainer, Link } from "../Layout"
import {
  Block,
  Title,
  Description,
  Date,
  MiniWrapper,
  BlockWrapper,
} from "./BlogItems.styles"
import { reformatDate } from "../../helpers/reformatDate"

export const BlogItems = ({ dark, title, blogs, preview }: any) => {
  const handleClick = (path: any) => {
    navigate(path)
  }

  return (
    <Container dark={dark} id="blog">
      <HeaderContainer preview={preview}>
        <H2>{preview && "Latest "} Blogs</H2>
        {preview && (
          <Link dark={dark} onClick={() => navigate("/blogs")}>
            View all posts
          </Link>
        )}
      </HeaderContainer>
      {blogs.edges.map(({ node }: any, i: number) => {
        const {
          frontmatter: { path, title, description, date, tags },
        } = node

        return (
          <BlockWrapper key={i}>
            <Block onClick={() => handleClick(path)} dark={dark}>
              <Title>{title}</Title>
              <Description>{description}</Description>
            </Block>
            <MiniWrapper>
              <Date>{reformatDate(date)}</Date>
              {tags.map((tag: string, j: number) => (
                <Tag
                  key={j}
                  dark={dark}
                  onClick={(e) => {
                    e.preventDefault()
                    handleClick(`/tags/${tag}`)
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </MiniWrapper>
          </BlockWrapper>
        )
      })}
    </Container>
  )
}
