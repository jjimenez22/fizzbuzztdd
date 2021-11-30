import { match } from 'x-match-expression'

const isDivisibleBy =
  (dividient: number) =>
  (quotient: number): boolean =>
    quotient % dividient === 0

const fizzBuzz = (n: number): string =>
  match(n)
    .case(isDivisibleBy(15), 'fizzbuzz')
    .case(isDivisibleBy(3), 'fizz')
    .case(isDivisibleBy(5), 'buzz')
    .default(`${n}`)

export default fizzBuzz
