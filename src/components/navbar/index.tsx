/**
 * Client Side NavBar Component using framer-motion for height and font changes on y-scroll
 * @author Muhammad Rowaha
 * @changelog_v1 Implemented base, responsive navbar component 
 */
"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import NavBarContainer from "./container";
import { NavBarLink, type NavBarProps } from "./interface";
import { Box, IconButton, Menu, MenuItem, Typography, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function MenuLink(props: NavBarLink) {
  const theme = useTheme();
  return (
    <MenuItem>
      <Link href={props.href} style={{textDecoration: "none", color: theme.palette.primary.main, width: "100%"}}>
        <Typography>{props.title}</Typography>
      </Link>
    </MenuItem>
  )
}

function NavLink(props: NavBarLink) {
  return (
    <Link 
    href={props.href}
    key={props.href}
    style={{textDecoration: "none"}}
  >
      <Typography textTransform="capitalize" color="white" fontSize="0.6em">
        {props.title}
      </Typography>
    </Link>
  )
}

export default function NavBar(props: NavBarProps) {

  const theme = useTheme();
  // disjoint viewport queries are important because we initially do not know what to render
  const isMediumViewport = useMediaQuery(theme.breakpoints.up("sm"));
  const isSmallViewport = useMediaQuery(theme.breakpoints.down("sm"));

  /** only relevant on sm viewport or below */
  const navbarRef = useRef<HTMLElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setAnchorEl(navbarRef.current);
    setOpenMenu(true);
  }


  return (
    <NavBarContainer
      scrollBounds={[0,1]}
      heightBounds={[60, 30]} // max height to min height in pixel
      logo={props.logo}
      ref={navbarRef}
    >
      {/* Links */}
      <Box sx={{display: "flex", gap: 2}}>
        {
          isMediumViewport && props.links.map((link) => <NavLink key={link.href} {...link} />) 
        }
        {
          isSmallViewport && <>
            <IconButton sx={{color: "white"}} onClick={handleClick}><MenuIcon /></IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={() => setOpenMenu(false)}
              marginThreshold={0}
              PaperProps={{
                style: {
                  width: "80%",
                  left: 0,
                  right: 0,
                  borderRadius: 0,
                  marginInline: "auto"
                }
              }}
            >
              {
                props.links.map(link => <MenuLink key={link.href} {...link} />)
              }
            </Menu>
          </>
        }
      </Box>
    </NavBarContainer>
  );
}
