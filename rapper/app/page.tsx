"use client"
import React, { useEffect } from 'react'

function Page() {

  useEffect(() => {
    // Disable right click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    // Disable dev tools shortcuts (basic level)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault()
      }
    }

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
      overflow: "hidden"
    }}>
      
      <iframe
        src="https://lumina-books.mashhudur-rahman-dev.workers.dev/"
        style={{
          width: "100%",
          height: "100%",
          border: "none"
        }}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>

    </div>
  )
}

export default Page