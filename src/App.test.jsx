import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'
import renderWithProvider from './test/renderWithProvider.jsx'
import { defaultDuo, duoPalettes } from './data/duoPalettes.js'

function getIconCard(name) {
  return screen.getByText(name, { selector: '.iconCard p' }).closest('.iconCard')
}

function getPreview(container) {
  return container.querySelector('.previewContainer')
}

describe('App (integration)', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  it('renders every step of the builder', () => {
    renderWithProvider(<App />)

    expect(screen.getByRole('heading', { name: 'Tuilo' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '1 • KEYWORD' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '2 • PICTO' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '3 • COLORS' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '4 • EXPORT' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'PREVIEW' })).toBeInTheDocument()
  })

  it('shows suggestions, then filters icons when searching', async () => {
    renderWithProvider(<App />)
    expect(getIconCard('calendar')).toBeInTheDocument()

    await userEvent.type(screen.getByRole('textbox'), 'folder')

    expect(getIconCard('folder')).toBeInTheDocument()
    expect(screen.queryByText('calendar', { selector: '.iconCard p' })).not.toBeInTheDocument()
  })

  it('selects an icon and shows it in the preview and on the home screen', async () => {
    const { container } = renderWithProvider(<App />)

    await userEvent.click(getIconCard('calendar'))

    expect(getIconCard('calendar')).toHaveClass('selected')
    expect(within(getPreview(container)).getByRole('heading', { name: 'calendar' })).toBeInTheDocument()
    expect(container.querySelector('.userApp')).toHaveTextContent('calendar')
    expect(screen.queryByText('My app')).not.toBeInTheDocument()
  })

  it('renders the selected icon with the selected colors in the preview', async () => {
    const { container } = renderWithProvider(<App />)
    await userEvent.click(getIconCard('calendar'))

    const previewSvg = () => getPreview(container).querySelector('.previewCanvas svg')
    expect(previewSvg().innerHTML).toContain(defaultDuo.primary)

    const otherDuo = duoPalettes[1]
    await userEvent.click(screen.getByRole('button', { name: otherDuo.name }))

    expect(previewSvg().innerHTML).toContain(otherDuo.primary)
    expect(previewSvg().innerHTML).toContain(otherDuo.secondary)
  })

  it('shows the icon at the three preview sizes', async () => {
    const { container } = renderWithProvider(<App />)
    await userEvent.click(getIconCard('calendar'))

    const sizes = getPreview(container).querySelectorAll('.iconSize svg')
    expect(sizes).toHaveLength(3)
    expect(screen.getByText('96 px')).toBeInTheDocument()
    expect(screen.getByText('48 px')).toBeInTheDocument()
    expect(screen.getByText('32 px')).toBeInTheDocument()
  })
})
