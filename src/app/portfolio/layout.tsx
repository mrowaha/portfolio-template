/**
 * Portfolio page layout rendering Hero and Paper view
 * @author Muhammad Rowaha
 */
import SectionHeader from "@/components/helpers/section-header";
import HeroResizeProvider from "@/providers/hero-resize";
import React from "react";
import { Container } from "@mui/material";

export default function PortfolioLayout({
  children,
  modal,
  experience,
  education
} : {
  children: React.ReactNode;
  modal: React.ReactNode;
  experience: React.ReactNode;
  education: React.ReactNode;
}) {
  return (
    <HeroResizeProvider>
      {children}
      {modal}
      <div className="sections-paper">
        <SectionHeader id="experience" title="Experience">
          <Container sx={{marginBlock: "1rem"}}>
            {experience}
          </Container>
        </SectionHeader>
        <SectionHeader id="education" title="Education">
          <Container sx={{marginBlock: "1rem"}}>
            {education}
          </Container>
        </SectionHeader>
      </div>  
    </HeroResizeProvider>
  )
}