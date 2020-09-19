import React, { useState } from "react"
import { graphql } from "gatsby"
import { Layout, Frame } from "../components/Layout"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
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
        projects
        feed
        project_items {
          project_url {
            url
          }
          project_name
        }
      }
    }
  }
`

const BlogsPage = (props: any) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const {
    copy: { data: copy },
  } = props.data
  const dataObject = {
    nav: {
      blog: copy.blogs,
      brand: copy.site_name,
      home: copy.home,
      projects: copy.projects,
      feed: copy.feed,
    },
    projects: copy.project_items,
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
        <ProjectItems
          projects={dataObject.projects}
          dark={darkMode}
          preview={false}
        />
      </Layout>
    </Frame>
  )
}

export default BlogsPage
