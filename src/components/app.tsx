import { ConvexContext, convexClient } from '../cvxsolid'

import { Counter } from '~/components/counter/counter'
import type { Component } from 'solid-js'

export const App: Component = () => {
  return (
    <ConvexContext.Provider value={convexClient}>
      <Counter />
    </ConvexContext.Provider>
  )
}
