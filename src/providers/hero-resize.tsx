/**
 * This context deals directly with Hero Image Height Resizing
 */
"use client";

import { type PropsWithChildren, createContext, useState } from "react";

export interface HeroResizeContextInterface {
  height: number;
  setHeight: (set: number) => void;
}

export const HeroResizeContext = createContext<HeroResizeContextInterface>({
  height: 0,
  setHeight: () => {}
});

export default function HeroResizeProvider(props: PropsWithChildren) {

  const [height, setHeight] = useState(0);

  return (
    <HeroResizeContext.Provider
      value={{height, setHeight}}
    >
      {props.children}
    </HeroResizeContext.Provider>
  )
}