/**
 * Portfolio page layout rendering Hero and Paper view
 * @author Muhammad Rowaha
 */

import HeroResizeProvider from "@/providers/hero-resize";
import React from "react";

export default function PortfolioLayout({
  children,
  modal,
  experience
} : {
  children: React.ReactNode;
  modal: React.ReactNode;
  experience: React.ReactNode;
}) {
  return (
    <HeroResizeProvider>
      {children}
      {modal}
      <div className="sections-paper">
        {experience}
      </div>  
    </HeroResizeProvider>
  )
}