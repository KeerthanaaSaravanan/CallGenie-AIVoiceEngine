"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ComponentProps, MouseEvent } from "react"

interface ScrollLinkProps extends ComponentProps<typeof Link> {
  children: React.ReactNode
}

export function ScrollLink({ href, children, onClick, ...props }: ScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Call any existing onClick handler
    onClick?.(e)

    // If href is a string (not UrlObject) and doesn't have a hash, scroll to top
    if (typeof href === "string") {
      // If it has a hash, let the browser handle the scroll to anchor
      if (href.includes("#")) {
        e.preventDefault()
        const [path, hash] = href.split("#")

        // Navigate to the path first
        router.push(path || "/")

        // Then scroll to the element after a brief delay
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        }, 100)
        return
      }

      // For regular links, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
