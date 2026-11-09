import { describe, it, expect } from 'vitest'
import { buildSVG } from './buildSVG.js'

describe('buildSVG', () => {
  const body = '<path d="M1"/>'

  it('wraps the body in a standalone <svg> element', () => {
    const svg = buildSVG(body)

    expect(svg.startsWith('<svg')).toBe(true)
    expect(svg.endsWith('</svg>')).toBe(true)
    expect(svg).toContain(body)
  })

  it('declares the SVG namespace, required for a standalone file', () => {
    expect(buildSVG(body)).toContain('xmlns="http://www.w3.org/2000/svg"')
  })

  it('uses the Phosphor 256x256 viewBox', () => {
    expect(buildSVG(body)).toContain('viewBox="0 0 256 256"')
  })

  it('produces a document the browser can parse as SVG', () => {
    const doc = new DOMParser().parseFromString(buildSVG(body), 'image/svg+xml')

    expect(doc.querySelector('parsererror')).toBeNull()
    expect(doc.documentElement.tagName).toBe('svg')
    expect(doc.querySelectorAll('path')).toHaveLength(1)
  })
})
