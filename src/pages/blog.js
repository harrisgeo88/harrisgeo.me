import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, H1 } from "../components/layout"
import { Block, Title, Description, Date } from "../components/blog"

const Blog = ({ blog_title }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___id], order: DESC }) {
          edges {
            node {
              frontmatter {
                id
                path
                title
                description
                date
              }
            }
          }
        }
      }
    `
  )

  const handleClick = node => {
    document.location.href = node.frontmatter.path
  }

  return (
    <Container>
      <H1 id="blog">{blog_title.text}</H1>
      {allMarkdownRemark.edges.map(({ node }, i) => {
        return (
          <Block key={i} onClick={() => handleClick(node)}>
            <Title>{node.frontmatter.title}</Title>
            <Description>{node.frontmatter.description}</Description>
            <Date>{node.frontmatter.date}</Date>
          </Block>
        )
      })}
    </Container>
  )
}

export default Blog
