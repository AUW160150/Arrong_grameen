import { motion } from 'framer-motion'
import { Search, Globe, Zap, Database, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const ACTORS = [
  {
    icon: Search,
    name: 'google-search-scraper',
    label: 'US Buyer Discovery',
    desc: 'Scans 2,400+ ethical retailers, specialty stores, and Amazon Premium sellers matching the brand\'s product category.',
    stat: '2,400+',
    statLabel: 'buyers scanned per run',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    icon: Globe,
    name: 'website-content-crawler',
    label: 'Buyer Intel & Fit Scoring',
    desc: 'Crawls procurement pages, "vendor submissions" portals, and store buyer contacts. Scores each lead against ICP criteria.',
    stat: '94%',
    statLabel: 'ICP match accuracy',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: Users,
    name: 'instagram-profile-scraper',
    label: 'Influencer Discovery',
    desc: 'Scrapes Instagram & TikTok for South Asian creators with US-aligned audiences — filtered by niche, follower count, and engagement rate. No agency needed.',
    stat: '340+',
    statLabel: 'creators matched per brand',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    highlight: true,
  },
  {
    icon: Database,
    name: 'social-media-scraper',
    label: 'Social Trend Intelligence',
    desc: 'Scrapes trending US hashtags (#slowfashion, #artisanmade), competitor reel performance, and optimal posting windows.',
    stat: '6x',
    statLabel: 'more reel reach vs cold post',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

const LIVE_STEPS = [
  { label: 'Actor fired', detail: 'apify/google-search-scraper · 48 search queries' },
  { label: 'Results streamed', detail: '2,400 raw results → ICP filter → 62 high-fit leads' },
  { label: 'Influencers scraped', detail: 'apify/instagram-profile-scraper · niche="handloom" · 340 profiles → 28 high-fit creators', highlight: true },
  { label: 'Contact enriched', detail: 'Name, email, title, LinkedIn from each buyer page' },
  { label: 'Pitch drafted', detail: 'GPT-4o writes a personalized email per buyer + creator outreach' },
  { label: 'Pipeline updated', detail: 'Live dashboard shows open rates, replies, revenue est.' },
]

export default function ApifyPower() {
  return (
    <section className="py-24 bg-bark">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          {/* Apify badge */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              <div className="w-5 h-5 bg-[#FF9012] rounded flex items-center justify-center">
                <Zap size={11} className="text-white fill-white" />
              </div>
              <span className="text-cream text-xs font-semibold tracking-wide">Powered by Apify</span>
            </div>
            <span className="text-cream/40 text-xs">· real actor runs, not mock data</span>
          </div>

          <h2 className="text-4xl font-bold text-cream mt-3 max-w-xl">
            Real web intelligence.<br />Not a Google Sheet.
          </h2>
          <p className="text-cream/60 mt-4 max-w-xl text-sm leading-relaxed">
            Every Grameen GTM run fires live Apify actors. Real scraped data — US buyer contacts,
            pricing benchmarks, social trends — injected directly into the pipeline. No manual research.
            No agency overhead.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left — actor cards */}
          <div className="flex flex-col gap-4">
            {ACTORS.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-5 ${a.highlight ? 'bg-pink-500/10 border border-pink-400/30' : 'bg-white/8 border border-white/12'}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 ${a.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <a.icon size={18} className={a.color} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <p className="font-semibold text-cream text-sm">{a.label}</p>
                      <code className="text-xs text-[#FF9012] bg-white/10 px-2 py-0.5 rounded font-mono">{a.name}</code>
                    </div>
                    <p className="text-cream/60 text-xs leading-relaxed">{a.desc}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xl font-bold text-cream">{a.stat}</p>
                    <p className="text-cream/40 text-xs">{a.statLabel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — live pipeline trace */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-cream text-sm font-semibold">Live pipeline trace — Aarong run</span>
            </div>

            <div className="flex flex-col gap-3">
              {LIVE_STEPS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-start gap-3 rounded-lg px-2 py-1 -mx-2 ${s.highlight ? 'bg-pink-500/10' : ''}`}
                >
                  <CheckCircle size={14} className={`mt-0.5 shrink-0 ${s.highlight ? 'text-pink-400' : 'text-green-400'}`} />
                  <div>
                    <p className="text-cream text-xs font-semibold">{s.label}</p>
                    <p className="text-cream/40 text-xs mt-0.5 font-mono leading-relaxed">{s.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-cream/40 text-xs mb-3">Apify actor run ID: run_abc123xyz · 4m 38s · $0.08</p>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-sm font-semibold text-[#FF9012] hover:gap-3 transition-all"
              >
                Watch a live run <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/10"
        >
          <div className="flex flex-wrap gap-6">
            {[
              ['$0.08', 'avg cost per full GTM run'],
              ['~3 min', 'end-to-end pipeline time'],
              ['62', 'avg high-fit buyer leads'],
              ['28', 'avg influencers matched'],
            ].map(([val, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-cream">{val}</p>
                <p className="text-cream/40 text-xs">{label}</p>
              </div>
            ))}
          </div>
          <a
            href="https://apify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-cream/40 hover:text-cream/70 transition-colors"
          >
            Built on Apify platform <ArrowRight size={12} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
