/**
 * Nav bar container component necessary for handling shrinks on YScroll
 * This module also defines internal Logo Module designed specifically for the nav bar
 * there is no "use client" directive because only navbar is expected to import this module
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components :
 * defining a "use client" in a file, all other modules imported into it, including child components, are considered part of the client bundle.
 * @author Muhammad Rowaha
 */
import Link from "next/link";
import React, {ForwardedRef, forwardRef, useRef, useTransition, type PropsWithChildren} from "react";
import { useScroll, useTransform } from "framer-motion";
import { AppBar, styled, Box, Avatar, Typography, useTheme } from "@mui/material";

import { NavBarLogo } from "./interface";


export interface NavBarContainerProps extends PropsWithChildren {
  scrollBounds: [number, number];
  heightBounds: [number, number];
  logo: NavBarLogo;
}; 

const StyledAppBar = styled(AppBar)(({theme}) => ({
  position: "sticky",
  top: 0,
  background: `linear-gradient(90deg, #fff 0%, ${theme.palette.common.tred} 75% , ${theme.palette.common.tpurple})`,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20
}))

function NavBarContainer(props : NavBarContainerProps, ref : ForwardedRef<HTMLElement | null>) {

  // we are only concerned with the y scroll only
  const {scrollYProgress} = useScroll(); 
  const height = useTransform(scrollYProgress, props.scrollBounds, props.heightBounds);
  const [currentHeight, setCurrentHeight] = React.useState<number>(props.heightBounds[0]);
  
  // on mount, register listeners
  React.useEffect(() => {
    // @ts-ignore
    height.on("change", (latest) => {
      setCurrentHeight(latest);
    });
  }, []);

  return (
    <StyledAppBar 
      sx={{
        height: `${currentHeight}px`,
        fontSize: `${currentHeight / 2}px`
      }}
      ref={ref}
    > 
      <Logo {...props.logo} parentHeight={currentHeight} />
      {props.children}
    </StyledAppBar>
  )
}

export default forwardRef<HTMLElement | null, NavBarContainerProps>(NavBarContainer);

/* Internal Logo Interface */
interface LogoInterface extends NavBarLogo {
  parentHeight: number;
}

function Logo(props: LogoInterface) {

  const theme = useTheme();

  return (
    <Box sx={{display: "flex", gap: 1, alignItems: "baseline"}}>
      {
        props.href ?
        <Link href={props.href}>
          <Avatar
            src={props.src}
            alt={props.alt ?? "Portfolio Logo"}
            sx={{
              height: `${props.parentHeight}px`,
              width: `${props.parentHeight}px`,
              borderRadius: 0
            }}
          />
        </Link>
        :
        <Avatar
          src={props.src}
          alt={props.alt ?? "Portfolio Logo"}
          sx={{
            height: `${props.parentHeight / 1.25}px`,
            width: `${props.parentHeight / 1.25}px`,
            borderRadius: 0,
          }}
        />
      }
      {
        props.text && <Typography color={theme.palette.common.tpurple} component="span" fontSize="0.75em">{props.text}</Typography>
      }
    </Box>
  )
}
