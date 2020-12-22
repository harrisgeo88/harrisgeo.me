import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, Frame } from "../Layout"
import { getDarkValue, setDarkValue } from "../../helpers/localStorage"
import { BlogItems } from "../BlogItems"
import { SEO } from "../SEO"
import { Blogs, CopyData, Edge } from "../../types"

export const pageQuery = graphql`
  {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            id
            path
            title
            description
            date
            tags
          }
        }
      }
    }
    copy: prismicTitle {
      data {
        site_name
        home
        blogs
        projects
        feed
        newsletter
        iwomm
        nodejs
        full_stack
        react
        javascript
        talk
        testing
        blog_title {
          text
        }
      }
    }
  }
`

interface TagsPageProps {
  path: string;
  data: {
    blogs: Blogs;
    copy: CopyData;
  }
}

const TagsPage = ({ data, path}: TagsPageProps) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const { blogs: allBlogs } = data
  const copy = data.copy.data

  const dataObject = {
    nav: {
      blog: copy.blogs,
      brand: copy.site_name,
      home: copy.home,
      projects: copy.projects,
      feed: copy.feed,
      newsletter: copy.newsletter,
    },
    blog: {
      title: copy.blog_title[0].text,
    },
  }

  const edges: Edge[] = []
  const pathTag = path.replace("/tags/", "")
  allBlogs.edges.forEach((edge: Edge) => {
    if (edge.node.frontmatter.tags.includes(pathTag)) {
      edges.push(edge)
    }
  })
  const blogs: Blogs = { edges }
  const tagTitle = (text: string): string => (copy as any)[text.replace(".", "")] as string ||
  `${text.charAt(0).toUpperCase()}${text.slice(1)}`
  
  const tag = tagTitle(pathTag)
  const toggleDarkMode = (): void => {
    setDarkValue(!darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <Frame dark={darkMode}>
      <SEO title={tag} />
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <BlogItems
          title={tag}
          dark={darkMode}
          blogs={blogs}
          preview={false}
        />
      </Layout>
    </Frame>
  )
}

export default TagsPage
