/**
 * Generic error Error for this parallel route
 * @author Muhammad Rowaha
 */
'use client';

import SectionError from '@/components/helpers/section-error';
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <SectionError 
      reset={reset}
      title='Projects'
    />
  )
}