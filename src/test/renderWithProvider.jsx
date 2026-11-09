import { render } from '@testing-library/react'
import TuiloProvider from '../contexts/TuiloProvider.jsx'

export default function renderWithProvider(ui) {
  return render(<TuiloProvider>{ui}</TuiloProvider>)
}
