import { useMemo } from 'react'
import ph from '@iconify-json/ph/icons.json'
import { DUOTONE_SUFFIX } from '../lib/iconName.js'

const SUGGESTIONS = ['chart', 'cube', 'calendar', 'chat', 'folder']
const ALL_NAMES = Object.keys(ph.icons)

export default function useIconSearch(search) {
  return useMemo(() => {
    if (!search) {
      return ALL_NAMES.filter(name => SUGGESTIONS.some(s => name.includes(s + DUOTONE_SUFFIX)))
    }

    const query = search.toLowerCase()
    return ALL_NAMES.filter(name => {
      const lower = name.toLowerCase()
      return lower.endsWith(DUOTONE_SUFFIX) && lower.includes(query)
    })
  }, [search])
}
