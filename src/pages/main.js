import React from "react"
import {
  Wrapper,
  Img,
  H1,
  Bio,
  Box,
  Link,
  Container,
} from "../components/layout"
import { Parser } from "html-to-react"
import MeSnow from "../images/me-snow.jpg"
import Helmet from "react-helmet"

const parser = new Parser()

const Main = props => {
  const {
    home_title,
    bio,
    current_job,
    current_job_link,
    current_job_link_text,
    github,
    github_text,
    twitter,
    twitter_text,
  } = props

  return (
    <Container>
      <Helmet title="Harris Geo" defer={false} />
      <H1 id="home">{home_title.text}</H1>
      <Wrapper>
        <Img src={MeSnow} />
        <Bio>
          {parser.parse(bio.html)}
          <Box>
            {current_job.text}
            <Link href={current_job_link.url} target="_blank">
              {current_job_link_text.text}
            </Link>
          </Box>
          <Box>
            <Link href={github.url} target="_blank">
              {github_text.text}
            </Link>
            &nbsp;-&nbsp;
            <Link href={twitter.url} target="_blank">
              {twitter_text.text}
            </Link>
          </Box>
        </Bio>
      </Wrapper>
    </Container>
  )
}

export default Main
