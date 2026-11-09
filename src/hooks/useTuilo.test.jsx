import { describe, it, expect, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useTuilo } from './useTuilo.js'
import TuiloProvider from '../contexts/TuiloProvider.jsx'
import { defaultDuo, duoPalettes } from '../data/duoPalettes.js'

const wrapper = ({ children }) => <TuiloProvider>{children}</TuiloProvider>

describe('useTuilo', () => {
  it('throws when used outside of TuiloProvider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => renderHook(() => useTuilo())).toThrow('TuiloContext is null')

    vi.restoreAllMocks()
  })

  it('exposes the default state', () => {
    const { result } = renderHook(() => useTuilo(), { wrapper })

    expect(result.current.mode).toBe('dark')
    expect(result.current.selectedIcon).toBe('')
    expect(result.current.selectedColors).toEqual(defaultDuo)
    expect(result.current.createdIcon).toBeUndefined()
  })

  it('builds a recolored icon when an icon is selected', () => {
    const { result } = renderHook(() => useTuilo(), { wrapper })

    act(() => result.current.setSelectedIcon('calendar-duotone'))

    expect(result.current.createdIcon).toContain(defaultDuo.primary)
    expect(result.current.createdIcon).toContain(defaultDuo.secondary)
    expect(result.current.createdIcon).not.toContain('currentColor')
  })

  it('recolors the icon when the colors change', () => {
    const { result } = renderHook(() => useTuilo(), { wrapper })
    const otherDuo = duoPalettes[1]

    act(() => result.current.setSelectedIcon('calendar-duotone'))
    act(() => result.current.setSelectedColors(otherDuo))

    expect(result.current.createdIcon).toContain(otherDuo.primary)
    expect(result.current.createdIcon).not.toContain(defaultDuo.primary)
  })
})
