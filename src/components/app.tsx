import { ConvexContext, convexClient } from '../cvxsolid'

import { Counter } from '~/components/counter/counter'

export const App = () => {
  return (
    <ConvexContext.Provider value={convexClient}>
      <Counter />
    </ConvexContext.Provider>
  )
}
