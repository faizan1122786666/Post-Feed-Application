import MarketingLayout from '../components/MarketingLayout'
import { siteSeo, usePageSeo } from '../utils/seo'

const pageConfig = {
  '/features': {
    eyebrow: 'Platform Features',
    title: 'AI social media scheduling features built for consistent publishing.',
    description:
      'Explore how PostByMe helps teams manage content calendars, streamline approvals, and automate publishing workflows.',
    sections: [
      'Plan and organize campaigns with a cleaner content calendar workflow.',
      'Prepare posts and captions faster with AI-assisted content operations.',
      'Manage publishing tasks from one place instead of scattered tools.'
    ]
  },
  '/pricing': {
    eyebrow: 'Pricing',
    title: 'Simple pricing structure for an AI social media automation platform.',
    description:
      'Review the pricing page for PostByMe and compare the value of AI-powered scheduling, workflow management, and publishing support.',
    sections: [
      'Position plans around usage, team size, and automation depth.',
      'Keep pricing copy transparent and easy to compare for visitors.',
      'Use this page to capture commercial intent around scheduling software.'
    ]
  },
  '/blog': {
    eyebrow: 'Blog',
    title: 'Guides, updates, and strategies for social media automation.',
    description:
      'Read blog content focused on AI social media scheduling, content planning, publishing systems, and organic growth strategy.',
    sections: [
      'Publish educational articles that target search intent across top-funnel keywords.',
      'Add product-led tutorials that connect content strategy to actual use cases.',
      'Keep the blog active with expert commentary, workflows, and case studies.'
    ]
  },
  '/contact': {
    eyebrow: 'Contact',
    title: 'Talk to the PostByMe team about AI social media scheduling.',
    description:
      'Reach out to learn more about PostByMe, request a demo, or discuss how to improve your publishing workflow with AI automation.',
    sections: [
      'Use the contact page for demo requests, partnerships, and sales conversations.',
      'Keep NAP, form, and support details consistent across the site.',
      'Maintain a trust-focused page that supports conversions and brand credibility.'
    ]
  }
}

const MarketingPage = ({ pathname }) => {
  const page = pageConfig[pathname]

  usePageSeo({
    title: `PostByMe | ${page.eyebrow}`,
    description: page.description,
    pathname,
    keywords: siteSeo.defaultKeywords,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: `PostByMe ${page.eyebrow}`,
      url: `${siteSeo.siteUrl}${pathname}/`,
      description: page.description
    }
  })

  return (
    <MarketingLayout eyebrow={page.eyebrow} title={page.title} description={page.description}>
      <section className="mx-auto max-w-5xl px-6 pb-20 md:pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          {page.sections.map((section) => (
            <article key={section} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-lg font-black text-slate-950">{page.eyebrow}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{section}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  )
}

export default MarketingPage
