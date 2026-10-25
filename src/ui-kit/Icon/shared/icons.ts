const svgResources = new Map<string, string>()
const imageResources = new Map<string, string>()

function extractName(filePath: string) {
  return filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'))
}

function loadIcons() {
  if (svgResources.size > 0) return

  const svgModules = import.meta.glob('@/assets/icons/**/*.svg', {
    query: '?raw',
    import: 'default',
    eager: true,
  })
  for (const filePath in svgModules) {
    svgResources.set(extractName(filePath), String(svgModules[filePath]))
  }

  const imageModules = import.meta.glob('@/assets/images/**/*.png', {
    query: '?url',
    import: 'default',
    eager: true,
  })
  for (const filePath in imageModules) {
    imageResources.set(extractName(filePath), String(imageModules[filePath]))
  }
}

function getSvgIcon(name: string) {
  return svgResources.get(name)
}

function getImageUrl(name: string) {
  return imageResources.get(name)
}

export { getImageUrl, getSvgIcon, loadIcons, svgResources }
