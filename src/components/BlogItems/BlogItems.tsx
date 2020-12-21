import React from "react"
import { navigate } from "gatsby"
import { Container, H2, Tag, HeaderContainer, Link } from "../Layout"
import {
  Block,
  Title,
  Description,
  Date,
  MiniWrapper,
  BlockWrapper,
} from "./BlogItems.styles"
import { reformatDate } from "../../helpers/reformatDate"
import { Blogs, Edge } from '../../types'

interface BlogItemsProps {
  dark: boolean;
  title: string;
  blogs: Blogs;
  preview: boolean;
}

export const BlogItems = ({ dark, title, blogs, preview }: BlogItemsProps) => {
  const handleClick = (path: string) => {
    navigate(path)
  }

  return (
    <Container dark={dark} id="blog">
      <HeaderContainer preview={preview}>
        <H2>{preview && "Latest "} {title} </H2>
        {preview && (
          <Link dark={dark} onClick={() => navigate("/blogs")}>
            View all posts
          </Link>
        )}
      </HeaderContainer>
      {blogs.edges.map(({ node }: Edge, i: number) => {
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
