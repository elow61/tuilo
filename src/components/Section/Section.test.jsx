import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Section from './Section.jsx'

describe('Section', () => {
  it('displays the title in uppercase', () => {
    render(<Section title="1 • Keyword">content</Section>)

    expect(screen.getByRole('heading', { name: '1 • KEYWORD' })).toBeInTheDocument()
  })

  it('renders no heading without a title', () => {
    render(<Section>content</Section>)

    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByText('content')).toBeInTheDocument()
  })
})
