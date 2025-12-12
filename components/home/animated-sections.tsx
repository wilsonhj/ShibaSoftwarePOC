"use client"

import { motion, type Variants } from "motion/react"
import { type ReactNode } from "react"

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Wrapper for hero section with stagger animation
export function HeroAnimated({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

// Individual animated item (for items within HeroAnimated)
export function AnimatedItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeInUp} className={className} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

// Animated heading with variants
export function AnimatedHeading({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.h1 variants={fadeInUp} className={className} transition={{ duration: 0.5 }}>
      {children}
    </motion.h1>
  )
}

// Animated paragraph
export function AnimatedParagraph({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.p variants={fadeInUp} className={className} transition={{ duration: 0.5 }}>
      {children}
    </motion.p>
  )
}

// Section that animates when scrolled into view
export function ScrollAnimatedSection({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

// Grid with stagger animation on scroll
export function ScrollAnimatedGrid({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

// Individual grid item that animates
export function AnimatedGridItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeInUp} className={className} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}

