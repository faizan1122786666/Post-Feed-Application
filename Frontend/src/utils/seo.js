import { useEffect } from 'react'

const SITE_URL = 'https://www.postbyme.me'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.svg`

const ensureMetaTag = (attribute, value) => {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }

  return element
}

const ensureCanonical = () => {
  let link = document.head.querySelector('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  return link
}

const ensureStructuredData = () => {
  let script = document.head.querySelector('script[data-seo="page-jsonld"]')

  if (!script) {
    script = document.createElement('script')
    script.type = 'application/ld+json'
    script.dataset.seo = 'page-jsonld'
    document.head.appendChild(script)
  }

  return script
}

const buildPageUrl = (pathname) => {
  if (!pathname || pathname === '/') {
    return `${SITE_URL}/`
  }

  return `${SITE_URL}${pathname.endsWith('/') ? pathname : `${pathname}/`}`
}

export const usePageSeo = ({
  title,
  description,
  pathname,
  keywords,
  image = DEFAULT_OG_IMAGE,
  robots = 'index, follow',
  structuredData = []
}) => {
  useEffect(() => {
    const url = buildPageUrl(pathname)

    document.title = title
    document.documentElement.lang = 'en'

    ensureCanonical().setAttribute('href', url)

    ensureMetaTag('name', 'description').setAttribute('content', description)
    ensureMetaTag('name', 'keywords').setAttribute('content', keywords)
    ensureMetaTag('name', 'robots').setAttribute('content', robots)
    ensureMetaTag('name', 'googlebot').setAttribute('content', robots)
    ensureMetaTag('property', 'og:title').setAttribute('content', title)
    ensureMetaTag('property', 'og:description').setAttribute('content', description)
    ensureMetaTag('property', 'og:url').setAttribute('content', url)
    ensureMetaTag('property', 'og:image').setAttribute('content', image)
    ensureMetaTag('property', 'twitter:title').setAttribute('content', title)
    ensureMetaTag('property', 'twitter:description').setAttribute('content', description)
    ensureMetaTag('property', 'twitter:url').setAttribute('content', url)
    ensureMetaTag('property', 'twitter:image').setAttribute('content', image)

    ensureStructuredData().textContent = JSON.stringify(structuredData)
  }, [description, image, keywords, pathname, structuredData, title])
}

export const siteSeo = {
  siteName: 'PostByMe',
  siteUrl: SITE_URL,
  defaultKeywords:
    'AI social media scheduling tool, AI social media scheduler, social media automation platform, content calendar software, social media management software, Instagram scheduler, LinkedIn scheduler, automated posting tool, AI caption generator',
  defaultImage: DEFAULT_OG_IMAGE
}
