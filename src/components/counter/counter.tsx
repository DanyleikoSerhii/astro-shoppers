import { type Component, createSignal } from 'solid-js'
import { useCounter } from '~/queries/useCounter'

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0)

  const { count: convexCount, onIncrement } = useCounter()

  return (
    <div>
      <p>The current local value is {count()}</p>
      <p>The current global value is {convexCount()}</p>
      <button onClick={() => setCount(count() + 1)}>Increment local count!</button>
      <button onClick={() => onIncrement({ increment: 2 })}>Increment global count!</button>
    </div>
  )
}
