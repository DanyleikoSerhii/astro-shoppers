import { type Component, createSignal } from 'solid-js'
import { api } from '~convex/_generated/api'

import { createMutation, createQuery } from '~/cvxsolid'

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0)

  const convexCount = createQuery<number>(api.counter.get)
  const incrementGlobalCount = createMutation<void>(api.counter.increment)

  return (
    <div>
      <p>The current local value is {count()}</p>
      <p>The current global value is {convexCount()}</p>
      <button onClick={() => setCount(count() + 1)}>Increment local count!</button>
      <button onClick={() => incrementGlobalCount({ increment: 2 })}>Increment global count!</button>
    </div>
  )
}
