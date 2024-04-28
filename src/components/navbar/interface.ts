/**
 * Navbar Interface
 * @author Muhammad Rowaha
 */

export type NavBarLink = {
  title: string;
  href: string;
};

export type NavBarLogo = {
  src: string;
  alt?: string;
  href?: string;
  text?: string;
}

export type NavBarProps = {
  logo: NavBarLogo;
  links: NavBarLink[];
};