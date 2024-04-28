/**
 * This component uses framer-motion for animating TypeWriter Text
 * @author Muhammad Rowaha
 */
"use client";

import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";


export interface TextAnimatorProps {
  base: string; // text
  duration: number; // delay in seconds
}

export default function TextAnimator(props: TextAnimatorProps) {
  
  const count = useMotionValue(0);
  const indexed = useTransform(count, (latest) => Math.round(latest));
  const typed = useTransform(indexed, (latest) => props.base.slice(0, latest));
  
  useEffect(() => {
    const controls = animate(count, props.base.length, {
      type: "tween",
      duration: props.duration,
      ease: "easeInOut"
    });

    return controls.stop;
  }, []);

  return (
    <motion.span>{typed}</motion.span>
  )
}