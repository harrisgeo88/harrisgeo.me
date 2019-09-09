import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Blog from "./blog"
import Main from "./main"
import { Layout } from "../components/layout"

const IndexPage = () => {
  const {
    prismicTitle: { data },
  } = useStaticQuery(pageQuery)

  const { nav_blog, nav_brand, nav_home, ...rest } = data
  const { blog_title, ...mainData } = rest

  const nav = { nav_blog, nav_brand, nav_home }

  return (
    <Layout {...nav}>
      <Main {...mainData} />
      <Blog {...{ blog_title }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    prismicTitle {
      data {
        nav_brand {
          text
        }
        nav_home {
          text
        }
        nav_blog {
          text
        }
        home_title {
          text
        }
        bio {
          html
        }
        current_job {
          text
        }
        current_job_link_text {
          text
        }
        current_job_link {
          url
        }
        github_text {
          text
        }
        github {
          url
        }
        twitter_text {
          text
        }
        twitter {
          url
        }
        blog_title {
          text
        }
      }
    }
  }
`

export default IndexPage
