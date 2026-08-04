# RYLL — Design DNA

Sumber: file Figma **Product**, page **New**, section **Flow** (`1004:59856`).
Diekstrak & dinormalisasi 2026-07-31. Mobile app 375×812 (iOS).

## Konsep

Conversation / party card game. Kartu pertanyaan bertema, dimainkan bareng-bareng.
Tagline: **"Si 👀 nanya / Lo jawab / Jujur. 👍"**

**Voice:** Indonesia gaul, **100% Indonesia** — tidak ada label sistem berbahasa
Inggris. Kata ganti orang kedua selalu **"lo"**, tidak pernah "kamu".
Contoh: "Gas Main", "Tap buat buka", "Seberapa bucin lo?", "Awas Baper & Nangis",
"Geser Kiri/Kanan buat lewat", "Barusan Dibuka", "Main Sekarang", "Lagi Populer".
Emoji dipakai sebagai sticker ilustratif (👀 👍), bukan sebagai icon UI.

Dua pengecualian yang disengaja:
1. **Nama deck & level** (Bucin Era, Deep Talk, Toxic Traits, Career Mode, Midnight,
   18+ Uncensored · Chill, Personal, Deep) — nama produk, dan persis sama dengan
   nilai variant di component set Figma. Menerjemahkannya membuat kode dan file
   Figma tidak lagi sinkron.
2. **Label menu browser dalam tanda kutip** di sheet pemasangan ("Add to Home
   Screen", "Install app") — user harus mencari kata itu persis di menu browser-nya,
   jadi menerjemahkannya justru bikin instruksinya tidak bisa diikuti.

Serapan yang sudah jadi bahasa sehari-hari tetap dipakai: tap, upload, install,
scroll, deck.

## Flow

**Baris 1 — Auth & Onboarding**

```
Onboarding ──┬─ Log In
             ├─ Register New ─→ Upload Foto (Empty) ─→ Upload Foto (Filled)
             └─ Play Now (guest, data lokal)
                                       ↓
            Enter Name ─→ Role of Hangout ─→ Zodiac ─→ Account Created ─→ Home
```

**Baris 2 — Game Loop**

```
Home ─→ Choose Level ─→ Add Player ─→ Add Player (Filled) ─→
        Card Back ─→ Card Front ─→ Final Card
```

- Onboarding: hero kartu bertebaran (rotasi acak), 3 CTA bertingkat
  (primary gelap / secondary abu / tertiary outline), footnote guest mode.
- Upload Foto: dropzone bulat + "Or → Just Use The Mascot".
- Role of Hangout: Si Ketua, Si Badut, Si Ngilang, Si NPC, Si Bijak.
  (Di Figma masih tertulis The Leader / The Clown / The Shining / The NPC / The Sage —
  perlu diselaraskan. Kode menyimpan peran berdasarkan judulnya, jadi ada tabel
  migrasi v1→v2 di `useApp.ts` supaya profil lama tidak kehilangan pilihannya.)
- Zodiac: grid 2 kolom, 12 pilihan.
- Home: header greeting + 2 icon action (badge merah), "Popular Trending"
  (carousel besar) & "Barusan Dibuka" (carousel kecil), bottom nav 2 tab.
- Choose Level: **Chill** (Santai & Pemanasan) · **Personal** (Mulai Agak Deep Nih)
  · **Deep** (Awas Baper & Nangis).
- Card: 343×450, swipe kiri/kanan, aksi ganda "Ganti Level" / "Lanjut".

---

# Design System

Semua nilai di bawah sudah jadi **variable** di collection **`RYLL`** (mode `Default`,
39 variable) dan sudah ter-bind ke node aslinya. Pakai variable-nya, jangan hex mentah.

## Typography

**Satu family: Stack Sans Text.** Tidak ada font lain di page ini.
Style yang dipakai: Light · Regular · Medium · SemiBold.
Terikat ke variable `font/family` (STRING).

| Token | px | Peran |
|---|---|---|
| `font-size/3xl` | 40 | display / hero |
| `font-size/2xl` | 32 | display |
| `font-size/xl` | 24 | section title |
| `font-size/lg` | 16 | card title, input |
| `font-size/base` | **14** | body & label utama (paling dominan) |
| `font-size/md` | 13 | pill label |
| `font-size/sm` | **12** | subtitle / caption |
| `font-size/xs` | 10 | micro label |

| Token | px | Dipasangkan dengan |
|---|---|---|
| `line-height/md` | 24 | teks 14 |
| `line-height/sm` | 20 | teks 12 |

Pengecualian: wordmark "RYLL" di Onboarding = 28px — aset brand, sengaja
di luar skala.

## Warna

**Teks**

| Token | Hex | Pakai |
|---|---|---|
| `color/text/primary` | `#252421` | teks & icon utama — warm charcoal, bukan hitam murni |
| `color/text/secondary` | `#525252` | label sekunder |
| `color/text/muted` | `#9a9a9a` | subtitle, placeholder, state non-aktif |
| `color/text/inverse` | `#ffffff` | teks di atas permukaan gelap |

**Permukaan**

| Token | Hex | Pakai |
|---|---|---|
| `color/surface/default` | `#ffffff` | kartu, icon button |
| `color/surface/secondary` | `#ececec` | tombol sekunder (Register New, Ganti Level) |
| `color/surface/dark` | `#252421` | permukaan gelap |

**Garis**

| Token | Hex | Pakai |
|---|---|---|
| `color/border/default` | `#efede7` | hairline 1px — default untuk semua garis |
| `color/border/strong` | `#e5e3dc` | divider lebih tegas |
| `color/border/selected` | `#252421` | outline 2px pada baris terpilih |
| `color/border/card` | `#c0c0c0` | outline kartu di Home — lihat catatan |
| `color/border/inverse` | `#ffffff` | garis di atas permukaan gelap |
| `color/border/inverse-soft` | `#ffffff` @30% | rim dalam pada kartu |

**Lainnya**

| Token | Nilai | Pakai |
|---|---|---|
| `color/overlay/scrim` | `#000000` @10% | scrim |
| `color/overlay/subtle` | `#797979` @5% | wash halus |
| `color/accent/alert` | `#f88787` | notification dot |

Palet UI-nya monokrom hangat. **Semua warna datang dari artwork kartu**, bukan dari UI.

## Radius

| Token | px | Pakai |
|---|---|---|
| `radius/xs` | 4 | elemen mikro |
| `radius/sm` | 8 | elemen kecil |
| `radius/md` | **12** | tombol, list row — paling dominan |
| `radius/lg` | 16 | panel |
| `radius/xl` | 20 | kartu game |
| `radius/full` | 999 | pill & lingkaran |

## Spacing

Skala kelipatan 4: `space/xs` 4 · `space/sm` 8 · `space/md` 12 ·
`space/lg` 16 · `space/xl` 20 · `space/2xl` 24.

## Elevation

Belum jadi variable — Figma tidak mendukung variable untuk effect.

- Shadow default (dua lapis, nyaris tak terlihat): `0 2px #000 @4%` + `0 4px #000 @2%`
- Inner shadow `4px #fff @14%` di tombol gelap → rim light di tepi atas
- Kartu melayang: `44px #868686 @13%` / `60px #dfdddd @13%`
- Backdrop blur `28` di beberapa overlay

## Layout System

| Elemen | Spec |
|---|---|
| Screen | 375×812, auto-layout col |
| Header | h80, pad `24/16/16/16`, row space-between, items center |
| Icon button | 40×40, `radius/full`, `surface/default` |
| Content area | pad `space/lg`, gap `space/md`–`space/lg` |
| Bottom bar | h80, pad `16/20/16/20`, gap `space/sm` |
| Button primary | 335×48, `radius/md`, pad `12/20`, gradient gelap, teks 14 Medium inverse |
| List row | 343×72, `radius/md`, pad `12/20`, gap `space/xs` |
| Game card | 343×450, `radius/xl` |

**Selected vs default row:**
selected = gradient gelap + `border/selected` 2px + checkbox putih ceklis;
default = transparan + `border/default` 1px + checkbox kosong.

## Komponen

**Card In Game** — COMPONENT_SET, 343×450, `radius/xl`
Axis: **`Theme`** (Bucin Era · Deep Talk · Toxic Traits · Career Mode · Midnight · 18+)
× **`Side`** (Front · Back) = 12 varian.
Isi: IMAGE fill (mesh gradient artwork per tema) + logo RYLL + quote + pill label.

**Card In Home** — COMPONENT_SET
Axis: **`Theme`** — 6 nilai yang sama persis dengan Card In Game.

---

## Yang Sudah Dinormalisasi

| Perubahan | Jumlah |
|---|---|
| Font → Stack Sans Text (dari SF Pro Display + Inter Variable) | 52 teks |
| Ukuran pill 12.87px → 13 | 12 |
| `#000000` teks, `#101010`, `#1d1d1d`, `#34343a`, `#474641` → `text/primary` | 59 |
| `#f5fcff` → putih · `#ededed` → `#ececec` · `#686868` → `#525252` · `#76787f` → `#9a9a9a` | 5 |
| Scrim `#000` @11% → @10% | 19 |
| Hairline `#ebebeb`/`#eaeaec`/`#e9e9ea`/`#f1f1f1`/`#e2e2e2` → `border/default` | 41 |
| Radius pill `99`/`100`/`9999`/`99999`/`345.8` → `radius/full` · `21`→20 · `12.5`→12 | 55 |
| Variant axis `Property 1` + `Type` → `Theme` × `Side`; typo "Bucil Era" diperbaiki | 18 varian |
| Binding ke variable (fill / stroke / radius / spacing / font) | 2.686 |

Verifikasi: render Onboarding, Home, Choose Level, dan Card Front identik
sebelum–sesudah. Nol error saat binding.

## Sengaja Tidak Diubah

- **Nilai desimal di kartu mini** (5.94, 10.88, 13.6, …) — artefak dari kartu
  yang di-scale di Home, bukan keputusan desain. Menormalkannya akan merusak miniatur.
- **`#000000` pada artwork** (mata 👀, sticker) — ilustrasi, memang hitam murni.
- **Gradient** — Figma belum mendukung variable untuk gradient, jadi gradient
  tombol gelap (`#444444 → #262630`) dan background halaman tetap nilai mentah.
- **`gap: 10`** (86 pemakaian) — nilai default auto-layout Figma, di luar skala
  kelipatan 4. Diubah massal berisiko menggeser layout.

## Yang Masih Terbuka

1. **Component set-nya belum dipakai screen manapun.** Nol instance —
   semua visual kartu di flow adalah salinan detached. Kalau `Card In Game` /
   `Card In Home` diubah, screen tidak ikut berubah.
2. **`border/card` (`#c0c0c0`) masih beda sendiri** — outline kartu di Home
   jauh lebih gelap dari hairline lain (`#efede7`). Sengaja dibiarkan karena
   menyamakannya akan terlihat. Perlu keputusan: samakan atau pertahankan.
3. **`#c4c4c4`** (2 fill) belum punya token — kemungkinan placeholder gambar.
4. **Nama layer** masih auto-generate (`Frame 2147259067`, …).
5. **2 frame bernama "Create Pin"** isinya Role of Hangout & Zodiac;
   ada 1 frame "Upload Foto - Filled" duplikat.
