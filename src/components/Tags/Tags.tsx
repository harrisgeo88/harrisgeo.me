import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, Frame } from "../Layout"
import { getDarkValue, setDarkValue } from "../../helpers/localStorage"
import { BlogItems } from "../BlogItems"
import { SEO } from "../SEO"

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
        iwomm
        nodejs
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

const TagsPage = (props: any) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const { path, data } = props
  const {
    copy: { data: copy },
    blogs: allBlogs,
  } = data
  const dataObject = {
    nav: {
      blog: copy.blogs,
      brand: copy.site_name,
      home: copy.home,
      projects: copy.projects,
      feed: copy.feed,
    },
    blog: {
      title: copy.blog_title[0].text,
    },
  }

  const blogs: any = { edges: [] }
  const pathTag = path.replace("/tags/", "")
  allBlogs.edges.forEach((blog: any) => {
    if (blog.node.frontmatter.tags.includes(pathTag)) {
      blogs.edges.push(blog)
    }
  })

  const tagTitle = (text: string): string => {
    return (
      copy[text.replace(".", "")] ||
      `${text.charAt(0).toUpperCase()}${text.slice(1)}`
    )
  }

  const tag = tagTitle(pathTag)
  const toggleDarkMode = () => {
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
          {...dataObject.blog}
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
