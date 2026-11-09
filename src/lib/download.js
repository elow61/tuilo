export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

export function downloadSvg(svgString, filename = 'icon.svg') {
  downloadBlob(new Blob([svgString], { type: 'image/svg+xml' }), filename)
}

export function downloadPng(svgString, size = 512, filename = 'icon.png') {
  const url = URL.createObjectURL(new Blob([svgString], { type: 'image/svg+xml' }))
  const img = new Image()
  img.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = size
    canvas.getContext('2d').drawImage(img, 0, 0, size, size)
    URL.revokeObjectURL(url)
    canvas.toBlob((blob) => downloadBlob(blob, filename))
  }
  img.src = url
}