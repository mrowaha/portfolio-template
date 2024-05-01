/**
 * Project Section rendering project section cards
 * @author Muhammad Rowaha
 */
'use client';
import useViewabelRef from "@/hooks/useViewableRef";
import { ProjectsSectionProps } from "./interface";
import { Grid, Stack, Box } from "@mui/material";
import ProjectCard from "./card";
import GenericCarousel from "@/components/helpers/carousel";

export default function ProjectsSection(props: ProjectsSectionProps) {

  const [selfRef, isInView] = useViewabelRef<HTMLDivElement>(null);

  return (
    <Box ref={selfRef}>
      <GenericCarousel 
        items={
          props.projects.map((projects, idx) => (
            <Box sx={{marginInline: "1rem"}}>
              <ProjectCard 
                data={projects}
                grow={isInView}
                growTimeout={1500 * (idx+1)}
              />
            </Box>
          ))
        }
      />
    </Box>
  )

}