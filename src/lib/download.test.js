import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { downloadSvg } from './download.js'

describe('downloadSvg', () => {
  let clickedLink

  beforeEach(() => {
    URL.createObjectURL = vi.fn(() => 'blob:fake-url')
    URL.revokeObjectURL = vi.fn()
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function () {
      clickedLink = this
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    clickedLink = undefined
  })

  it('creates an SVG blob from the given string', async () => {
    downloadSvg('<svg></svg>')

    const blob = URL.createObjectURL.mock.calls[0][0]
    expect(blob.type).toBe('image/svg+xml')
    expect(await blob.text()).toBe('<svg></svg>')
  })

  it('clicks a link pointing to the blob with the default filename', () => {
    downloadSvg('<svg></svg>')

    expect(clickedLink.href).toBe('blob:fake-url')
    expect(clickedLink.download).toBe('icon.svg')
  })

  it('accepts a custom filename', () => {
    downloadSvg('<svg></svg>', 'my-app.svg')

    expect(clickedLink.download).toBe('my-app.svg')
  })
})
