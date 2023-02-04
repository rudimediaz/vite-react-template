import { useState } from 'react'

export function useCounter() {
  const [count, setCount] = useState(0)
  // yes, i don't memo this, because i can
  const multiplyByTen = count * 10

  return { count, setCount, multiplyByTen } as const
}
