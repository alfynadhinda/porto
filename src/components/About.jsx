import Reveal from './Reveal.jsx'
import { profile, skills } from '../data.js'

export default function About() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="rounded-oneui bg-card p-7 shadow-oneui sm:p-9 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Tentang</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Sedikit tentang saya</h2>
          <div className="mt-4 space-y-3 leading-relaxed text-muted">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="rounded-oneui bg-card p-7 shadow-oneui sm:p-9 lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Keahlian</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Tech stack</h2>
          <div className="mt-6 space-y-6">
            {skills.map((g) => (
              <div key={g.group}>
                <p className="mb-3 text-sm font-semibold text-muted">{g.group}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-card2 px-4 py-2 text-sm font-medium transition hover:bg-accentsoft hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
