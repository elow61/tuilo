import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchInput from './SearchInput.jsx'

describe('SearchInput', () => {
  it('calls onValueChange with the typed value', async () => {
    const onValueChange = vi.fn()
    render(<SearchInput onValueChange={onValueChange} />)

    await userEvent.type(screen.getByRole('textbox'), 'cal')

    expect(onValueChange).toHaveBeenLastCalledWith('cal')
  })
})
