import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, Frame } from "../components/Layout"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { BlogItems } from "../components/BlogItems"
import { SEO } from "../components/SEO"
import { Blogs, CopyData } from "../types"

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
        blog_title {
          text
        }
      }
    }
  }
`

interface IndexProps {
  data: {
    blogs: Blogs;
    copy: CopyData;
  }
}

const BlogsPage = ({ data }: IndexProps) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const { blogs } = data
  const copy = data.copy.data
  const dataObject = {
    nav: {
      blog: copy.blogs,
      projects: copy.projects,
      feed: copy.feed,
      brand: copy.site_name,
      home: copy.home,
    },
    blog: {
      title: copy.blog_title[0].text,
    },
  }
  const toggleDarkMode = () => {
    setDarkValue(!darkMode)
    setDarkMode(!darkMode)
  }

  return (
    <Frame dark={darkMode}>
      <SEO title="Blogs" />
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <BlogItems
          {...dataObject.blog}
          dark={darkMode}
          blogs={blogs}
          preview={false}
        />
      </Layout>
    </Frame>
  )
}

export default BlogsPage
