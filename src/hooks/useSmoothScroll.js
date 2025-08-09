// src/hooks/useSmoothScroll.js
import { useEffect } from 'react'

export default function useSmoothScroll() {
  useEffect(() => {
    const handler = (e) => {
      const a = e.target.closest("a[href^='#']")
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])
}