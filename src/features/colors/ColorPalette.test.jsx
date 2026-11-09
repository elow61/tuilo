import { describe, it, expect } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ColorPalette from './ColorPalette.jsx'
import renderWithProvider from '../../test/renderWithProvider.jsx'
import { defaultDuo, duoPalettes } from '../../data/duoPalettes.js'

describe('ColorPalette', () => {
  it('shows the default duo and marks it as selected', () => {
    renderWithProvider(<ColorPalette />)

    expect(screen.getByText(defaultDuo.primary)).toBeInTheDocument()
    expect(screen.getByText(defaultDuo.secondary)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: defaultDuo.name })).toHaveAttribute('aria-pressed', 'true')
  })

  it('renders one swatch per suggested duo', () => {
    renderWithProvider(<ColorPalette />)

    duoPalettes.forEach(duo => {
      expect(screen.getByRole('button', { name: duo.name })).toBeInTheDocument()
    })
  })

  it('selects a duo when its swatch is clicked', async () => {
    renderWithProvider(<ColorPalette />)
    const otherDuo = duoPalettes[1]

    await userEvent.click(screen.getByRole('button', { name: otherDuo.name }))

    expect(screen.getByRole('button', { name: otherDuo.name })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: defaultDuo.name })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByText(otherDuo.primary)).toBeInTheDocument()
  })

  it('updates only the primary color with the primary picker', () => {
    renderWithProvider(<ColorPalette />)

    fireEvent.change(screen.getByLabelText(/primary/i), { target: { value: '#123456' } })

    expect(screen.getByText('#123456')).toBeInTheDocument()
    expect(screen.getByText(defaultDuo.secondary)).toBeInTheDocument()
  })

  it('updates only the secondary color with the secondary picker', () => {
    renderWithProvider(<ColorPalette />)

    fireEvent.change(screen.getByLabelText(/secondary/i), { target: { value: '#abcdef' } })

    expect(screen.getByText('#abcdef')).toBeInTheDocument()
    expect(screen.getByText(defaultDuo.primary)).toBeInTheDocument()
  })

  it('unselects every duo once a custom color is picked', () => {
    renderWithProvider(<ColorPalette />)

    fireEvent.change(screen.getByLabelText(/primary/i), { target: { value: '#123456' } })

    duoPalettes.forEach(duo => {
      expect(screen.getByRole('button', { name: duo.name })).toHaveAttribute('aria-pressed', 'false')
    })
  })
})
