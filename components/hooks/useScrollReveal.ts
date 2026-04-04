'use client'

import { useEffect, useRef } from 'react'

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible')
          observer.unobserve(element)
        }
      },
      { threshold }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
