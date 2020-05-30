import React, { useState } from "react"
import { Layout, Frame } from "../components/layout"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { Blogs } from "../components/Blogs"

export const pageQuery = graphql`
  {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___id], order: DESC }
    ) {
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

const BlogsPage = props => {
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
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <Blogs
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
