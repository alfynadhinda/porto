import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { profile, stats } from '../data.js'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6 pt-28 sm:pt-32">
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Kartu utama */}
        <Reveal className="rounded-oneui bg-card p-7 shadow-oneui sm:p-10 lg:col-span-2">
          {profile.openForWork && (
            <div className="inline-flex items-center gap-2.5 rounded-full bg-emerald-500/12 px-4 py-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="relative flex size-2.5">
                <span className="ping-soft absolute inline-flex size-full rounded-full bg-emerald-500" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              Open for work
            </div>
          )}

          <p className="mt-8 text-lg font-medium text-muted">Halo, saya {profile.name} 👋</p>
          <h1 className="mt-2 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#project"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accentink transition hover:opacity-90 active:scale-95"
            >
              Lihat project <Icon name="arrow" className="size-4" />
            </a>
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 rounded-full bg-card2 px-6 py-3.5 font-semibold transition hover:brightness-95 active:scale-95"
            >
              <Icon name="mail" className="size-4" /> Hubungi saya
            </a>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 font-semibold transition hover:bg-card2 active:scale-95"
              >
                <Icon name="download" className="size-4" /> CV
              </a>
            )}
          </div>
        </Reveal>

        {/* Kolom kanan */}
        <div className="grid gap-4">
          <Reveal
            delay={80}
            className="relative flex min-h-60 flex-col justify-between overflow-hidden rounded-oneui p-7 text-white shadow-oneui"
            style={{ background: 'linear-gradient(135deg,#3e91ff,#8b5cf6)' }}
          >
            <div className="float grid size-20 place-items-center rounded-[1.75rem] bg-white/20 text-3xl font-extrabold backdrop-blur">
              {profile.initials}
            </div>
            <div>
              <p className="text-2xl font-bold">{profile.role}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
                <Icon name="pin" className="size-4" /> {profile.location}
              </p>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full bg-white/15 blur-2xl" />
          </Reveal>

          <Reveal delay={140} className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-3xl bg-card p-4 text-center shadow-oneui">
                <p className="text-2xl font-extrabold text-accent">{s.value}</p>
                <p className="mt-1 text-[11px] font-medium leading-tight text-muted">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
