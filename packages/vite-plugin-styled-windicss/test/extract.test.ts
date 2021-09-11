import { APPLY_REGEX } from '../src/constants'
import { cases } from './cases'

import { CSSParser } from 'windicss/utils/parser'
import Windi from 'windicss'

const processor = new Windi()

describe('extract', () => {
  it('should work for nested css', () => {
    const next = cases.nested.replace(APPLY_REGEX, (_match, pre, applyCss) => {
      const parser = new CSSParser(`&{@apply ${applyCss}}`, processor)
      return `${pre} ${parser.parse().build()}`
    })
    expect(next).toMatchSnapshot('nested-css')
  })
})
