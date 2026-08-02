import './style.css'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ═══════════ Preloader: counter 0→100 lalu reveal ═══════════ */

const count = document.getElementById('preloader-count')
const DURATION = reduceMotion ? 0 : 1100

function finishLoad() {
  document.documentElement.classList.add('loaded')
}

if (DURATION === 0) {
  finishLoad()
} else {
  const t0 = performance.now()
  function tick(t) {
    const p = Math.min(1, (t - t0) / DURATION)
    // ease-out biar angkanya "ngerem" di ujung, kayak fourmula
    const eased = 1 - Math.pow(1 - p, 3)
    count.textContent = Math.round(eased * 100)
    if (p < 1) requestAnimationFrame(tick)
    else finishLoad()
  }
  requestAnimationFrame(tick)
}

/* ═══════════ Scroll: % di nav pill + parallax ring/headline ═══════════ */

const progressEl = document.getElementById('scroll-progress')
const ringScroll = document.getElementById('ring-scroll')
const headline = document.querySelector('.hero-headline')

let rafPending = false
function onScroll() {
  if (rafPending) return
  rafPending = true
  requestAnimationFrame(() => {
    rafPending = false
    const max = document.documentElement.scrollHeight - window.innerHeight
    const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 0
    progressEl.textContent = `${Math.min(100, Math.max(0, pct))}%`

    if (!reduceMotion) {
      const y = window.scrollY
      // ring: naik + berputar pelan mengikuti scroll (quote roda giliran)
      ringScroll.style.setProperty('--sy', `${y * -0.28}px`)
      ringScroll.style.setProperty('--sr', `${y * 0.035}deg`)
      // headline: parallax lebih lambat dari konten
      headline.style.setProperty('--hp', `${y * -0.12}px`)
    }
  })
}
window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

/* ═══════════ Menu panel: pill nav → panel turun (pola fourmula) ═══════════ */

const menuToggle = document.getElementById('menu-toggle')
const menuPanel = document.getElementById('menu-panel')
const menuOverlay = document.getElementById('menu-overlay')

function setMenu(open) {
  document.documentElement.classList.toggle('menu-open', open)
  menuToggle.setAttribute('aria-expanded', String(open))
  menuPanel.setAttribute('aria-hidden', String(!open))
  menuToggle.setAttribute('aria-label', open ? 'Tutup menu' : 'Buka menu')
  // kunci scroll selama panel terbuka
  document.body.style.overflow = open ? 'hidden' : ''
}

menuToggle.addEventListener('click', () => {
  setMenu(!document.documentElement.classList.contains('menu-open'))
})
menuOverlay.addEventListener('click', () => setMenu(false))
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenu(false)
})
// klik link → tutup dulu, biar scroll ke anchor-nya kelihatan.
// Teks tiap link digandakan jadi dua lapis untuk efek roll saat hover
// (gerakan yang sama dengan transisi "Menu" → "Close").
menuPanel.querySelectorAll('.menu-link').forEach((a) => {
  a.addEventListener('click', () => setMenu(false))
  const t = a.textContent.trim()
  a.innerHTML = `<span class="roll"><span class="roll-line">${t}</span><span class="roll-line" aria-hidden="true">${t}</span></span>`
})

/* ═══════════ Kartu pusat: tap → flip → pertanyaan berikutnya ═══════════ */

// Teaser dikurasi dari bank kartu (src/data/cards.ts di PWA) — yang aman di publik.
const TEASERS = [
  { deck: 'bucin-era', label: 'Bucin Era', q: 'Sebutin satu red flag yang lo maafin gara-gara cakep.' },
  { deck: 'deep-talk', label: 'Deep Talk', q: 'Lo lebih takut dilupain atau nggak pernah dikenal?' },
  { deck: 'toxic-traits', label: 'Toxic Traits', q: 'Lo paling sering bohong soal apa? "Otw" nggak dihitung.' },
  { deck: 'career-mode', label: 'Career Mode', q: 'Sebutin satu skill di CV lo yang setengah bohong.' },
  { deck: 'deep-talk', label: 'Deep Talk', q: 'Versi lo yang umur 10 tahun bakal bangga nggak sama lo sekarang?' },
  { deck: 'toxic-traits', label: 'Toxic Traits', q: 'Red flag lo yang paling kelihatan apa?' },
]

const flipBtn = document.getElementById('flip-btn')
const flipInner = document.getElementById('flip-inner')
const frontArt = document.getElementById('front-art')
const frontQ = document.getElementById('front-q')
const frontLabel = document.getElementById('front-label')
const backArt = document.getElementById('back-art')

let idx = 0
let showingFront = false

function setFront(teaser) {
  frontArt.src = `/art/${teaser.deck}-front.webp`
  frontQ.textContent = teaser.q
  frontLabel.textContent = teaser.label
}

// pre-set kartu pertama + preload artwork berikutnya
setFront(TEASERS[0])
TEASERS.forEach((t) => {
  const img = new Image()
  img.src = `/art/${t.deck}-front.webp`
})

flipBtn.addEventListener('click', () => {
  if (!showingFront) {
    flipInner.classList.add('flipped')
    showingFront = true
  } else {
    flipInner.classList.remove('flipped')
    showingFront = false
    // ganti isi muka + punggung SETELAH balik, di tengah transisi (nggak kelihatan)
    setTimeout(() => {
      idx = (idx + 1) % TEASERS.length
      setFront(TEASERS[idx])
      backArt.src = `/art/${TEASERS[idx].deck}-back.webp`
    }, 300)
  }
})

/* ═══════════ Teaser S3: flip per level ═══════════ */

document.querySelectorAll('.flip-mini').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.querySelector('.flip-inner').classList.toggle('flipped')
  })
})

/* ═══════════ Type strip S4: baris menyala saat lewat tengah layar ═══════════ */

const tsObserver = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('on')
        tsObserver.unobserve(e.target)
      }
    }
  },
  // pita aktivasi condong ke bawah viewport — baris terakhir section
  // (dekat ujung halaman) tetap bisa menyala walau tak pernah sampai tengah
  { rootMargin: '-30% 0px -15% 0px' },
)
document.querySelectorAll('.ts-row').forEach((el) => tsObserver.observe(el))

/* ═══════════ Reveal on-scroll (S2 dst.) ═══════════ */

const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('shown')
        observer.unobserve(e.target)
      }
    }
  },
  { threshold: 0.25 },
)
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
