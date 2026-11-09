import { describe, it, expect } from 'vitest'
import recolor from './recolor.js'

const DUOTONE_BODY =
  '<g fill="currentColor"><path d="M1" opacity=".2"/><path d="M2"/></g>'

describe('recolor', () => {
  it('replaces currentColor with the primary color', () => {
    const result = recolor(DUOTONE_BODY, '#111111', '#222222')

    expect(result).toContain('fill="#111111"')
    expect(result).not.toContain('currentColor')
  })

  it('replaces the duotone opacity layer with the secondary color', () => {
    const result = recolor(DUOTONE_BODY, '#111111', '#222222')

    expect(result).toContain('<path d="M1" fill="#222222"/>')
    expect(result).not.toContain('opacity')
  })

  it('only applies the primary color when there is no opacity layer', () => {
    const body = '<g fill="currentColor"><path d="M2"/></g>'

    expect(recolor(body, '#111111', '#222222')).toBe('<g fill="#111111"><path d="M2"/></g>')
  })
})
