'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'

const products = [
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Hand Sanitizer 1 Liter',
    description: 'Effective hand sanitizer in a convenient 1-liter bottle. It ensures maximum cleanliness and eliminates 99.9% of germs.',
    category: 'Hand Sanitizers',
  },
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Hand Sanitizer 500ml',
    description: 'Perfect for personal use, ideal for home or office. Its compact size makes it easy to carry and allows for quick access to clean hands.',
    category: 'Hand Sanitizers',
  },
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Disinfectant Spray',
    description: 'Multi-surface disinfectant for a cleaner environment. It effectively kills harmful bacteria and viruses on various surfaces.',
    category: 'Disinfectants',
  },
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Alcohol Hand Gel',
    description: 'Quick-drying gel for effective hand hygiene on-the-go. It provides a convenient way to sanitize your hands without the need for water.',
    category: 'Hand Sanitizers',
  },
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Disinfectant Wipes',
    description: 'Convenient wipes for quick disinfection. Perfect for surfaces and hands, ensuring cleanliness wherever you are.',
    category: 'Disinfectants',
  },
  {
    img: '/testimonials/tina-yards.jpg',
    name: 'Hand Sanitizer Spray',
    description: 'A portable solution for instant hand sanitization. This spray dries quickly and is perfect for on-the-go cleanliness.',
    category: 'Hand Sanitizers',
  },
]

function ProductCard({
  name,
  title,
  img,
  children,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  name: string
  title: string
  children: React.ReactNode
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96 group"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square h-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black group-hover:from-[calc(7/16*100%)] from-15% ring-1 ring-gray-950/10 ring-inset sm:from-25% transition-all"
      />
      <figure className="relative p-10">
        <figcaption className="group-hover:mb-4 group-hover:border-b border-white/20 group-hover:pb-4 transition-all">
          <p className="text-sm/6 font-medium text-white">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              {title}
            </span>
          </p>
        </figcaption>
        <blockquote>
          <p className="relative text-md/7 text-white hidden group-hover:inline transition-all">
            {children}
          </p>
          <p className="relative text-md/7 text-white/50 group-hover:hidden inline transition-all">
            {typeof children === 'string' ? children.substring(0, 40) + '...' : children}
          </p>
        </blockquote>
      </figure>
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-sm text-md/6 text-gray-600">
        Join the best brands in hygiene products and start using our solutions to keep your environment safe.
      </p>
      <div className="mt-2">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
        >
          Get started
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </div>
  )
}

export function Products() {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)
  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })
  
  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden pt-32">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>Our Products</Subheading>
          <Heading as="h3" className="mt-2">
            Hygiene Solutions You Can Trust.
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {products.map(({ img, name, description, category }, productIndex) => (
          <ProductCard
            key={productIndex}
            name={name}
            title={category}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(productIndex)}
          >{description}</ProductCard>
        ))}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {products.map(({ name }, productIndex) => (
              <Headless.Button
                key={productIndex}
                onClick={() => scrollTo(productIndex)}
                data-active={
                  activeIndex === productIndex ? true : undefined
                }
                aria-label={`Scroll to product ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-active:bg-gray-400 data-hover:bg-gray-400',
                  'forced-colors:data-active:bg-[Highlight] forced-colors:data-focus:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}