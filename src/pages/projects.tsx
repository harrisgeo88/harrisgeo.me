import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, Frame } from "../components/Layout"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { BlogItems } from "../components/BlogItems"
import { SEO } from "../components/SEO"
import { ProjectItems } from "../components/ProjectItems"

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
        icon_dark {
          url
        }
        icon_light {
          url
        }
        blog_title {
          text
        }
      }
    }
  }
`

const BlogsPage = (props: any) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const {
    copy: { data: copy },
    blogs,
  } = props.data
  const dataObject = {
    nav: {
      blog: copy.blogs,
      brand: copy.site_name,
      sun: copy.icon_light.url,
      moon: copy.icon_dark.url,
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
      <SEO title="Projects" />
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <ProjectItems {...dataObject.blog} dark={darkMode} preview={false} />
      </Layout>
    </Frame>
  )
}

export default BlogsPage
