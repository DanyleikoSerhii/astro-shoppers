import { createSignal, onCleanup, onMount } from 'solid-js'
import { createSlider } from 'solid-slider'

import type { FileStorage } from '~convex/files'

import cx from 'clsx'

import 'solid-slider/slider.css'
import './slider.scss'

type Props = {
  files: FileStorage[]
  time?: number
}

export const Slider = ({ files, time = 4000 }: Props) => {
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
        {files.map((file) => (
          <div class="slide slide1">
            <img src={file.url!} alt="" loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      <div class="flex justify-center mt-4 space-x-2">
        {files.map((_, index) => (
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
