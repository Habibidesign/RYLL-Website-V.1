import './style.css'

/* Aplikasi RYLL (PWA). Semua tombol "Gas Main", "Masuk" dan "Main <tema> →"
   mengarah ke sini. Ganti di satu tempat ini kalau domain app pindah. */
const APP_URL = 'https://ryll-app.vercel.app'

const DECK = {
  'deep-talk': { nama: 'Deep Talk', warna: '#e8685c' },
  'bucin-era': { nama: 'Bucin Era', warna: '#e07aa8' },
  'career-mode': { nama: 'Career Mode', warna: '#6fa8e0' },
  'toxic-traits': { nama: 'Toxic Traits', warna: '#6fe0b8' },
  midnight: { nama: 'Midnight', warna: '#2ee6c0', kunci: 'level' },
  uncensored: { nama: '18+ Uncensored', warna: '#ff4d5e', kunci: 'segera' },
}

/* Pertanyaan asli dari bank kartu di app (Ryll New UI/src/data/cards.ts). */
const TANYA = {
  'bucin-era': [
    'Tipe orang kayak gimana yang bikin lo langsung salting?',
    'Lo tim nembak duluan atau nunggu dikode?',
    'Mantan lo masih ada di kontak nggak?',
    'First date ideal versi lo di mana?',
    'Kalau doi telat bales, lo overthinking berapa lama?',
    'Lo lebih suka dikasih kejutan atau ditanya dulu maunya apa?',
  ],
  'deep-talk': [
    'Lo lebih takut dilupain atau nggak pernah dikenal?',
    'Apa hal kecil yang bisa bikin hari lo berubah total?',
    'Apa yang orang salah paham soal lo?',
    'Tempat mana yang bikin lo ngerasa paling aman?',
    'Kalau punya waktu sebulan tanpa tanggung jawab, lo ngapain?',
    'Lo lebih milih tau masa depan atau bisa ngubah masa lalu?',
  ],
  'career-mode': [
    'Kalau nggak mikirin uang, lo mau kerja apa?',
    'Alasan resign paling jujur yang nggak pernah lo tulis?',
    'Lo tipe yang kerja pagi atau tengah malam?',
    'Kalau bisa milih bos: galak tapi jelas, atau baik tapi ngambang?',
    'Impian karier lo waktu SMA apa?',
    'Apa yang lo lakuin pas nggak produktif tapi harus keliatan sibuk?',
  ],
  'toxic-traits': [
    'Kebiasaan lo yang paling bikin temen kesel apa?',
    'Siapa di sini yang paling sering ngilang pas ditagih?',
    'Kebiasaan lo di grup chat yang bikin orang males?',
    'Lo tipe yang mimpin atau yang ngeluh doang?',
    'Hal apa yang bikin lo langsung ilfeel sama orang?',
    'Ngaku: lo pernah nggak ngerjain bagian lo di tugas kelompok?',
  ],
  midnight: [
    'Pikiran random apa yang sering muncul jam 3 pagi?',
    'Mimpi paling aneh yang lo inget sampai sekarang?',
    'Apa yang lo pikirin persis sebelum tidur semalem?',
    'Lagu apa yang cocok banget didengerin jam 2 pagi?',
    'Lo pernah jalan sendirian tengah malam? Ke mana?',
    'Kalau tiba-tiba melek jam 4 pagi, lo ngapain?',
  ],
  // Belum rilis: teksnya diburamkan, jadi cuma pengisi bentuk.
  uncensored: [
    'Kartu ini masih disegel sampai temanya rilis.',
    'Isinya nunggu kebuka bareng temen.',
    'Khusus yang udah 18 tahun ke atas.',
  ],
}

const app = (path = '/') => APP_URL + path
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

const LOGO = (lm) =>
  `<span class="logomark" style="--lm:${lm}"><span class="logomark-tile"></span><img src="/art/logo-ghost.svg" alt="" /></span>`

/** Kartu depan RYLL. `kunci` = abu-abu + pertanyaan buram. */
function kartu(deck, q, { kunci = false, tagKunci = false, cta = false } = {}) {
  const d = DECK[deck]
  return `<div class="rcard${kunci ? ' is-locked' : ''}"><div class="rcard-in">
    <div class="rcard-art">
      <img class="bg" src="/art/${deck}-front-thumb.webp" alt="" loading="lazy" decoding="async" />
      <span class="rcard-logo">${LOGO('9cqw')}RYLL</span>
      <p class="rcard-q">${esc(q)}</p>
      <span class="rcard-pill">${d.nama}</span>
      ${cta ? `<span class="rcard-cta">Main ${d.nama} →</span>` : ''}
      ${tagKunci ? '<span class="lock-tag">Kebuka di level Deep</span>' : ''}
    </div>
  </div></div>`
}

/** Punggung kartu: giliran siapa. */
function punggung(deck, nama) {
  return `<div class="rcard"><div class="rcard-in">
    <div class="rcard-art">
      <img class="bg" src="/art/${deck}-back-thumb.webp" alt="" loading="lazy" decoding="async" />
      <span class="rcard-logo">${LOGO('9cqw')}RYLL</span>
      <span class="rcard-mid"><span class="rcard-label">Giliran</span><span class="rcard-name">${esc(nama)}</span></span>
      <span class="rcard-tap">Tap buat buka</span>
    </div>
  </div></div>`
}

/* ═══════════ Kartu di gambar Cara main ═══════════ */

document.querySelectorAll('.v-card').forEach((el) => {
  if (el.dataset.back) el.innerHTML = punggung(el.dataset.back, el.dataset.name)
  else el.innerHTML = kartu(el.dataset.card, el.dataset.q || '')
})

/* ═══════════ Hero: deretan kartu di tepi bawah ═══════════ */

const HERO = [
  ['bucin-era', 'Tipe orang kayak gimana yang bikin lo langsung salting?', 251],
  ['career-mode', 'Kalau nggak mikirin uang, lo mau kerja apa?', 263],
  ['toxic-traits', 'Kebiasaan lo yang paling bikin temen kesel apa?', 239],
  ['midnight', 'Pikiran random apa yang sering muncul jam 3 pagi?', 251],
  ['bucin-era', 'Lo tim nembak duluan atau nunggu dikode?', 239],
  ['midnight', 'Pikiran random apa yang sering muncul jam 3 pagi?', 251],
]
document.getElementById('hero-cards').innerHTML = HERO.map(
  ([d, q, w]) =>
    `<a class="hc" style="--w:${w}px" href="${app('/deck/' + d)}" tabindex="-1">
      <span class="hc-cta">Main ${DECK[d].nama} →</span>${kartu(d, q)}
    </a>`,
).join('')

/* ═══════════ Tema: marquee + filter ═══════════ */

const ORDER = ['semua', 'deep-talk', 'bucin-era', 'career-mode', 'toxic-traits', 'midnight', 'uncensored']
const CAMPUR_1 = ['bucin-era', 'deep-talk', 'career-mode', 'toxic-traits', 'bucin-era', 'deep-talk', 'midnight', 'career-mode']
const CAMPUR_2 = ['toxic-traits', 'career-mode', 'deep-talk', 'midnight', 'bucin-era', 'toxic-traits', 'deep-talk', 'career-mode']

const track1 = document.getElementById('track-1')
const track2 = document.getElementById('track-2')
const marquee = document.getElementById('marquee')
const glow = document.getElementById('marquee-glow')
const lockPanel = document.getElementById('lock-panel')

function baris(decks, offset, terkunci) {
  const pakai = {}
  const set = decks
    .map((d) => {
      const i = (pakai[d] = (pakai[d] ?? offset) + 1) - 1
      const q = TANYA[d][i % TANYA[d].length]
      const kunci = terkunci || !!DECK[d].kunci
      const isi = kartu(d, q, { kunci, tagKunci: kunci && !terkunci, cta: !kunci })
      return kunci
        ? `<div class="mc is-locked">${isi}</div>`
        : `<a class="mc" href="${app('/deck/' + d)}" tabindex="-1">${isi}</a>`
    })
    .join('')
  // dua salinan berdampingan: animasi geser -50% jadi putaran tanpa sambungan
  return set + set.replace(/<a class="mc"/g, '<a class="mc" aria-hidden="true"')
}

function tampilTema(id) {
  const semua = id === 'semua'
  const d = DECK[id]
  const terkunci = !!d?.kunci
  const isi1 = semua ? CAMPUR_1 : Array(8).fill(id)
  const isi2 = semua ? CAMPUR_2 : Array(8).fill(id)
  track1.innerHTML = baris(isi1, 0, terkunci)
  track2.innerHTML = baris(isi2, 3, terkunci)
  marquee.classList.toggle('locked', terkunci)
  glow.style.setProperty('--glow', semua ? 'transparent' : d.warna)
  glow.style.setProperty('--glow-op', semua ? 0 : terkunci ? 0.08 : 0.22)

  lockPanel.hidden = !terkunci
  if (terkunci) {
    const level = d.kunci === 'level'
    document.getElementById('lock-title').textContent = level ? 'Midnight masih kekunci' : '18+ Uncensored segera hadir'
    document.getElementById('lock-text').textContent = level
      ? 'Selesaiin satu sesi sampai level Deep. Temanya kebuka sendiri, gratis.'
      : 'Khusus yang udah 18 tahun ke atas. Isinya lagi kami siapin.'
    const cta = document.getElementById('lock-cta')
    cta.textContent = level ? 'Gas Main sekarang' : 'Kabarin gue lewat Google'
    cta.href = level ? app('/') : app('/masuk')
    document.getElementById('lock-note').textContent = level
      ? ''
      : 'Email akun Google lo cuma dipakai buat ngabarin pas temanya rilis.'
  }

  // kecepatan tetap per kartu, bukan per baris: baris panjang tidak jadi ngebut
  for (const t of [track1, track2]) {
    requestAnimationFrame(() => t.style.setProperty('--dur', `${t.scrollWidth / 2 / 28}s`))
  }

  // sinkronkan tab, pill pemilih, dan sheet
  document.querySelectorAll('.tab').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.id === id)))
  document.querySelectorAll('.opt').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.id === id)))
  document.getElementById('picker-label').textContent = semua ? 'Semua' : d.nama
}

const LOCK_SVG =
  '<svg class="opt-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-opacity=".5" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
const CHECK_SVG =
  '<svg class="opt-ic opt-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'

document.getElementById('tabs').innerHTML = ORDER.map((id) => {
  const d = DECK[id]
  const kunci = !!d?.kunci
  return `<button class="tab${kunci ? ' locked' : ''}" type="button" role="tab" data-id="${id}" aria-selected="false">${
    kunci ? LOCK_SVG.replace('opt-ic', 'tab-ic').replace('<svg ', '<svg width="14" height="14" ') : ''
  }${id === 'semua' ? 'Semua' : d.nama}</button>`
}).join('')

document.getElementById('sheet-list').innerHTML = ORDER.map((id) => {
  const d = DECK[id]
  const kunci = !!d?.kunci
  const sub = id === 'semua' ? 'Campuran semua tema' : kunci ? (d.kunci === 'level' ? 'Kebuka di level Deep' : 'Segera hadir') : '48 kartu'
  const warna = id === 'semua' ? 'linear-gradient(90deg,#e07aa8,#e3963a,#6fa8e0)' : d.warna
  return `<button class="opt${kunci ? ' locked' : ''}" type="button" role="menuitemradio" data-id="${id}" aria-checked="false">
    <i class="opt-dot" style="--c:${warna}"></i>
    <span class="opt-txt"><b>${id === 'semua' ? 'Semua' : d.nama}</b><small>${sub}</small></span>
    ${kunci ? LOCK_SVG : ''}${CHECK_SVG}
  </button>`
}).join('')
// centang cuma di opsi terpilih
const styleCheck = document.createElement('style')
styleCheck.textContent = `.opt-check{display:none}.opt[aria-checked="true"] .opt-check{display:block}`
document.head.appendChild(styleCheck)

document.getElementById('tabs').addEventListener('click', (e) => {
  const b = e.target.closest('.tab')
  if (b) tampilTema(b.dataset.id)
})

/* Sheet pilih tema (mobile & tablet) */
const picker = document.getElementById('picker')
const sheet = document.getElementById('sheet')
const sheetScrim = document.getElementById('sheet-scrim')
function sheetBuka(buka) {
  sheet.hidden = !buka
  sheetScrim.hidden = !buka
  picker.setAttribute('aria-expanded', String(buka))
  document.body.style.overflow = buka ? 'hidden' : ''
  if (buka) sheet.querySelector('[aria-checked="true"]')?.focus()
  else picker.focus()
}
picker.addEventListener('click', () => sheetBuka(true))
sheetScrim.addEventListener('click', () => sheetBuka(false))
document.getElementById('sheet-list').addEventListener('click', (e) => {
  const b = e.target.closest('.opt')
  if (!b) return
  tampilTema(b.dataset.id)
  sheetBuka(false)
})

tampilTema('semua')

/* ═══════════ FAQ: satu terbuka dalam satu waktu ═══════════ */

const qas = [...document.querySelectorAll('.qa')]
qas.forEach((qa) =>
  qa.querySelector('button').addEventListener('click', () => {
    const buka = !qa.classList.contains('open')
    qas.forEach((x) => {
      x.classList.remove('open')
      x.querySelector('button').setAttribute('aria-expanded', 'false')
    })
    if (buka) {
      qa.classList.add('open')
      qa.querySelector('button').setAttribute('aria-expanded', 'true')
    }
  }),
)

/* ═══════════ Nav: progres scroll, lewat hero, menu ═══════════ */

const nav = document.getElementById('nav')
const pct = document.getElementById('scroll-pct')
const hero = document.querySelector('.hero')
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight
  pct.textContent = `${Math.round(max > 0 ? (scrollY / max) * 100 : 0)}%`
  nav.classList.toggle('scrolled', scrollY > hero.offsetHeight - 120)
}
addEventListener('scroll', onScroll, { passive: true })
onScroll()

const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const menuScrim = document.getElementById('menu-scrim')
const menuLabel = menuBtn.querySelector('.nav-pill-label')
function menuBuka(buka) {
  menu.hidden = !buka
  menuScrim.hidden = !buka
  menuBtn.setAttribute('aria-expanded', String(buka))
  menuLabel.textContent = buka ? menuLabel.dataset.open : menuLabel.dataset.closed
}
menuBtn.addEventListener('click', () => menuBuka(menu.hidden))
menuScrim.addEventListener('click', () => menuBuka(false))
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) menuBuka(false)
})
addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return
  if (!menu.hidden) menuBuka(false)
  if (!sheet.hidden) sheetBuka(false)
})

/* ═══════════ Kurangi gerak ═══════════ */

const motion = document.getElementById('motion-toggle')
const KEY = 'ryll-diam'
function setDiam(on) {
  document.documentElement.classList.toggle('diam', on)
  motion.setAttribute('aria-pressed', String(on))
  try {
    localStorage.setItem(KEY, on ? '1' : '0')
  } catch {}
}
let awalDiam = matchMedia('(prefers-reduced-motion: reduce)').matches
try {
  const s = localStorage.getItem(KEY)
  if (s !== null) awalDiam = s === '1'
} catch {}
setDiam(awalDiam)
motion.addEventListener('click', () => setDiam(!document.documentElement.classList.contains('diam')))

/* ═══════════ Tautan ke app ═══════════ */

document.querySelectorAll('[data-app]').forEach((a) => (a.href = app(a.dataset.app)))
