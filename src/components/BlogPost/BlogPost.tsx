import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import { Layout, Container, Frame, Link } from "../Layout"
import { ProgressBar } from "../ProgressBar"
import { getDarkValue, setDarkValue } from "../../helpers/localStorage"
import {
  H1,
  PostContainer,
  Footer,
  P,
  TagWrapper,
  Tag,
} from "./BlogPost.styles"
import { SEO } from "../SEO"
import { reformatDate } from "../../helpers/reformatDate"

export const blogPostQuery = graphql`
  query($path: String) {
    blog: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        description
        tags
        seoBackground
      }
    }
    prismic: prismicTitle {
      data {
        blogs
        projects
        feed
        footer_questions
        social_media {
          social_text
          social_name
          social_link
        }
      }
    }
  }
`

const BlogPost = (props: any) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const [progress, setProgress] = useState(0)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    setDarkValue(!darkMode)
  }
  const {
    blog,
    prismic: { data },
  } = props.data

  const navData = {
    blog: data.blogs,
    brand: data.site_name,
    feed: data.feed,
    home: data.home,
    projects: data.projects,
  }
  const splitTags = (tags: string[]): string[] =>
    tags.map((t) => t.replace(/ /g, ""))

  const handleClick = (path: any) =>
    window.open(path, "_blank", "noopener,noreferrer")
  return (
    <Frame
      dark={darkMode}
      onScroll={(e: any) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target
        setProgress((scrollTop * 100) / (scrollHeight - clientHeight))
      }}
    >
      <SEO
        title={blog.frontmatter.title}
        description={blog.frontmatter.description}
        seoBackground={blog.frontmatter.seoBackground}
      />
      <ProgressBar progress={progress} />
      <Layout {...navData} dark={darkMode} toggleDarkMode={toggleDarkMode}>
        <Container dark={darkMode}>
          <H1>{blog.frontmatter.title}</H1>
          <PostContainer
            dark={darkMode}
            dangerouslySetInnerHTML={{ __html: blog.html }}
          />
          <Footer>
            <P>
              Date posted:&nbsp;<b>{reformatDate(blog.frontmatter.date)}</b>
            </P>
            <TagWrapper>
              Tags:&nbsp;
              {splitTags(blog.frontmatter.tags).map((tag, i) => (
                <Tag
                  key={i}
                  dark={darkMode}
                  onClick={() => navigate(`/tags/${tag}`)}
                >
                  {tag}
                </Tag>
              ))}
            </TagWrapper>
            <P>{data.footer_questions}</P>
            {data.social_media.map(
              ({ social_text, social_name, social_link }: any, i: number) => (
                <P key={i}>
                  {social_text}&nbsp;
                  <Link dark={darkMode} onClick={() => handleClick(social_link)}>
                    {social_name}
                  </Link>
                </P>
              )
            )}
          </Footer>
        </Container>
      </Layout>
    </Frame>
  )
}

export default BlogPost
