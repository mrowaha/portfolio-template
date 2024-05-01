/**
 * Generic carousel as a component
 * @author Muhammad Rowaha
*/
import { useState, useCallback } from "react";
import { IconButton, useTheme } from "@mui/material";
import Carousel from "react-multi-carousel";
import { ArrowRight, ArrowLeft, Circle } from "@mui/icons-material";

export interface GenericCarouselProps {
  items: React.ReactChild[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function GenericCarousel(props : GenericCarouselProps) {

  return(
    <Carousel
      responsive={responsive}
      infinite
      swipeable
      draggable={false}

    >
      {props.items}
    </Carousel>
  )
}