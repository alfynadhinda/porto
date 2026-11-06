import { useMemo, useState } from 'react'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  const categories = useMemo(() => ['Semua', ...new Set(projects.map((p) => p.category))], [])
  const [active, setActive] = useState('Semua')
  const list = active === 'Semua' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="project" className="mx-auto max-w-6xl px-4 py-6">
      <Reveal className="rounded-oneui bg-card p-7 shadow-oneui sm:p-9">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Portofolio</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Project</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition active:scale-95 ${
                  active === c ? 'bg-accent text-accentink' : 'bg-card2 text-muted hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {list.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-[1.75rem] bg-card2 transition duration-300 hover:-translate-y-1"
            >
              <div
                className="relative grid h-44 place-items-center overflow-hidden"
                style={{ background: p.gradient }}
              >
                <Icon name="code" className="size-14 text-white/90 transition duration-500 group-hover:scale-110" />
                <span className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accentink transition hover:opacity-90 active:scale-95"
                  >
                    Demo <Icon name="arrow" className="size-4" />
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-card px-4 py-2 text-sm font-semibold transition hover:brightness-95 active:scale-95"
                  >
                    <Icon name="github" className="size-4" /> Kode
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
