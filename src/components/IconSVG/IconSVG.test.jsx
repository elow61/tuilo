import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import IconSVG from './IconSVG.jsx'

describe('IconSVG', () => {
  it('renders nothing without a body', () => {
    const { container } = render(<IconSVG body={undefined} />)

    expect(container).toBeEmptyDOMElement()
  })

  it('injects the body inside an svg with the Phosphor viewBox', () => {
    const { container } = render(<IconSVG body='<path d="M1"/>' />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('viewBox', '0 0 256 256')
    expect(svg.querySelector('path')).toHaveAttribute('d', 'M1')
  })

  it('uses the size prop for width and height', () => {
    const { container } = render(<IconSVG body='<path/>' size={96} />)
    const svg = container.querySelector('svg')

    expect(svg).toHaveAttribute('width', '96')
    expect(svg).toHaveAttribute('height', '96')
  })
})
