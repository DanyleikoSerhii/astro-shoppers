import { createMutation, createQuery } from '~/cvxsolid'
import { api } from '~convex/_generated/api'

export const useCounter = () => {
 const convexCount = createQuery<number>(api.counter.get)
 const incrementGlobalCount = createMutation<void>(api.counter.increment)

 return {
    count: convexCount,
    onIncrement: incrementGlobalCount,
 }
}
