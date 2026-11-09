import { describe, it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HomeScreenPreview from './HomeScreenPreview.jsx'
import renderWithProvider from '../../test/renderWithProvider.jsx'
import { fakeApps } from '../../data/fakeApps.js'

describe('HomeScreenPreview', () => {
  it('starts in dark mode', () => {
    const { container } = renderWithProvider(<HomeScreenPreview title="In context" />)

    expect(screen.getByRole('button', { name: 'dark' })).toHaveAttribute('aria-pressed', 'true')
    expect(container.querySelector('.home-bg-dark')).toBeInTheDocument()
  })

  it('switches to light mode', async () => {
    const { container } = renderWithProvider(<HomeScreenPreview title="In context" />)

    await userEvent.click(screen.getByRole('button', { name: 'light' }))

    expect(screen.getByRole('button', { name: 'light' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'dark' })).toHaveAttribute('aria-pressed', 'false')
    expect(container.querySelector('.home-bg-light')).toBeInTheDocument()
    expect(container.querySelector('.home-bg-dark')).not.toBeInTheDocument()
  })

  it('shows a placeholder app name and every fake app', () => {
    renderWithProvider(<HomeScreenPreview title="In context" />)

    expect(screen.getByText('My app')).toBeInTheDocument()
    fakeApps.forEach(app => expect(screen.getByText(app.name)).toBeInTheDocument())
  })
})
