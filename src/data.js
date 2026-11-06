// =====================================================================
//  EDIT DI SINI SAJA — semua konten website diambil dari file ini.
// =====================================================================

export const profile = {
  name: 'Alfy Nadhinda',
  initials: 'AN',
  role: 'Web Developer & IT Support',
  location: 'Yogyakarta, Indonesia',
  openForWork: true, // ubah ke false untuk menyembunyikan badge "Open for work"
  availability: 'Tersedia untuk project freelance & full-time',
  headline: 'Saya membangun website yang cepat, rapi, dan mudah dipakai.',
  summary:
    'Saya percaya produk digital yang baik tidak harus rumit. Ia perlu terasa jelas, bekerja dengan baik, dan membantu orang menyelesaikan sesuatu.',
  about: [
    'Saya menikmati proses memahami sebuah masalah, menyusun solusi, lalu menerjemahkannya menjadi aplikasi yang bisa digunakan. Ketertarikan saya mencakup pengembangan web, basis data, keamanan informasi, serta integrasi perangkat IoT.',
    'Di luar coding, saya suka mengeksplorasi desain antarmuka dan mengikuti perkembangan ekosistem web terbaru.',
  ],
  email: 'alfy2204@gmail.com',
  whatsapp: '6285743830777', // format internasional tanpa +
  github: 'alfynadhinda',
  cvUrl: '', // isi link CV (mis. file di folder public: './cv.pdf'); kosongkan untuk menyembunyikan tombol
}

export const stats = [
  { value: '1+', label: 'Tahun pengalaman' },
  { value: '5', label: 'Project selesai' },
  { value: '5', label: 'Klien puas' },
]

export const skills = [
  { group: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'] },
  { group: 'Backend', items: ['Node.js', 'REST API', 'PostgreSQL'] },
  { group: 'Tools', items: ['Git & GitHub', 'Vite', 'Figma', 'Docker'] },
]

export const projects = [
  {
    title: 'Toko Online UMKM',
    desc: 'Katalog produk dan keranjang belanja dengan checkout via WhatsApp untuk pelaku UMKM.',
    tags: ['Javascript', 'CSS', 'HTML'],
    category: 'Web App',
    gradient: 'linear-gradient(135deg,#3e91ff,#8b5cf6)',
    demo: 'https://alfynadhinda.github.io/toko-umkm',
    repo: 'https://github.com/alfynadhinda/toko-umkm',
  },
  {
    title: 'Smart Dashboard IoT',
    desc: 'Dashboard Smart Gate Monitoring dengan streamlit, beserta file arduino.',
    tags: ['Python', 'Jupyter Notebook', 'C++'],
    category: 'IoT & Dashboard',
    gradient: 'linear-gradient(135deg,#10b981,#06b6d4)',
    repo: 'https://github.com/alfynadhinda/Sensor-IoT',
  },
  {
    title: 'Website Enkripsi AES',
    desc: 'Sistem enkripsi dan dekripsi file menggunakan algoritma AES.',
    tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    category: 'Web App',
    gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    repo: 'https://github.com/alfynadhinda/enkripsi-aes',
  },
  {
    title: 'Sistem Presensi Siswa',
    desc: 'Sistem presensi siswa berbasis web dengan fitur pencatatan dan laporan.',
    tags: ['PHP', 'HTML', 'CSS'],
    category: 'Web App',
    gradient: 'linear-gradient(135deg,#ec4899,#8b5cf6)',
    repo: 'https://github.com/alfynadhinda/Sistem-Absensi-SMK',
  },
  {
    title: 'Aplikasi Catatan',
    desc: 'Aplikasi catatan dengan mode gelap, pencarian cepat, dan penyimpanan lokal.',
    tags: ['JavaScript', 'HTML'],
    category: 'Web App',
    gradient: 'linear-gradient(135deg,#3e91ff,#8b5cf6)',
    demo: 'https://alfynadhinda.github.io/ruang-catatan',
    repo: 'https://github.com/alfynadhinda/ruang-catatan',
  },
]

export const experience = [
  {
    period: '2025 - Sekarang',
    title: 'IT Support',
    place: 'Universitas Teknologi Yogyakarta',
    desc: 'Menyediakan dukungan teknis untuk perangkat keras, perangkat lunak, dan jaringan di lingkungan kampus.',
  },
  {
    period: '2025',
    title: 'Freelance Fullstack Developer',
    place: 'SMP Negeri 1 Gantiwarno',
    desc: 'Mengerjakan website pengamanan dokumen untuk sekolah.',
  },
  {
    period: '2023',
    title: 'Freelance Frontend Developer',
    place: 'SMK Negeri 1 ROTA Bayat',
    desc: 'Membangun dan merawat antarmuka aplikasi serta berkolaborasi dengan tim desain dan backend.',
  },
  {
    period: '2019 — 2025',
    title: 'S1 Teknik Informatika',
    place: 'Universitas Teknologi Yogyakarta',
    desc: 'Fokus pada pengembangan web dan keamanan komputer.',
  },
]

export const services = [
  { icon: 'globe', title: 'Website & Landing Page', desc: 'Company profile, portofolio, dan landing page yang cepat dan SEO-friendly.' },
  { icon: 'layers', title: 'Aplikasi Web', desc: 'Dashboard, sistem internal, dan aplikasi web interaktif berbasis React.' },
  { icon: 'bolt', title: 'Optimasi & Perbaikan', desc: 'Meningkatkan kecepatan, aksesibilitas, dan merapikan kode yang sudah ada.' },
]
