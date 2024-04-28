/**
 * Client Side NavBar Component using framer-motion for height and font changes on y-scroll
 * @author Muhammad Rowaha
 * @changelog_v1 Implemented base, responsive navbar component 
 */
"use client";
import Link from "next/link";
import NavBarContainer from "./container";
import { type NavBarProps } from "./interface";
import { Box, Typography } from "@mui/material";

export default function NavBar(props: NavBarProps) {

  return (
    <NavBarContainer
      scrollBounds={[0,1]}
      heightBounds={[60, 30]} // max height to min height in pixel
      logo={props.logo}
    >
      {/* Links */}
      <Box sx={{display: "flex", gap: 2}}>
        {
          props.links.map((link) => (
            <Link 
              href={link.href}
              key={link.href}
              style={{textDecoration: "none"}}
            >
              <Typography textTransform="capitalize" color="white" fontSize="0.6em">
                {link.title}
              </Typography>
            </Link>
          ))
        }
      </Box>
    </NavBarContainer>
  );
}
