import React from 'react'
import { motion, MotionProps} from "motion/react"

interface HighlightedTextProps extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps | "style"> {
    children: React.ReactNode
    as?: React.ElementType
    lineStyle?: "Dotted" | "Solid"
    className?: string
}

export const HighlightedText = ({children, as: Component = "span", lineStyle = "Solid", className}: HighlightedTextProps ) => {
  return (
    <div>highlighted-text</div>
  )
}