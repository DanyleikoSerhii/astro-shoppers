import { type Component } from 'solid-js'
import { useCounter } from '~/queries/useCounter'

export const Counter: Component = () => {
  const { count: convexCount, onIncrement } = useCounter()

  return (
    <div>
      <p>The current global value is {convexCount()}</p>
      <button onClick={() => onIncrement({ increment: 2 })}>Increment global count!</button>
    </div>
  )
}
