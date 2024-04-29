/**
 * Experience Section for rendering experience cards
 * @author Muhammad Rowaha
 */
'use client';
import { Grid } from "@mui/material";
import { ExperienceSectionProps } from "./interface";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import ExperienceCard from "./card";

export default function ExperienceSection(props: ExperienceSectionProps) {

  const selfRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(selfRef);
  const [hasDisplayed, setHasDisplayed] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasDisplayed) {
      setHasDisplayed(true);
    }
  }, [isInView, hasDisplayed]);

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