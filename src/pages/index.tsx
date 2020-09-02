import React, { useState } from "react"
import { graphql } from "gatsby"
import { BlogItems } from "../components/BlogItems"
import { Main } from "../components/Main"
import { getDarkValue, setDarkValue } from "../helpers/localStorage"
import { Layout, Frame } from "../components/Layout"
import { SEO } from "../components/SEO"

export const pageQuery = graphql`
  {
    blogs: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
        quote
        tech {
          framework
        }
        likes
        icon_light {
          url
        }
        home_title {
          text
        }
        image {
          url
        }
        bio {
          text
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
        github_icon_dark {
          url
          alt
        }
        github_icon_light {
          url
          alt
        }
        twitter_icon_dark {
          url
          alt
        }
        twitter_icon_light {
          url
          url
        }
        li_icon_dark {
          url
          alt
        }
        li_icon_light {
          url
          alt
        }
        dev_icon_dark {
          url
          alt
        }
        dev_icon_light {
          url
          alt
        }
        github_link {
          url
        }
        twitter_link {
          url
        }
        dev_link {
          url
        }
        li_link {
          url
        }
        blog_title {
          text
        }
      }
    }
  }
`

const IndexPage = (props: any) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const {
    copy: { data: copy },
    blogs,
  } = props.data
  console.log({ copy })
  const dataObject = {
    nav: {
      blog: copy.blogs,
      brand: copy.site_name,
      sun: copy.icon_light.url,
      moon: copy.icon_dark.url,
      home: copy.home,
      projects: copy.projects,
    },
    main: {
      title: copy.home_title[0].text,
      bio: copy.quote,
      tech: copy.tech,
      likes: copy.likes,
      profilePhoto: copy.image.url,
      currentJob: copy.current_job[0].text,
      currentJobLink: copy.current_job_link.url,
      currentJobLinkText: copy.current_job_link_text[0].text,
      githubImgLight: copy.github_icon_light,
      githubImgDark: copy.github_icon_dark,
      liImgDark: copy.li_icon_dark,
      liImgLight: copy.li_icon_light,
      devImgDark: copy.dev_icon_dark,
      devImgLight: copy.dev_icon_light,
      githubUrl: copy.github_link.url,
      twitterUrl: copy.twitter_link.url,
      devUrl: copy.dev_link.url,
      liUrl: copy.li_link.url,
      twitterImgLight: copy.twitter_icon_light,
      twitterImgDark: copy.twitter_icon_dark,
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
      <SEO title="Home" />
      <Layout
        {...dataObject.nav}
        dark={darkMode}
        toggleDarkMode={toggleDarkMode}
      >
        <Main {...dataObject.main} dark={darkMode} />

        <BlogItems
          {...dataObject.blog}
          dark={darkMode}
          blogs={blogs}
          preview={true}
        />
      </Layout>
    </Frame>
  )
}

export default IndexPage
