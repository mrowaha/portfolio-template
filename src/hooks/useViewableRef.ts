/**
 * This hook is to be used to determine whether the ref component first comes into view on mount
 * @author Muhammad Rowaha
 */
'use client';
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function useViewabelRef<T extends Element>(initialValue : T | null) {
  const selfRef = useRef(initialValue);
  const isInView = useInView(selfRef);
  const [hasDisplayed, setHasDisplayed] = useState(false);

  useEffect(() => {
    if (isInView && !hasDisplayed) {
      setHasDisplayed(true);
    }
  }, [isInView, hasDisplayed]);

  return [selfRef, hasDisplayed] as const;

}