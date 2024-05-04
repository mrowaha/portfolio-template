import { type IconButtonProps } from "@mui/material";
import React from "react";

export interface ButtonLink {
  icon: React.ReactNode;
  href: string;
  sx?: IconButtonProps["sx"] 
}

export interface TextLink {
  text: string;
  href: string;
}

export interface JumpToProps {
  buttonLinks: ButtonLink[];
  textLinks: TextLink[];
}

export interface ContactProps extends JumpToProps {

}