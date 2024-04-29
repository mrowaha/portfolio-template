/**
 * Shared Skeleton card primarily for loading states
 * @author Muhammad Rowaha
 */
'use client';

import { Card, Paper, Skeleton } from "@mui/material";

export default function SkeletonCard() {
  return (
    <Paper>
      <Card sx={{padding: 0.25, height: 250}}>
        <Skeleton variant="rectangular" width="100%" height={50} />
        <Skeleton variant="text" width="50%" />
        <Skeleton variant="text" width="100%" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="95%" />
      </Card>
    </Paper>
    )
}