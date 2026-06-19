import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, inView].
 * Once the element enters the viewport it stays in-view (fire-once).
 * @param {number} threshold - 0..1, fraction of element visible before triggering
 */
export function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Skip if already in view (e.g. component remounts)
    if (inView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, inView])

  return [ref, inView]
}
