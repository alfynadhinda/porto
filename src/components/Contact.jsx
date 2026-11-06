import { useState } from 'react'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

const field =
  'w-full rounded-2xl border border-transparent bg-card2 px-4 py-3.5 text-base outline-none transition placeholder:text-muted focus:border-accent focus:bg-card'

export default function Contact() {
  const [form, setForm] = useState({ name: '', message: '' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  // Situs statis (GitHub Pages) tidak punya backend, jadi form membuka aplikasi email pengguna
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Tawaran project dari ${form.name}`)
    const body = encodeURIComponent(form.message)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const channels = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'chat', label: 'WhatsApp', value: `+${profile.whatsapp}`, href: `https://wa.me/${profile.whatsapp}` },
    { icon: 'github', label: 'GitHub', value: `@${profile.github}`, href: `https://github.com/${profile.github}` },
  ]

  return (
    <section id="kontak" className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal
          className="rounded-oneui p-7 text-white shadow-oneui sm:p-9 lg:col-span-2"
          style={{ background: 'linear-gradient(135deg,#3e91ff,#8b5cf6)' }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-white/80">Kontak</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            Punya project? Mari ngobrol.
          </h2>
          <p className="mt-3 text-white/85">
            {profile.openForWork ? profile.availability : 'Saat ini belum menerima project baru.'}
          </p>
          <div className="mt-6 space-y-2">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-white/15 p-3.5 backdrop-blur transition hover:bg-white/25 active:scale-[0.98]"
              >
                <Icon name={c.icon} className="size-5 shrink-0" />
                <span className="min-w-0">
                  <span className="block text-xs text-white/70">{c.label}</span>
                  <span className="block truncate text-sm font-semibold">{c.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100} className="rounded-oneui bg-card p-7 shadow-oneui sm:p-9 lg:col-span-3">
          <h3 className="text-2xl font-extrabold tracking-tight">Kirim pesan</h3>
          <p className="mt-1 text-sm text-muted">Pesan akan dibuka di aplikasi email Anda.</p>
          <form onSubmit={submit} className="mt-6 space-y-3">
            <label className="block">
              <span className="sr-only">Nama</span>
              <input required className={field} placeholder="Nama Anda" value={form.name} onChange={set('name')} />
            </label>
            <label className="block">
              <span className="sr-only">Pesan</span>
              <textarea
                required
                rows={6}
                className={`${field} resize-none`}
                placeholder="Ceritakan kebutuhan project Anda..."
                value={form.message}
                onChange={set('message')}
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 font-semibold text-accentink transition hover:opacity-90 active:scale-[0.98] sm:w-auto"
            >
              Kirim pesan <Icon name="send" className="size-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
