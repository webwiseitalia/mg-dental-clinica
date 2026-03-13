import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    // Hide on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      cursor.style.display = 'none'
      follower.style.display = 'none'
      return
    }

    // Hide default cursor
    document.documentElement.style.cursor = 'none'

    const pos = { x: 0, y: 0 }
    const mouse = { x: 0, y: 0 }
    let isHovering = false

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      gsap.to(cursor, { x: mouse.x, y: mouse.y, duration: 0.1, ease: 'power2.out' })
    }

    const updateFollower = () => {
      pos.x += (mouse.x - pos.x) * 0.12
      pos.y += (mouse.y - pos.y) * 0.12
      gsap.set(follower, { x: pos.x, y: pos.y })
      requestAnimationFrame(updateFollower)
    }

    const onEnterInteractive = () => {
      isHovering = true
      gsap.to(follower, { scale: 2.5, opacity: 0.15, duration: 0.4, ease: 'power2.out' })
      gsap.to(cursor, { scale: 0, duration: 0.3 })
    }

    const onLeaveInteractive = () => {
      isHovering = false
      gsap.to(follower, { scale: 1, opacity: 0.35, duration: 0.4, ease: 'power2.out' })
      gsap.to(cursor, { scale: 1, duration: 0.3 })
    }

    const onEnterDark = () => {
      gsap.to([cursor, follower], { borderColor: 'rgba(255,255,255,0.6)', duration: 0.3 })
      gsap.to(cursor, { backgroundColor: 'rgba(255,255,255,0.9)', duration: 0.3 })
    }

    const onLeaveDark = () => {
      gsap.to([cursor, follower], { borderColor: 'rgba(10,10,10,0.4)', duration: 0.3 })
      gsap.to(cursor, { backgroundColor: 'rgba(10,10,10,0.9)', duration: 0.3 })
    }

    window.addEventListener('mousemove', onMouseMove)
    updateFollower()

    // Observe interactive elements
    const interactiveSelector = 'a, button, [data-cursor="grow"], input, textarea'
    const darkSelector = '[data-cursor-dark], footer, .bg-dark'

    const addListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach(el => {
        el.style.cursor = 'none'
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
      document.querySelectorAll(darkSelector).forEach(el => {
        el.addEventListener('mouseenter', onEnterDark)
        el.addEventListener('mouseleave', onLeaveDark)
      })
    }

    // Initial + observe DOM changes
    addListeners()
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.documentElement.style.cursor = ''
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          borderRadius: '50%',
          backgroundColor: 'rgba(10,10,10,0.9)',
        }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          borderRadius: '50%',
          border: '1px solid rgba(10,10,10,0.4)',
          opacity: 0.35,
        }}
      />
    </>
  )
}
