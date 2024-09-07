import { ConvexClient } from 'convex/browser'
import type { FunctionReference } from 'convex/server'
import { type Context, createContext, from, useContext } from 'solid-js'

export const ConvexContext: Context<ConvexClient | undefined> = createContext()
export const convexClient = new ConvexClient(import.meta.env.PUBLIC_CONVEX_URL!)

console.log(111, import.meta.env.PUBLIC_CONVEX_URL)

// Create a reactive SolidJS atom attached to a Convex query function.
export function createQuery<T>(query: FunctionReference<'query'>, args?: {}): () => T | undefined {
  const convex = useContext(ConvexContext)
  if (convex === undefined) {
    throw 'No convex context'
  }
  let fullArgs = args ?? {}
  return from((setter) => {
    return convex!.onUpdate(query, fullArgs, setter)
  })
}

export function createMutation<T>(mutation: FunctionReference<'mutation'>): (args?: {}) => Promise<T> {
  const convex = useContext(ConvexContext)
  if (convex === undefined) {
    throw 'No convex context'
  }

  return (args) => {
    let fullArgs = args ?? {}
    return convex.mutation(mutation, fullArgs)
  }
}

export function createAction<T>(action: FunctionReference<'action'>): (args?: {}) => Promise<T> {
  const convex = useContext(ConvexContext)
  if (convex === undefined) {
    throw 'No convex context'
  }
  return (args) => {
    let fullArgs = args ?? {}
    return convex.action(action, fullArgs)
  }
}
