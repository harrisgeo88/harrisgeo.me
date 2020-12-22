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
import { Blog, CopyData, SocialMedia } from "../../types"
import { SignupForm, NewsletterCopy } from '../SignupForm'

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
    copy: prismicTitle {
      data {
        blogs
        projects
        feed
        newsletter
        newsletter_title
        newsletter_quote
        newsletter_input_placeholder
        subscribe
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

interface BlogPostProps {
  data: {
    blog: Blog;
    copy: CopyData;
  }
}

const BlogPost = ({ data }: BlogPostProps) => {
  const [darkMode, setDarkMode] = useState(getDarkValue())
  const [progress, setProgress] = useState(0)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    setDarkValue(!darkMode)
  }
  const { blog } = data
  const copy = data.copy.data

  const navData = {
    blog: copy.blogs,
    brand: copy.site_name,
    home: copy.home,
    projects: copy.projects,
    feed: copy.feed, 
    newsletter: copy.newsletter, 
  }

  const subscribeData: NewsletterCopy = {
    title: copy.newsletter_title,
    quote: copy.newsletter_quote,
    placeholder: copy.newsletter_input_placeholder,
    subscribe: copy.subscribe,
  }

  const splitTags = (tags: string[]): string[] =>
    tags.map((t) => t.replace(/ /g, ""))

  const handleClick = (path: string) => window.open(path, "_blank", "noopener,noreferrer")

  return (
    <Frame
      dark={darkMode}
      onScroll={(e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const { scrollTop, scrollHeight, clientHeight }: any = e.target
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
          <SignupForm dark={darkMode} copy={subscribeData} />
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
            <P>{copy.footer_questions}</P>
            {copy.social_media.map(
              ({ social_text, social_name, social_link }: SocialMedia, i: number) => (
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
