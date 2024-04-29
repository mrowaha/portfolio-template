/**
 * Section Component necessary for rendering section title and children
 * @author Muhammad Rowaha
 */
import { PropsWithChildren } from "react";
import classes from "./sections-header.module.css";
import TextInView from "./text-in-view";

export interface SectionHeaderInterface extends PropsWithChildren {
  title: string;
  id: string;
};

export default function SectionHeader(props: SectionHeaderInterface) {

  return(
    <section id={props.id} className={classes['sections-title']}>
      <h1><TextInView text={props.title} /></h1>
      {props.children}
    </section>
  )
}