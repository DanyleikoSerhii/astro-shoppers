import { createMutation, createQuery } from '~/cvxsolid'
import { api } from '~convex/_generated/api'

export const useCounter = () => {
  const count = createQuery<number>(api.counter.get)
  const onIncrement = createMutation<void>(api.counter.increment)

  return {
    count,
    onIncrement,
  }
}
