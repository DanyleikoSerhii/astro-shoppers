import { createSignal, onCleanup, onMount } from 'solid-js'
import { createSlider } from 'solid-slider'

import cx from 'clsx'

import 'solid-slider/slider.css'
import './slider.scss'

const slides = [
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/2560px-Cat_August_2010-4.jpg',
    alt: 'slider',
  },
  {
    image: 'https://i.imgur.com/OB0y6MR.jpg',
    alt: 'slider2',
  },
]

type Props = {
  time?: number
}

export const Slider = ({ time = 4000 }: Props) => {
  const [currentIndex, setCurrentIndex] = createSignal(0)
  const [isMounted, setIsMounted] = createSignal(false)

  const [slider, { next }] = createSlider({ loop: true })

  onMount(() => {
    setIsMounted(true)

    const interval = setInterval(() => {
      next()
    }, time)

    onCleanup(() => clearInterval(interval))
  })

  return (
    <div class={cx('root', { hide: !isMounted() })}>
      <div class="slider" use:slider>
        {slides.map((slide) => (
          <div class="slide slide1">
            <img src={slide.image} alt={slide.alt} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      <div class="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            class={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex() === index ? 'bg-gray' : 'bg-red'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
