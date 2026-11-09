import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import useIconSearch from './useIconSearch.js'

describe('useIconSearch', () => {
  it('returns duotone suggestions when the search is empty', () => {
    const { result } = renderHook(() => useIconSearch(''))

    expect(result.current.length).toBeGreaterThan(0)
    expect(result.current).toContain('calendar-duotone')
    result.current.forEach(name => expect(name).toContain('-duotone'))
  })

  it('only returns duotone icons matching the search', () => {
    const { result } = renderHook(() => useIconSearch('calendar'))

    expect(result.current).toContain('calendar-duotone')
    result.current.forEach(name => {
      expect(name).toContain('calendar')
      expect(name.endsWith('-duotone')).toBe(true)
    })
  })

  it('is case insensitive', () => {
    const { result } = renderHook(() => useIconSearch('CaLeNdAr'))

    expect(result.current).toContain('calendar-duotone')
  })

  it('returns an empty list when nothing matches', () => {
    const { result } = renderHook(() => useIconSearch('zzz-no-icon-zzz'))

    expect(result.current).toEqual([])
  })

  it('updates the results when the search changes', () => {
    const { result, rerender } = renderHook(({ search }) => useIconSearch(search), {
      initialProps: { search: 'calendar' },
    })
    expect(result.current).toContain('calendar-duotone')

    rerender({ search: 'folder' })
    expect(result.current).not.toContain('calendar-duotone')
    expect(result.current).toContain('folder-duotone')
  })
})
