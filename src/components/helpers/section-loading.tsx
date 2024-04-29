/**
 * Section Loading Components uses Skeleton Cards in Grid
 * @author Muhammad Rowaha
 */

import { Grid } from "@mui/material";
import SkeletonCard from "./skeleton-card";


export default function SectionLoading() {
  return (
    <Grid container justifyContent="space-evenly">
      {
        [0,1,2].map((num) => (
          <Grid item key={num} xs={10} sm={5} md={3} lg={3}>
            <SkeletonCard />
          </Grid>
        ))
      }
    </Grid>
  )
}