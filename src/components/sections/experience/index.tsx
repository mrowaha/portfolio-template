/**
 * Experience Section for rendering experience cards
 * @author Muhammad Rowaha
 */
'use client';
import { Grid } from "@mui/material";
import { ExperienceSectionProps } from "./interface";
import ExperienceCard from "./card";
import useViewabelRef from "@/hooks/useViewableRef";

export default function ExperienceSection(props: ExperienceSectionProps) {

  const [selfRef, isInView] = useViewabelRef<HTMLDivElement>(null);

  return (
    <Grid ref={selfRef} container justifyContent='space-evenly'>
      {
        props.experiences.map((experience, idx) => (
          <Grid key={idx} item xs={10} sm={5} md={3} lg={3}>
            <ExperienceCard 
              data={experience}
              grow={isInView}
              growTimeout={1500 * (idx+1)}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}