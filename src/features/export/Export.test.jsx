import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Export from './Export.jsx'
import renderWithProvider from '../../test/renderWithProvider.jsx'
import { downloadSvg, downloadPng } from '../../lib/download.js'

vi.mock('../../lib/download.js', () => ({
  downloadSvg: vi.fn(),
  downloadPng: vi.fn(),
}))

describe('Export', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  it('downloads a complete SVG when clicking "Export to SVG"', async () => {
    renderWithProvider(<Export />)

    await userEvent.click(screen.getByRole('button', { name: 'Export to SVG' }))

    expect(downloadSvg).toHaveBeenCalledTimes(1)
    const svgString = downloadSvg.mock.calls[0][0]
    expect(svgString).toMatch(/^<svg xmlns="http:\/\/www.w3.org\/2000\/svg"/)
    expect(svgString).toMatch(/<\/svg>$/)
  })

  it('downloads a PNG from the same SVG when clicking "Export to PNG"', async () => {
    renderWithProvider(<Export />)

    await userEvent.click(screen.getByRole('button', { name: 'Export to PNG' }))

    expect(downloadPng).toHaveBeenCalledTimes(1)
    expect(downloadPng.mock.calls[0][0]).toMatch(/^<svg/)
  })
})
