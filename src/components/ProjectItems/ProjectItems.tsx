import React from "react"
import { Container, H2, HeaderContainer } from "../Layout"
import { BlockWrapper, Block, Title } from "../BlogItems/BlogItems.styles"
import { ProjectItem } from '../../types'

interface ProjectItemsProps {
  dark: boolean;
  preview: boolean;
  projects: ProjectItem[];
}

export const ProjectItems = ({ dark, projects, preview }: ProjectItemsProps) => {
  const handleClick = (path: string) =>
    window.open(path, "_blank", "noopener,noreferrer")
  return (
    <Container dark={dark} id="projects">
      <HeaderContainer preview={preview}>
        <H2>Projects</H2>
      </HeaderContainer>
      <BlockWrapper>
        {projects.map((project: ProjectItem, i: number) => (
          <Block
            className="project-items"
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
