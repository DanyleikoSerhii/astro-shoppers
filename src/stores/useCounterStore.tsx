import { createStore } from 'solid-js/store'

export const useCounterStore = () => {
  const [state, setState] = createStore({ count: 0 })

  return {
    count: () => state.count,
    setCount: (value: number) => setState('count', value)
  }
}