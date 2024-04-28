/**
 * Portfolio Client-Side Hero component
 * This component renders a banner with image offset to the bottom of the banner
 * @author Muhammad Rowaha
 */
"use client";

import { Typography, styled } from "@mui/material";
import HeroContainer from "./container";
import { type HeroProps } from "./interface";
import TextAnimator from "../helpers/text-animator";

const StyledTitle = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down("sm")] : {
    fontSize : "20vw"
  },
  letterSpacing : 5,
  color : "#fff"
}));

export default function Hero(props: HeroProps) {

  return (
    <HeroContainer {...props.img} bg={props.bg}>
      <StyledTitle variant="h1" sx={{transform: "translateY(50%)"}}>
        {/* Renders P to prevent layout shift on typewriter effect */}
        P<TextAnimator base={props.title ?? "ortfolio"} duration={2} />
      </StyledTitle>
    </HeroContainer>
  )
}