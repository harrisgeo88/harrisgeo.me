import React from "react"
import { Container, H2, HeaderContainer } from "../Layout"
import { BlockWrapper, Block, Title } from "../BlogItems/BlogItems.styles"

export const ProjectItems = ({ dark, projects, preview }: any) => {
  const handleClick = (path: any) => {
    location.href = path
  }
  return (
    <Container dark={dark} id="blog">
      <HeaderContainer preview={preview}>
        <H2>Projects</H2>
      </HeaderContainer>
      <BlockWrapper>
        {projects.map((project: any, i: number) => (
          <Block
            key={i}
            dark={dark}
            onClick={() => handleClick(project.project_url.url)}
          >
            <Title>{project.project_name}</Title>
          </Block>
        ))}
      </BlockWrapper>
    </Container>
  )
}
