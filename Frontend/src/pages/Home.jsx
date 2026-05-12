import { Link } from 'react-router-dom'
import MarketingLayout from '../components/MarketingLayout'
import { siteSeo, usePageSeo } from '../utils/seo'

const features = [
  {
    title: 'AI scheduling workflow',
    description: 'Organize your content calendar and schedule social posts without switching between disconnected tools.'
  },
  {
    title: 'Faster content production',
    description: 'Draft captions, manage assets, and prepare posts for publishing with a cleaner workflow.'
  },
  {
    title: 'Automation that scales',
    description: 'Reduce repetitive manual work so creators, agencies, and brands can publish more consistently.'
  }
]

const Home = () => {
  usePageSeo({
    title: 'PostByMe | AI Social Media Scheduling & Automation Platform',
    description:
      'PostByMe is an AI social media scheduling tool for planning content, automating workflows, managing your content calendar, and publishing social posts faster.',
    pathname: '/',
    keywords: siteSeo.defaultKeywords,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'PostByMe Homepage',
      url: `${siteSeo.siteUrl}/`,
      description:
        'Homepage for PostByMe, an AI social media automation and scheduling platform for creators, agencies, and brands.'
    }
  })

  return (
    <MarketingLayout
      eyebrow="AI Social Media Scheduling Tool"
      title="Schedule, organize, and automate social content with AI."
      description="PostByMe gives creators, teams, and brands a faster way to manage content calendars, prepare posts, and streamline social media publishing from one place."
    >
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-8 md:grid-cols-[1.25fr_0.75fr]">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:p-10">
          <h2 className="max-w-2xl text-3xl font-black tracking-tight md:text-4xl">
            Built for modern AI social media management.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            Use PostByMe to centralize your publishing workflow, keep campaigns on schedule, and simplify how your team creates and ships social content.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/feed"
              className="rounded-full bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Launch Dashboard
            </Link>
            <Link
              to="/create-post"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-sky-400 hover:text-sky-300"
            >
              Create a Post
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 backdrop-blur">
          <h2 className="text-xl font-black text-slate-950">Core SEO topics covered</h2>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
            <li>AI social media scheduler</li>
            <li>Social media automation platform</li>
            <li>Content calendar software</li>
            <li>Instagram and LinkedIn scheduling workflow</li>
            <li>AI-assisted post publishing</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 md:pb-28">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">{feature.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </MarketingLayout>
  )
}

export default Home
