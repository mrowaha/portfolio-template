/**
 * Banner container. Uses Resize observer in conjuction with MUI media queries
 * to properly offset siblings whenever image resizes
 * @author Muhammad Rowaha
 */
import Image from "next/image";

import { Box, Stack, styled } from "@mui/material";
import { ElementRef, PropsWithChildren, useContext, useEffect, useLayoutEffect, useRef } from "react";
import { HeroBackgroundProps, type HeroImageProps } from "./interface";
import { HeroResizeContext } from "@/providers/hero-resize";

const StyledBox = styled(Stack)(({theme}) => ({
  width : "100%",
  background : `linear-gradient(45deg, ${theme.palette.common.tpurple}, ${theme.palette.common.tred})`,
  border : "5px solid black",
  position : "relative",
  paddingTop : "2rem",
  isolation: "isolate"
}));

const StyledImageBox = styled(Box)(({theme}) => ({
  width : "30%",
  [theme.breakpoints.down("lg")] : {
    width: "40%"
  },
  [theme.breakpoints.down("md")] : {
    width : "60%",
  },
  [theme.breakpoints.down("sm")] : {
    width : "80%"
  },
  maxWidth : "400px",
  aspectRatio : "1 / 1",
  transform : "translate(0, 50%)",
  border : "5px solid black",
  borderRadius: "50%",
  overflow: "hidden",
  zIndex : 10,
}))

export interface HeroContainerProps extends PropsWithChildren, HeroImageProps {
  bg?: HeroBackgroundProps;
};

export default function HeroContainer(props: HeroContainerProps) {

  const selfImageRef = useRef<ElementRef<"img">>();
  const {height, setHeight} = useContext(HeroResizeContext);

  useEffect(() => {
    // create image resize observer
    new ResizeObserver((entries) => {
      const imgEntry = entries[0];
      setHeight(imgEntry.contentRect.height);
    }).observe(selfImageRef.current!)
  }, []);

  useLayoutEffect(() => {
    const rect = selfImageRef.current!.getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  return (
    <StyledBox sx={{boxShadow: 20, marginBlockEnd: "12rem"}} alignItems="center">
      {
        props.bg &&
        <Box sx={{position: "absolute", inset: 0, zIndex: -1, opacity: 0.5}}>
          <Image 
            src={props.bg.src}
            alt="Portfolio Background"
            fill
          />
        </Box> 
      }
      {props.children}
      <StyledImageBox ref={selfImageRef}>
        <Image
          src={props.src}
          alt={props.alt ?? "Author Image"} 
          fill
          objectFit="cover"
        />
      </StyledImageBox>
    </StyledBox>
  )
}