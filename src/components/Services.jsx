import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { experience, services } from '../data.js'

export default function Services() {
  return (
    <section id="layanan" className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid gap-4 lg:grid-cols-5">
        {/* Layanan */}
        <Reveal className="rounded-oneui bg-card p-7 shadow-oneui sm:p-9 lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Layanan</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Yang bisa saya bantu</h2>
          <div className="mt-6 space-y-3">
            {services.map((s) => (
              <div key={s.title} className="flex items-start gap-4 rounded-3xl bg-card2 p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-accentsoft text-accent">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <div>
                  <h3 className="font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Pengalaman */}
        <Reveal delay={100} className="rounded-oneui bg-card p-7 shadow-oneui sm:p-9 lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Perjalanan</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Pengalaman</h2>
          <ol className="relative mt-6 space-y-6 border-l-2 border-line pl-6">
            {experience.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute -left-[33px] top-1.5 size-3 rounded-full bg-accent ring-4 ring-card" />
                <p className="text-xs font-semibold text-accent">{e.period}</p>
                <h3 className="mt-1 font-bold">{e.title}</h3>
                <p className="text-sm text-muted">{e.place}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
