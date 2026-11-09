import { describe, it, expect } from 'vitest'
import { displayName } from './iconName.js'

describe('displayName', () => {
  it('removes the -duotone suffix', () => {
    expect(displayName('calendar-duotone')).toBe('calendar')
  })

  it('keeps the rest of a composed name', () => {
    expect(displayName('chart-bar-duotone')).toBe('chart-bar')
  })

  it('returns an empty string when no icon is given', () => {
    expect(displayName('')).toBe('')
    expect(displayName(undefined)).toBe('')
  })
})
