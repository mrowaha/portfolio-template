/**
 * Education Section for rendering education cards
 * @author Muhammad Rowaha
 */
'use client';

import { Grid } from "@mui/material";
import useViewabelRef from "@/hooks/useViewableRef";
import { type EducationSectionProps } from "./interface";
import EducationCard from "./card";

export default function EducationSection(props: EducationSectionProps) {

  const [selfRef, isInView] = useViewabelRef<HTMLDivElement>(null);

  return (
    <Grid ref={selfRef} container justifyContent='space-evenly'>
      {
        props.educations.map((education, idx) => (
          <Grid key={idx} item xs={10} sm={5} md={3} lg={3}>
              <EducationCard 
                data={education}
                grow={isInView}
                growTimeout={1500 * (idx+1)}
              />
          </Grid>
        ))
      }
    </Grid>
  )

}