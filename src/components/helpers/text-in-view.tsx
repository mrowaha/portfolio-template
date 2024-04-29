/**
 * Text In View Helper Component renders text when comes into in view
 * @author Muhammad Rowaha
 */
"use client";

import { Fade } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export interface TextInViewProps {
  text: string;
}

export default function TextInView(props : TextInViewProps) {

  const selfRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(selfRef);
  
  return (
    <Fade in={isInView} timeout={2500}>
      <span ref={selfRef}>{props.text}</span>
    </Fade>
  )

}