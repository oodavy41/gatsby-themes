module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const blogPath = themeOptions.blogPath || `/blog`
  const postsPath = themeOptions.postsPath || `content/posts`
  const postsPrefix = themeOptions.postsPrefix || `/`
  const pagesPath = themeOptions.pagesPath || `content/pages`
  const tagsPath = themeOptions.tagsPath || `/tags`
  const externalLinks = themeOptions.externalLinks || []
  const navigation = themeOptions.navigation || []
  const showLineNumbers = themeOptions.showLineNumbers !== false
  const showCopyButton = themeOptions.showCopyButton !== false
  const formatString = themeOptions.formatString || `DD.MM.YYYY`
  const mdx = typeof themeOptions.mdx === `undefined` ? false : themeOptions.mdx
  const sharp = typeof themeOptions.sharp === `undefined` ? false : themeOptions.sharp

  return {
    basePath,
    blogPath,
    postsPath,
    postsPrefix,
    pagesPath,
    tagsPath,
    externalLinks,
    navigation,
    showLineNumbers,
    showCopyButton,
    formatString,
    mdx,
    sharp,
  }
}
