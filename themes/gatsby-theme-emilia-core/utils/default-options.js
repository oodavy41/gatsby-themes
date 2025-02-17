module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const projectsPath = themeOptions.projectsPath || `content/projects`
  const assetsPath = themeOptions.projectsPath || `content/assets`
  const formatString = themeOptions.formatString || `DD.MM.YYYY`
  const mdx = typeof themeOptions.mdx === `undefined` ? false : themeOptions.mdx
  const sharp = typeof themeOptions.sharp === `undefined` ? false : themeOptions.sharp

  return {
    basePath,
    projectsPath,
    assetsPath,
    formatString,
    mdx,
    sharp,
  }
}
