import { useCounter } from '@/hooks/counter'

type HelloProps = {
  greet?: string
}

export default function Hello({ greet = 'babe' }: HelloProps) {
  const { multiplyByTen } = useCounter()
  return (
    <div>
      Hello {greet} {multiplyByTen}
    </div>
  )
}
