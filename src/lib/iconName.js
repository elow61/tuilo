export const DUOTONE_SUFFIX = '-duotone'

export function displayName(iconName) {
  return iconName ? iconName.replace(DUOTONE_SUFFIX, '') : ''
}
