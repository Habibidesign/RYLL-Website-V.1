# RYLL — Landing Page Plan

Rencana isi & struktur landing page (website marketing), diturunkan dari
[RYLL-SPEC.md](./RYLL-SPEC.md) dan [RYLL-DESIGN.md](./RYLL-DESIGN.md).

---

## 1. Konteks & Tujuan

**Siapa yang datang ke halaman ini:**
1. Orang yang lihat **screenshot layar hasil** di grup WA → ketik domain manual.
2. Orang yang klik **link ajakan** (`?dari=<sesi_id>`) dari grup.
3. Calon tuan rumah yang mau ngecek "ini apaan sih" sebelum kumpul.

**Konsekuensinya:**
- **Mobile-first mutlak.** Mayoritas buka dari WA di Android. Desktop itu bonus.
- **Satu tujuan, satu CTA: "Gas Main"** → langsung ke PWA. Bukan sign-up,
  bukan download, bukan email capture. Konsisten prinsip "akun bukan gerbang".
- Halaman harus menjawab 3 pertanyaan dalam 5 detik pertama:
  *ini apa · mainnya gimana · berapa orang.*
- **Jangan ada bukti sosial kosong** (spec §8: "Bukti sosial kosong lebih
  merusak daripada tidak ada"). Nol testimoni palsu, nol angka karangan,
  nol "10.000+ pemain".

**Voice:** 100% Indonesia gaul, kata ganti selalu **"lo"**. Emoji hanya sebagai
sticker ilustratif (👀 👍 👻), bukan icon UI. Nama deck & level tetap bahasa
Inggris (nama produk).

---

## 2. Struktur Section (urutan scroll)

**Kerangka layout diambil dari fourmula.ai** — bukan cuma hero, tapi seluruh
sistem halamannya. Tujuh pola layout yang dipinjam:

| # | Pola fourmula | Dipakai di |
|---|---|---|
| 1 | Nav 3 zona: logo kiri · **pill hitam tengah (Menu + scroll %)** · pill CTA kanan | S0 |
| 2 | Hero: **ring gambar mengelilingi kartu pusat** + headline raksasa kiri-bawah 2 nada | S1 |
| 3 | **Split intro**: label kecil di rail kiri + hairline vertikal · display raksasa di kolom kanan · teks kecil kanan-bawah | S2, S6 |
| 4 | **Bento container**: kartu besar rounded berisi visual produk, caption "• label" di sisi, judul 2 baris + deskripsi kecil di dalam kartu; 1 lebar + 2 setengah | S3 |
| 5 | **Type strip kinetik**: baris display raksasa dipisah hairline penuh, makin ke bawah makin abu; frasa pembuka terkunci di kolom kiri | S4 |
| 6 | **Panel bertumpuk bernomor** 01–04: full-bleed warna, headline kiri-atas, nomor raksasa kanan-atas, baris tag hairline, screenshot app, pill CTA putih di tengah; panel saling menimpa saat scroll (sticky stack) | S5 |
| 7 | **Footer container rounded**: wordmark raksasa kiri, kolom link kanan, baris legal, **pola dot halftone** memenuhi bagian bawah | S7 |

### S0 — Navbar (minimal, gaya fourmula)
- Logo ghost 👻 (kiri, tanpa wordmark — wordmark hidup di headline/footer).
- **Pill hitam di tengah:** "Menu" + indikator **scroll progress %** (persis
  fourmula). Karena halamannya satu, "Menu" berisi anchor ke section
  (Cara Main · Tema · FAQ) — atau pill-nya cukup % + logo kecil saja.
- Kanan: pill gelap "Gas Main" (gradient `#444→#262630` + rim light — versi
  RYLL dari pill "Get started").
- Floating di atas konten, tanpa background bar; bukan sticky-bar putih.

### S1 — Hero (referensi: fourmula.ai)

Struktur hero mengikuti fourmula 1:1, diterjemahkan ke bahasa RYLL:

| Elemen fourmula | Versi RYLL |
|---|---|
| Preloader counter besar 0→100 kiri-atas | Counter yang sama, atau ghost 👻 + counter; singkat (<1.5 dtk) |
| **Ring foto blob mengelilingi pusat** | **Ring kartu RYLL** — 8–10 kartu (artwork 6 tema, campur front/back) tersusun melingkar, tiap kartu rotasi acak kecil. Ini sekaligus quote mekanik **roda giliran** — ring-nya berputar pelan (idle) dan ikut berputar saat scroll |
| Dropzone "Upload or drop your assets" di pusat ring | **Punggung kartu RYLL di pusat** dengan label *"Tap buat buka"* → di-tap: flip jadi muka kartu berisi satu pertanyaan teaser (rotasi tiap tap). Hook interaktif pertama |
| Pill label melayang (PDPs, UGC, Ads…) | Pill label nama tema melayang di tepi ring: `Bucin Era` `Deep Talk` `Toxic Traits` `Career Mode` `Midnight 🔒` `18+` |
| Headline raksasa kiri-bawah, 2 baris, baris kedua abu | **"Si 👀 nanya, lo jawab."** (ink) / **"Jujur. 👍"** (muted `#9a9a9a`) — display 72–96px desktop, Stack Sans SemiBold |
| ©2026 kecil tengah-bawah | `©2026 — ryll.id` |
| Hint "SCROLL" kanan-bawah | *"scroll pelan-pelan"* |

- Subline + CTA di hero fourmula tidak ada di viewport pertama (CTA-nya di nav).
  RYLL ikut pola itu: **CTA utama = pill "Gas Main" di navbar**, subline
  (*"Kartu obrolan buat 3–10 orang…"*) muncul tepat setelah hero / sebagai
  baris kecil dekat headline. Subline tetap jadi `og:description`.
- Background hero putih bersih; **seluruh warna datang dari artwork kartu di
  ring** — persis prinsip design DNA.
- Mobile 375: ring dikecilkan jadi 5–6 kartu (orbit lebih rapat, kartu pusat
  tetap dominan), headline turun di bawah ring, tetap 2 baris.
- Scroll keluar dari hero: ring berputar + naik keluar viewport, headline
  ter-reveal — transisi ke S2.

### S2 — Split intro (pola fourmula: "What you can do" → "On-brand visuals. Made by AI.")
**Tugas:** kalimat pertama setelah hero — produk apa, buat siapa.
- Rail kiri sempit + hairline vertikal, label kecil: `Apaan nih`
- Kolom kanan, display raksasa 2 nada:
  **"Kartu obrolan."** (ink) / **"Buat 3–10 orang."** (muted)
- Teks kecil di kanan (posisi teks pendukung fourmula):
  *"Pilih temanya, tarik kartunya, jawab sejujurnya. Satu HP buat semua."*
- Headline ter-reveal per baris saat scroll masuk.

### S3 — Bento showcase (pola fourmula: 1 kartu lebar + 2 setengah)
**Tugas:** artwork kartu memikul identitas; semua "bukti visual" produk di sini.

**Container A (lebar penuh) — Tema.** Caption sisi: `• 6 Tema`
- Judul dalam container: *"Pilih seberapa dalem."* + deskripsi kecil.
- Isi: rail horizontal 6 kartu artwork asli (`bucin-era` … `uncensored`,
  WebP sudah ada di `Ryll New UI/public/art/`), pill nama tema di tiap kartu;
  `Midnight 🔒` dan `18+` diberi badge.
- Baris pill tangga level di bawah rail: **Chill** (Santai & Pemanasan) →
  **Personal** (Mulai Agak Deep Nih) → **Deep** (Awas Baper & Nangis).

**Container B (½) — Contoh kartu.** Caption: `• Kartunya`
- Judul: *"Kartunya kayak gimana?"*
- 3 kartu teaser (komponen asli 343×450 r20), satu per level; yang Deep
  di-blur sebagian + *"...yang ini lo buka sendiri."*
- Interaksi flip saat tap — melanjutkan interaksi kartu pusat hero.

**Container C (½) — Layar hasil.** Caption: `• Abis Main`
- Judul: *"Malemnya ada hasilnya."* + *"Tiap sesi ditutup satu vonis.
  Screenshot, lempar ke grup, ributin."*
- Visual: mockup layar hasil (*"Jawaban paling ngagetin: BAGAS"* + gelar
  *"Paling banyak ngeles"*, *"Paling jujur"*) dalam frame HP.
- Growth loop diperlihatkan jujur — tanpa bukti sosial palsu.

Mobile: ketiga container jadi stack vertikal, rail tema tetap scroll-snap.

### S4 — Type strip (pola fourmula: "AI that / Create Images / Makes videos / Stays on-brand")
**Tugas:** diferensiasi ("Kenapa RYLL") sebagai momen tipografi, bukan feature grid.
- Kolom kiri terkunci (sticky): **"RYLL itu"**
- Baris display raksasa dipisah hairline penuh, ter-reveal satu-satu saat
  scroll, gradasi ink → makin abu ke bawah (persis fourmula):
  1. **"Nggak perlu install."**
  2. **"Nggak perlu akun."**
  3. **"Kartu nggak keulang."**
  4. **"Gratis."**
- Tiap baris punya satu sub-kalimat kecil yang muncul saat baris aktif
  (mis. *"Main sebagai tamu — data lo cuma di HP lo."*).

### S5 — Cara Main (pola fourmula: "From idea to assets in four steps." + panel 01–04)
**Tugas:** membunuh keraguan "ribet nggak sih". Satu-satunya bagian full-color.

**Intro split** (seperti S2): display kiri **"Dari buka link / ke kartu
pertama: 18 detik."** + teks kecil kanan: *"Nggak ada tutorial. Nggak ada
setup. HP siapa aja."*

**4 panel bertumpuk (sticky stack), tiap panel full-bleed dengan background
mesh-gradient dari artwork tema** — di sinilah warna kartu dipakai besar-besaran:

| # | Panel | Background | Isi |
|---|---|---|---|
| 01 | **"Pilih tema."** | mesh Bucin Era | tag: `• 6 tema` `• 3 level` — screenshot Choose Level |
| 02 | **"Oper HP-nya."** | mesh Deep Talk | tag: `• roda giliran` `• kantong nama, adil` — screenshot roda + punggung kartu "Giliran SINTA" |
| 03 | **"Jawab jujur."** | mesh Midnight (gelap) | tag: `• nggak boleh ngeles` `• naikin level kapan aja` — screenshot muka kartu |
| 04 | **"Sebarin hasilnya."** | mesh Career Mode | tag: `• satu layar, tanpa scroll` `• ryll.id` — screenshot layar hasil |

- Anatomi tiap panel = fourmula persis: headline kiri-atas, **nomor raksasa
  01–04 kanan-atas**, baris tag ber-hairline, deskripsi kecil 2 nada kiri,
  screenshot app bawah, **pill CTA putih "Gas Main" di tengah panel**.
- Kode kecil di puncak panel ala "(PB)/(GO)": pakai `(SI 👀)` `(LO)` `(JUJUR 👍)`
  atau nomor kartu — detail kecil yang bikin sistemnya terasa.

### S6 — FAQ (pola fourmula: split + accordion "Not AI-gen answers. Real ones here.")
- Rail kiri: label `FAQ`. Kolom kanan display 2 nada:
  **"Yang biasa ditanyain."** / **"Dijawab jujur."**
- Accordion hairline + ikon `+` (maks 5):
  - Berapa orang? → *"3–10 paling seru. Berdua juga bisa, mulai dari Personal."*
  - Harus install? → *"Nggak. Tapi bisa di-install biar ada di home screen."*
  - Bayar? → *"Gratis."*
  - Data gue ke mana? → *"Mode tamu: semua cuma di HP lo. Nama pemain nggak
    pernah dikirim ke server."*
  - 18+ itu isinya apa? → jawaban jenaka tapi jelas ada gate umur.

### S7 — Footer (pola fourmula: container rounded + wordmark raksasa + dot matrix)
Menggantikan CTA penutup + footer — di fourmula keduanya satu container.
- Container rounded besar, **surface dark `#252421`** (satu-satunya blok gelap
  di halaman — echo punggung kartu; fourmula-nya terang, ini penyesuaian RYLL).
- Kiri-atas: **wordmark RYLL raksasa + ghost 👻**.
- Kanan-atas: kolom link kecil (Privasi · Kontak/IG) + pill CTA **"Gas Main"**
  versi inverse.
- Baris legal: `©2026 RYLL` + **domain `ryll.id` ditulis besar & terbaca**
  (spec: domain = satu-satunya jejak dari screenshot).
- Bawah: **pola dot halftone** ala fourmula — versi RYLL: dot memudar membentuk
  siluet mata 👀 / ghost, warna hairline-inverse di atas gelap.

---

## 3. Aturan Visual (turunan design DNA — berlaku semua section)

| Aspek | Aturan |
|---|---|
| Font | **Stack Sans Text** satu-satunya (WOFF2 sudah ada). Display boleh naik ke 48–64px di desktop — skala app 40px terlalu kecil untuk hero web |
| Warna UI | Monokrom hangat: ink `#252421`, secondary `#525252`, muted `#9a9a9a`, hairline `#efede7`, surface `#ececec`. **Semua warna dari artwork kartu** |
| Aksen | `#f88787` hanya untuk detail mikro (badge, dot) — jangan jadi warna section |
| Pengecualian warna | **Panel 01–04 di S5** boleh full-color karena background-nya artwork mesh tema — warna tetap "datang dari kartu", cuma dipakai besar. Selain itu halaman putih |
| Container bento | Radius besar konsisten (24–28px, sedikit di atas `radius/xl` kartu), background putih/`#fafaf8`, caption `• label` kecil di sisi dalam |
| Rail kiri | Label section kecil (14px) di kolom kiri sempit + hairline vertikal `#efede7` — pola split fourmula, dipakai di S2/S5-intro/S6 |
| Tombol primary | Gradient `#444444→#262630` + inner shadow rim `#fff@14%`, radius 12 |
| Radius | 12 default, 20 kartu, 999 pill |
| Shadow | Dua lapis super halus (`0 2px @4%` + `0 4px @2%`); kartu melayang boleh pakai shadow besar lembut ala app |
| Tracking | −0.5% di semua teks |
| Emoji | Hanya sticker brand (👻 👀 👍), bukan pengganti icon |
| Motion | Referensi fourmula: preloader counter, scroll-progress % di nav pill, ring hero berputar saat scroll, headline besar ter-reveal. Plus flip kartu (hero & S4). Semua punya versi diam — hormati `prefers-reduced-motion` |
| Tipografi display | Fourmula pakai display raksasa (±90px) dengan baris kedua abu-abu — pola dua-nada ini dipakai konsisten: baris utama ink `#252421`, baris penutup muted `#9a9a9a` |

---

## 4. Copy & SEO

- `<title>`: **RYLL — Kartu obrolan buat yang berani jujur**
- `og:description` = subline hero.
- `og:image`: kartu-kartu bertebaran + tagline — ini yang muncul saat link
  dilempar ke grup WA, jadi sama pentingnya dengan hero.
- Semua copy final ditulis dengan aturan voice (lo, gaul, tanpa label Inggris
  kecuali nama produk).

## 5. Teknis (usulan)

- **Static site di folder ini** (`Ryll Website NeW/`) — Vite + Tailwind v4,
  token `@theme` disalin 1:1 dari `Ryll New UI/src/index.css` biar konsisten.
  Tanpa React kalau tidak perlu (halaman satu, interaksi minim) — atau ikut
  React kalau mau reuse `GameCard`. Keputusan saat mulai bangun.
- Aset reuse dari `Ryll New UI/public/` (art WebP, logo, sticker, font).
- CTA "Gas Main" → URL PWA (perlu konfirmasi struktur domain: landing di
  `ryll.id` dan app di `ryll.id/app`? atau app di root dan landing di path
  lain? — **pertanyaan terbuka #1**).
- Deploy Vercel, project terpisah dari PWA.
- Performa target: LCP < 2 dtk di 4G (hero art = WebP kecil yang sudah ada).

## 6. Urutan Kerja

1. Desain di Figma dulu (page baru, pakai collection `RYLL`, `--collection RYLL`) — mobile 375 dulu, baru desktop 1440.
2. Review & revisi desain.
3. Build (token + aset reuse), lalu QA visual vs Figma.
4. OG image + meta, deploy.

## 7. Pertanyaan Terbuka

1. **Struktur domain** — landing vs PWA: satu domain (landing di `/`, app di
   `/app` atau subdomain `app.ryll.id`) atau landing menggantikan onboarding?
2. **Contoh pertanyaan di S4** — pakai dummy dari `decks.ts` atau tulis
   kurasi baru khusus marketing?
3. **Screenshot app di S2/S6** — pakai screenshot asli PWA atau mockup
   yang digambar ulang di Figma?
