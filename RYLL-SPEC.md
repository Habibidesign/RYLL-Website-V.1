# RYLL — Spesifikasi Produk

Gabungan dari catatan UX, flow end-to-end, dan logika inti.
Untuk urutan kerja dan metrik, lihat dokumen terpisah: **RYLL-ROADMAP.md**.

**Keputusan yang sudah dikunci:**
- Ukuran huruf pertanyaan **tetap seperti sekarang** — tidak diubah.
- Ukuran tombol **tetap seperti sekarang** — tidak diubah.
- Penentu giliran memakai **kantong nama (adil)**. Tidak ada mode acak murni, tidak ada tunjuk-menunjuk.
- Layar **Account Created tetap dipertahankan** apa adanya — isi maupun posisinya tidak diubah.
- **Zodiak dan Role of Hangout keluar dari onboarding.** Role of Hangout pindah jadi kartu pembuka yang ditunjuk grup; zodiak pindah jadi tema.
- Autentikasi memakai **Google sign-in saja**. Tidak ada form email/password.
- **Squad, kartu terpakai, dan ingatan sesi lalu disimpan di `localStorage`** — bukan di balik akun. Akun hanya berfungsi sebagai pencadangan.

---

## Prinsip yang Menentukan Semuanya

Hampir semua aplikasi didesain untuk **satu orang, di tangannya sendiri, dengan waktu luang.**

RYLL dipakai dalam kondisi yang berkebalikan:

> Satu HP, dioper dari tangan ke tangan, di ruangan berisik, malam hari, dengan empat orang yang sudah duduk dan menunggu.

Lima turunannya, dan tiap keputusan di dokumen ini kembali ke sini:

1. **Orang yang memegang HP bukan orang yang memilikinya.** Dia tidak tahu alurnya, tidak akan membaca, dan tidak akan mengeksplorasi.
2. **Ada penonton.** Setiap detik yang dihabiskan mengurus aplikasi itu detik yang disaksikan empat orang.
3. **Layar dibaca dari jauh.** Orang akan mengangkat HP untuk menunjukkan kartunya.
4. **Ada jeda panjang.** Orang ngobrol lima menit di antara dua kartu. Aplikasi harus bertahan hidup di jeda itu.
5. **Tangan berpindah.** Jempol mendarat di layar tanpa disengaja setiap kali HP dioper.

---

# 1. Flow End to End

## 1.1 Peta Besar

```
                    ┌─────────────────────────────────────────┐
                    │                                         │
   [1] MASUK        │              LINGKARAN                  │
        │           │                                         │
        ▼           │                                         │
   [2] SIAP MAIN    │                                         │
        │           │                                         │
        ▼           │                                         │
   [3] SESI ────────┼──► [4] PENUTUP ──► [5] SEBAR ──────────┘
        ▲           │                          │
        └───────────┘                          ▼
       (main lagi)                        sesi baru
```

Lima tahap. Tahap 5 yang mengembalikan orang ke tahap 1 — kalau tahap itu putus, produk berhenti tumbuh.

## 1.2 Masuk

Empat jalur masuk:

```
┌─ Link dari grup WA  (?dari=<sesi_id>)  ──┐
│                                          │
├─ Screenshot → ketik domain manual  ──────┤
│                                          ├──► LAYAR DEPAN
├─ Buka lagi (pernah main)  ───────────────┤
│                                          │
└─ Sesi belum selesai  ────────────────────┘
```

| Kondisi | Yang ditampilkan |
|---|---|
| **Ada `?dari=`** | Layar depan normal + catat asal-usulnya. Ini yang bikin metrik Referral bisa dihitung |
| **Ada sesi tersimpan** | Kartu di atas tombol utama: *"Sesi Bucin Era tadi belum selesai."* → [Lanjutin] [Mulai baru] |
| **Pernah main sebelumnya** | Tombol utama jadi *"Main lagi"* + tema terakhir jadi pintasan |
| **Baru pertama** | Layar depan penuh: headline, subline, [Gas Main] |

Login/register **tidak pernah** ada di jalur utama. Cuma teks kecil di bawah.

## 1.3 Siap Main

Anggaran total: **18 detik.** Tidak ada ruang untuk layar tambahan.

```
LAYAR DEPAN
    │  [Gas Main]                              (3 dtk)
    ▼
PILIH TEMA
    │  grid 3 tema                             (5 dtk)
    │
    ├── tema terkunci? ──► sheet: syarat buka ──► kembali
    │
    ▼
TAMBAH PEMAIN
    │  satu field, Enter menambah               (8 dtk)
    │  [Lewat] selalu tersedia
    │
    ├── 0-1 nama ──► lanjut tanpa nama
    │
    ▼
    ├── pemain = 1 ──► LEWATI RODA ──────┐
    ├── pemain = 2 ──► gantian, tanpa roda ┤
    └── pemain ≥ 3 ──► SPIN WHEEL (2 dtk) ─┤
                                           ▼
                                    KARTU PERTAMA
```

**Dicatat:** `sesi_mulai { sesi_id, tema, level, jumlah_pemain }`
`sesi_id` = UUID acak, dibuat tepat di titik ini.

**Level tidak dipilih di sini.** Selalu mulai Chill (atau Personal kalau 2 pemain). Level naik lewat tombol di dalam permainan.

### Jalur akun

Terpisah dari jalur main, dan tidak pernah menghalanginya.

```
LAYAR DEPAN
   ├─ [Gas Main] ──────────────────────► main langsung (tamu)
   │
   └─ "Udah punya akun? Masuk"
         └─ MASUK               ← satu layar, satu tombol Google.
               ↓                  "Masuk" dan "Register New" digabung
         /auth/callback
               ↓
         ├─ user lama ──────────────────► HOME
         │
         └─ user baru
               ↓
         Upload Foto  ──► "Just Use The Mascot"
               ↓
         Enter Name
               ↓
         ACCOUNT CREATED     ← dipertahankan apa adanya
               ↓
             HOME
```

Dua layar hilang dari alur lama: **Role of Hangout** dan **Zodiac**. Dua pintu masuk (Masuk / Register New) digabung jadi satu. Sisanya utuh.

### Kenapa Google saja

Form email/password kelihatannya dua layar, padahal tujuh: daftar, masuk, lupa password, email reset terkirim, form password baru, verifikasi email, dan email verifikasi belum masuk. Ditambah urusan deliverability — domain baru hampir pasti masuk spam dulu di awal.

Google sign-in menghapus ketujuhnya. Pasar utamanya Android, di mana akun Google selalu sudah login, jadi buat pengguna ini beneran satu tap.

```js
await supabase.auth.signInWithOAuth({
  provider: "google",
  options: { redirectTo: `${location.origin}/auth/callback` }
});
```

### Pemindahan data tamu

Paling penting dan paling sering lupa. Tanpa ini, orang yang sudah main tiga sesi sebagai tamu kehilangan semuanya begitu mendaftar — dan itu terasa seperti dihukum karena bikin akun.

```js
supabase.auth.onAuthStateChange(async (event, session) => {
  if (event !== "SIGNED_IN") return;
  const lokal = localStorage.getItem("ryll_tamu");
  if (!lokal) return;
  await supabase.from("profil").upsert({
    user_id: session.user.id,
    data: JSON.parse(lokal),
  });
  localStorage.removeItem("ryll_tamu");
});
```

**Catatan untuk nanti:** kalau masuk App Store, Apple mewajibkan Sign in with Apple bila ada login sosial lain. Belum relevan untuk web.

### Janji akun

Satu kalimat, sengaja sempit:

> **Biar squad dan progresmu nggak hilang kalau ganti HP.**

Akun bukan gerbang, melainkan cadangan. Orang yang sudah main sepuluh kali akan mau; orang yang baru buka tidak pernah ditanya.

Alasannya: tuan rumah adalah orang yang membuka RYLL di kumpul berikutnya, dan dia memakai **HP yang sama**. Jadi semua yang bikin sesi kedua lebih bagus dari sesi pertama tidak butuh akun sama sekali — cukup `localStorage` (lihat 1.3.1).

Karena Account Created dipertahankan apa adanya, janji ini disampaikan di dua tempat lain: kalimat kecil di layar Masuk, dan tawaran di layar penutup setelah sesi yang seru — *"Simpan squad ini biar nggak hilang kalau ganti HP?"* Yang kedua jauh lebih ampuh, karena nilainya sudah mereka rasakan sendiri.

## 1.3.1 Ingatan Lokal

Tiga hal yang bikin sesi kedua lebih bagus daripada sesi pertama. Ketiganya di `localStorage`, tanpa akun, tanpa server.

```js
localStorage.setItem("ryll_tamu", JSON.stringify({
  squad: {
    "Geng SMA":   ["Rina", "Bagas", "Dimas", "Sinta"],
    "Anak Kosan": ["Yoga", "Putri", "Fajar"]
  },
  terpakai: { "Geng SMA": { bucin_era: [12, 47, 88] } },
  terakhir: { "Geng SMA": { peran: { npc: "Bagas" }, tanggal: "2026-07-12" } }
}));
```

### 1. Squad tersimpan

Momen terburuk di seluruh alur adalah mengetik lima nama sementara semua orang menunggu. Ini menghapusnya:

> **Geng SMA** · Rina, Bagas, Dimas, Sinta
> **Anak Kosan** · Yoga, Putri, Fajar

Satu tap, semua masuk, langsung roda. Paling berdampak karena sakitnya terjadi **setiap kali**, bukan sesekali.

### 2. Kartu terpakai tidak muncul lagi

Kalau satu grup main lima kali, mereka mulai ketemu kartu yang sama — dan orang berhenti bukan karena bosan sama permainannya, tapi karena ketemu kartu yang sudah pernah.

Disimpan **per squad**, bukan per orang. Jadi Bucin Era bisa dimainkan dengan Geng SMA dan Anak Kosan tanpa keduanya saling mencuri kartu.

`kartu.js` sudah menghasilkan datanya — `simpan()` mengembalikan `terpakai`, tinggal diarahkan ke sini alih-alih ke `sessionStorage`. Nyaris nol pekerjaan tambahan.

Bisa dimunculkan di Home sebagai angka yang bikin ingin main:

> Geng SMA · **247 kartu belum kebuka**

### 3. Ingatan sesi lalu

Paling murah, paling terasa. Sesi berikutnya dibuka dengan sambungan:

> Bulan lalu Bagas dinobatkan jadi The NPC.
> Masih valid?

Ini mengubah RYLL dari permainan sekali jalan jadi sesuatu yang punya sejarah bersama grup itu.

### Keterbatasan yang diterima

Kalau tuan rumah ganti HP atau membersihkan data browser, semuanya hilang. Di tahap ini itu harga yang wajar — dan justru itu yang bikin akun punya alasan untuk ada.

### Kenapa lokal, bukan di balik akun

- **Manfaat retensinya menyala sekarang**, tepat saat Fase 2–4 sedang mengukur retensi. Kalau ditaruh di balik akun, dia baru aktif setelah pengukurannya selesai
- **Tidak bertaruh setengah minggu.** Kalau ternyata RYLL mainan sekali pakai, yang hilang cuma beberapa jam kerja
- **Nol overhead** — tidak ada tabel baru, sinkronisasi, atau penanganan konflik antar-perangkat
- **Konsisten dengan yang sudah dijanjikan** di layar depan: *"guest mode data is only stored on this phone"*

## 1.4 Sesi

```
                      ┌─────────────────────────────┐
                      │                             │
                      ▼                             │
              ┌───────────────┐                     │
              │  TENTUKAN     │  kantong nama       │
              │  GILIRAN      │  + tarik kartu      │
              └───────┬───────┘                     │
                      ▼                             │
              ┌───────────────┐                     │
              │ PUNGGUNG      │  "Giliran SINTA"    │
              │ KARTU         │                     │
              │               │  ← HP dioper di sini│
              └───────┬───────┘                     │
                      │ tap                         │
                      ▼                             │
              ┌───────────────┐                     │
              │ MUKA KARTU    │  menyebut nama      │
              │               │  ← catat waktu      │
              └───────┬───────┘                     │
                      │                             │
        ┌─────────────┼─────────────┐               │
        ▼             ▼             ▼               │
    [Lewat]     [Tarik Lagi]  [Naikin Level]        │
        │             │             │               │
        └─────────────┴─────────────┴───────────────┘
                      │
                      │  [Sudahi]
                      ▼
                  PENUTUP
```

### Tiga keputusan penting di alur ini

**Kartu ditarik bersamaan dengan giliran, bukan setelah tap.** Begitu roda berhenti, aplikasi sudah tahu siapa dan pertanyaan apa. Kalau ditarik belakangan, akan ada jeda loading tepat di momen paling menegangkan.

**HP berpindah di punggung kartu, bukan di muka kartu.** Ini yang bikin tap nyasar tidak berbahaya — jempol yang mendarat saat dioper cuma membuka kartu lebih cepat, bukan melewatkannya.

**Yang menekan tombol adalah orang yang barusan jawab.** Sinta selesai jawab, dia yang tap "Tarik Lagi", roda berputar, muncul nama lain, lalu dia yang mengoper HP. Jadi HP selalu bergerak mengikuti hasil roda.

### Percabangan di dalam sesi

| Kejadian | Yang terjadi |
|---|---|
| **[Lewat]** | Catat atas nama pemain yang barusan ditunjuk. Langsung tentukan giliran berikutnya. Tanpa konfirmasi, tanpa penalti |
| **[Naikin Level]** | `level_diganti`. Kolam kartu berganti, ronde giliran lanjut dari posisi sekarang — jangan reset |
| **Kartu habis di satu level** | Tawarkan naik level atau kocok ulang. Jangan pernah buntu |
| **Kartu `minPemain: 3` tapi cuma 2 pemain** | Disaring saat kolam dibentuk, bukan saat kartu keluar |
| **Telepon masuk / tab dibuang** | State sudah di `sessionStorage`. Saat dibuka lagi → tawarkan lanjut |
| **Koneksi hilang** | Permainan tetap jalan, kartu sudah di memori. Pencatatan mengantre, dikirim saat online |
| **Midnight terbuka** | Setelah sesi Deep selesai. Notifikasi muncul **di layar penutup**, bukan menyela permainan |

### Tiga kartu pembuka: penunjukan peran

Role of Hangout tidak lagi dipilih sendiri di onboarding — **grup yang menunjuk, dan itu jadi tiga kartu pertama sesi.**

```
Kartu 1  "Tunjuk The Clown di grup ini."     → semua nunjuk, satu tap
Kartu 2  "Tunjuk The NPC."
Kartu 3  "Tunjuk The Sage."
Kartu 4  ← permainan sebenarnya mulai, semua sudah punya peran
```

Peran yang dipilih sendiri selalu hambar karena orang pasti pilih yang enak — tidak ada yang sukarela jadi The NPC. Begitu grup yang menunjuk, dia jadi bahan ribut dan label yang menempel sepanjang sesi.

Ini juga tidak memakan anggaran 18 detik sama sekali, karena permainannya sudah jalan. Dan tiga kartu ini pemanasan paling ideal: cuma menunjuk orang, belum perlu jujur soal diri sendiri.

**Setelah peran terbagi, kartu bertanda peran melewati roda** dan langsung ke orangnya:

> **The NPC** — Kapan terakhir kamu pura-pura setuju padahal nggak?
> **The Clown** — Kapan terakhir kamu ketawa buat nutupin sesuatu?
> **The Shining** — Kapan terakhir kamu capek jadi yang paling ceria?
> **The Sage** — Nasihat apa yang sering kamu kasih tapi kamu sendiri nggak jalanin?

Kartu-kartu ini menusuk justru karena grup sudah sepakat soal labelnya duluan.

**Aturannya:**

- Tidak perlu semua 99 kartu ditandai. Sepuluh sampai lima belas per tema sudah cukup
- Satu orang maksimal dapat dua peran — kalau tidak, satu orang bisa memborong semua dan mekaniknya mati
- Sediakan tombol lewat: "The NPC" bisa kena beneran ke orang yang sedang sensitif
- Pemain 3 orang → pakai tiga peran saja
- Nama pemain dilewat → lewati tiga kartu ini juga

## 1.5 Penutup

```
              [Sudahi] ditekan
                     │
                     ▼
       ┌─────────────────────────────┐
       │  RITUAL PENUTUP             │
       │                             │
       │  "Siapa yang jawabannya     │
       │   paling ngagetin malam     │
       │   ini?"                     │
       │                             │
       │  [Rina] [Bagas] [Dimas]     │  ← semua nunjuk, satu tap
       │  [Lewati]                   │
       └──────────────┬──────────────┘
                      ▼
       ┌─────────────────────────────┐
       │  LAYAR HASIL                │  satu layar, tanpa scroll
       │                             │
       │  "Jawaban paling ngagetin:  │  ← judul dari ritual
       │        BAGAS"               │
       │                             │
       │  Paling banyak ngeles  Rina │  ← maks 3 gelar
       │  Paling jujur         Dimas │     syarat: ≥3 giliran
       │                             │
       │  Bucin Era · 14 kartu       │
       │  ryll.id                    │  ← kecil tapi terbaca
       ├─────────────────────────────┤
       │  [ Salin ajakan ]           │
       │  [ Main lagi ]              │
       └─────────────────────────────┘
```

**Dicatat:** `sesi_selesai { sesi_id, total_kartu, durasi_detik }`

### Sumber tiap gelar

| Gelar | Dari data mana |
|---|---|
| Judul besar | Ritual penutup |
| Paling banyak ngeles | Jumlah tap Lewat per pemain |
| Paling jujur / nekat | Nol lewat, min. 3 giliran |
| Yang bikin sunyi | Jeda terpanjang menjawab |
| Nggak pake mikir | Jeda terpendek |

### Percabangan layar hasil

| Kondisi | Yang ditampilkan |
|---|---|
| Nama pemain dilewat | Versi tanpa nama: tema + jumlah kartu + hasil ritual |
| Tema Midnight | **Tidak ada nama sama sekali** |
| Mode 2 pemain | Vonis tentang hubungan, bukan tentang orang |
| Tidak ada yang lewat | *"Nggak ada yang ngeles malam ini. Respect."* |
| Semua kartu dilewat | Tetap tampil, nada berbeda |
| Tidak ada yang punya ≥3 giliran | Gelar dilewat, cuma judul + ringkasan |
| Midnight baru terbuka | Baris tambahan: *"Midnight kebuka."* |

**Aturan tampilan:** satu layar tanpa scroll (screenshot terpotong tidak akan dikirim), maksimal 3 gelar (lebih dari itu jadi statistik, dan statistik tidak ada yang screenshot), dan keadaan kosong harus punya nada — jangan tampilkan baris kosong.

## 1.6 Sebar

### Jalur luar — screenshot & link

```
LAYAR HASIL
     │
     ├──► Screenshot  ──────► Grup WA ──────┐
     │    (mayoritas)                       │
     │                                      │
     └──► [Salin ajakan] ───► Grup WA ──────┤
          teks + link                       │
          ?dari=<sesi_id>                   │
                                            ▼
                                     Orang lain buka
                                            │
                                            ▼
                                    [1] MASUK  ← lingkaran tertutup
```

**Dicatat:** `hasil_dibagikan { sesi_id, tema }` saat tombol salin ditekan.

Screenshot tidak bisa dilacak — makanya domain di layar hasil harus terbaca, karena itu satu-satunya jejak yang tertinggal.

### Jalur dalam — empat orang di meja

Mereka sudah mengalami produk secara penuh, gratis, tapi sekarang pulang tanpa pernah menyentuh HP-nya.

```
LAYAR HASIL
     │
     ├──► Nama RYLL + domain terbaca ──────► mereka ingat
     │
     ├──► Nama mereka muncul di layar ─────► mereka minta versinya sendiri
     │
     └──► [Kirim ke semua yang main] ──────► link masuk ke grup
                                                    │
                                                    ▼
                                        salah satu jadi tuan rumah
                                        di kumpul berikutnya
```

**Metrik terpisah:** % sesi baru yang tuan rumahnya dulu cuma ikut main.
Kalau nol setelah sebulan, lingkarannya tidak muter.

---

# 2. Logika Inti

Dua modul, prinsip yang sama: **kantong**. Isi dikocok, diambil tanpa dikembalikan, kalau habis diisi ulang.

## 2.1 Penentu Giliran

Roda **bukan pengacak — roda cuma animasi.** Nama pemenangnya sudah ditentukan sebelum roda mulai berputar.

```
Ronde 1 · kocok → [Bagas, Rina, Sinta, Dimas]

Kartu 1 → Bagas    sisa: Rina, Sinta, Dimas
Kartu 2 → Rina     sisa: Sinta, Dimas
Kartu 3 → Sinta    sisa: Dimas
Kartu 4 → Dimas    sisa: (kosong)

Kantong habis → isi ulang, kocok → [Dimas, Sinta, Rina, Bagas]
                                     ↑
                    Dimas baru saja jawab di kartu 4.
                    Tukar dengan posisi kedua → [Sinta, Dimas, Rina, Bagas]

Kartu 5 → Sinta
```

Penukaran itu **satu-satunya perlakuan khusus** di seluruh logika ini — cuma untuk menutup celah di sambungan antar-ronde. Di dalam satu ronde, beruntun mustahil terjadi dengan sendirinya.

```js
// giliran.js
function kocok(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buatGiliran(pemain, pulih = null) {
  let daftar = [...pemain];
  let kantong = pulih?.kantong ?? [];
  let terakhir = pulih?.terakhir ?? null;

  function isiUlang() {
    const baru = kocok(daftar);
    if (baru[0] === terakhir && baru.length > 1) {
      [baru[0], baru[1]] = [baru[1], baru[0]];
    }
    return baru;
  }

  return {
    berikutnya() {
      if (daftar.length === 0) return null;
      if (kantong.length === 0) kantong = isiUlang();
      terakhir = kantong.shift();
      return terakhir;
    },
    tambah(nama) {
      if (!nama || daftar.includes(nama)) return;
      daftar.push(nama);
      const pos = Math.floor(Math.random() * (kantong.length + 1));
      kantong.splice(pos, 0, nama);
    },
    hapus(nama) {
      daftar = daftar.filter((p) => p !== nama);
      kantong = kantong.filter((p) => p !== nama);
      if (terakhir === nama) terakhir = null;
    },
    simpan() {
      return { kantong: [...kantong], terakhir };
    },
    get jumlahPemain() {
      return daftar.length;
    },
  };
}
```

**Yang sudah ditangani sendiri, tidak perlu dipikirkan lagi:**

- Beruntun tidak akan terjadi
- **2 pemain** → otomatis gantian sempurna; cukup sembunyikan animasi rodanya
- **1 pemain** → selalu mengembalikan nama yang sama; lewati rodanya
- **Masuk/keluar di tengah** → `tambah()` / `hapus()`, ronde jalan terus tanpa reset
- **Sesi dijeda** → `simpan()` menyimpan sisa kantong

## 2.2 Penarik Kartu

Prinsip sama, dengan satu tambahan: **5 kartu pembuka di depan dengan urutan tetap**, karena lima kartu pertama yang menentukan sesi ini jalan atau mati.

```js
// kartu.js
export function buatKartu(semuaKartu, opsi) {
  const { jumlahPemain, pembuka = {} } = opsi;

  let level = opsi.pulih?.level ?? opsi.level;
  let kantong = opsi.pulih?.kantong ?? null;
  let terpakai = new Set(opsi.pulih?.terpakai ?? []);

  const cari = (id) => semuaKartu.find((k) => k.id === id);

  function layak(lvl) {
    return semuaKartu.filter(
      (k) =>
        k.level === lvl &&
        (k.minPemain ?? 2) <= jumlahPemain &&
        !terpakai.has(k.id)
    );
  }

  function susunKantong(lvl, pakaiPembuka) {
    const tersedia = layak(lvl);
    if (!pakaiPembuka) return kocok(tersedia).map((k) => k.id);

    const idPembuka = (pembuka[lvl] ?? []).filter((id) => {
      const k = cari(id);
      return k && (k.minPemain ?? 2) <= jumlahPemain && !terpakai.has(id);
    });
    const sisa = tersedia.filter((k) => !idPembuka.includes(k.id));
    return [...idPembuka, ...kocok(sisa).map((k) => k.id)];
  }

  if (kantong === null) kantong = susunKantong(level, true);

  return {
    berikutnya() {
      if (kantong.length === 0) return null;
      const id = kantong.shift();
      terpakai.add(id);
      return cari(id);
    },
    gantiLevel(lvlBaru) {
      level = lvlBaru;
      kantong = susunKantong(lvlBaru, false);   // tanpa kartu pembuka
      return kantong.length;
    },
    saringUlang(jumlahBaru) {
      kantong = kantong.filter((id) => (cari(id)?.minPemain ?? 2) <= jumlahBaru);
    },
    simpan() {
      return { level, kantong: [...kantong], terpakai: [...terpakai] };
    },
    get level() { return level; },
    get sisa() { return kantong.length; },
  };
}
```

Dua hal yang sengaja:

- **Naik level di tengah sesi tidak memakai kartu pembuka.** Grup sudah panas; kartu pemanasan justru menurunkan lagi.
- **`saringUlang()` dipanggil tiap ada pemain masuk/keluar**, supaya kartu yang butuh minimal 3 orang otomatis hilang begitu tinggal berdua.

Tiap kartu butuh kolom `minPemain` (2 atau 3). Pekerjaan kecil kalau dikerjakan sekarang, menyebalkan kalau ditunda sampai ada ribuan baris.

Ditambah kolom opsional `peran` (`"clown"` | `"npc"` | `"sage"` | `"leader"` | `"shining"`). Kartu yang punya `peran` **melewati roda** — langsung ke pemain yang ditunjuk grup di kartu pembuka. Kalau peran itu belum terisi di sesi ini, kartunya disaring keluar saat kolam dibentuk.

## 2.3 Animasi Roda

Roda menerima nama yang sudah dipilih, lalu disuruh berhenti di situ.

```js
const w = 360 / n;                          // lebar tiap juring
const tengah = idx * w + w / 2;             // titik tengah juring target
const geser = (Math.random() - 0.5) * w * 0.55;   // jangan selalu pas tengah
const target = ((360 - tengah - geser) % 360 + 360) % 360;
const sekarang = ((rotasi % 360) + 360) % 360;
rotasi += 3 * 360 + ((target - sekarang + 360) % 360);

el.style.transition = "transform 2s cubic-bezier(.18,.82,.25,1)";
el.style.transform = `rotate(${rotasi}deg)`;
```

Tiga hal yang gampang bikin bug:

1. **Rotasi harus terus bertambah**, jangan pernah di-reset — kalau tidak roda berputar mundur.
2. **Tambahkan geseran acak di dalam juring**, biar jarum tidak selalu berhenti pas tengah — itu yang bikin ketahuan bahwa hasilnya sudah ditentukan.
3. **`terakhir` harus ikut disimpan** saat sesi dijeda, kalau tidak penukaran anti-beruntun tidak jalan setelah aplikasi dibuka lagi.

Aturan durasi: **maksimal 2 detik, dan bisa di-tap untuk dilewati.** Roda muncul sekitar 15 kali per sesi; kalau tiap putaran 4 detik, itu satu menit penuh waktu tunggu yang disaksikan semua orang.

## 2.4 Satu Putaran

```js
function ronde() {
  const siapa = giliran.berikutnya();
  const kartu = kartuDek.berikutnya();

  if (!kartu) return tawarkanNaikLevel();   // level ini habis

  tampilkanPunggung(siapa);                  // HP dioper di sini
  siapkanMuka(siapa, kartu);                 // belum ditampilkan
}
```

Tap di punggung kartu → muka kartu tampil → **di detik itu** catat `kartu_dibuka` beserta waktunya.

**Ukuran "kartu bagus"** dihitung dari **muka kartu tampil sampai tombol berikutnya ditekan** — itu murni lama orang menjawab. Jangan pakai selisih antar `kartu_dibuka`, karena itu kecampuran waktu roda berputar dan waktu HP dioper.

---

# 3. State & Pencatatan

## 3.1 State Machine

```
   IDLE ──────► SIAP ──────► MAIN ──────► SELESAI ──────► IDLE
    │            │            │  ▲            │
    │            │            └──┘            │
    │            │        (kartu berulang)    │
    │            │                            │
    │            └──── batal ─────────────────┘
    │                                         │
    └──────────── sesi tersimpan ◄────────────┘
                     (JEDA)
```

| State | Artinya | Bisa pindah ke |
|---|---|---|
| `IDLE` | Belum ada sesi | `SIAP` |
| `SIAP` | Tema & pemain terpilih, kartu belum keluar | `MAIN`, `IDLE` |
| `MAIN` | Sesi berjalan | `MAIN`, `SELESAI`, `JEDA` |
| `JEDA` | Tab dibuang / telepon masuk | `MAIN`, `IDLE` |
| `SELESAI` | Layar hasil tampil | `IDLE`, `SIAP` (main lagi) |

## 3.2 Bentuk State yang Disimpan

```js
{
  sesiId: "uuid",
  state: "MAIN",
  tema: "bucin_era",
  pemain: ["Rina", "Bagas", "Dimas"],
  giliran: { kantong: [...], terakhir: "Dimas" },   // dari giliran.simpan()
  kartu:   { level: "chill", kantong: [...], terpakai: [...] },  // dari kartu.simpan()
  posisi: 6,
  lewat: { "Rina": 2, "Bagas": 0, "Dimas": 1 },
  waktuJawab: [12400, 3100, 28700],   // ms per kartu
  mulaiPada: 1730000000000
}
```

Disimpan ke `sessionStorage` **setiap kali berubah**. Ini yang bikin sesi selamat dari telepon masuk.

## 3.3 Titik Pencatatan

| # | Kapan | Event | Isi |
|---|---|---|---|
| 1 | Halaman dibuka | `kunjungan` | `dari` (kalau ada) |
| 2 | Kartu pertama keluar | `sesi_mulai` | `sesi_id, tema, level, jumlah_pemain` |
| 3 | Tiap muka kartu dibuka | `kartu_dibuka` | `sesi_id, kartu_id, urutan_ke, giliran_pemain` |
| 4 | Naikin Level ditekan | `level_diganti` | `sesi_id, dari, ke, di_kartu_ke` |
| 5 | Sudahi ditekan | `sesi_selesai` | `sesi_id, total_kartu, durasi_detik` |
| 6 | Salin ajakan ditekan | `hasil_dibagikan` | `sesi_id, tema` |

**Tidak ada data pribadi.** Catat ID kartu, jangan teks kartu. Nama pemain tidak pernah dikirim ke server.

Semua dibungkus `try/catch` yang menelan error — pencatatan gagal tidak boleh membuat permainan berhenti.

```js
export async function catat(nama, data = {}) {
  try {
    await supabase.from("event").insert({ sesi_id: sesiId(), nama, props: data });
  } catch (_) {}
}
```

Tabel: `id`, `sesi_id`, `nama`, `props` (jsonb), `created_at`.

---

# 4. UX — Yang Tidak Kelihatan di Figma

Bagian dengan dampak terbesar, dan justru paling sering terlewat karena tidak muncul di alat desain.

### 4.1 Layar mati di tengah sesi

Orang ngobrol tiga menit, HP terkunci, yang pegang harus menyerahkannya balik ke pemilik untuk dibuka. Ini mematikan ritme, dan terjadi berkali-kali per sesi.

```js
let lock;
async function jagaLayar() {
  try { lock = await navigator.wakeLock.request("screen"); } catch (_) {}
}
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && sesiAktif) jagaLayar();
});
```

Perbaikan satu jam, dan salah satu yang paling terasa di sesi nyata.

### 4.2 Tap nyasar waktu HP dioper

Kalau maju kartu bisa dilakukan dengan tap di mana saja, kartu akan kelewat saat HP berpindah tangan — hilang selamanya tanpa ada yang sadar.

`Card Back` / `Card Front` di design system bukan dekorasi, itu **mekanisme serah-terima**:

- HP dioper dalam keadaan menampilkan **punggung kartu**
- Punggung kartu menampilkan **nama orang yang harus jawab, besar**
- Yang menerima menekan sekali untuk membuka

Konsekuensinya: **jangan pernah pakai tap-di-mana-saja untuk maju.** Selalu tombol dengan area yang jelas.

### 4.3 Layar putih menyilaukan di ruangan gelap

Palet UI monokrom terang. Di kumpul malam hari, HP yang dioper ke muka orang dengan layar putih penuh itu menyakitkan mata.

Minimal: **punggung kartu dan layar roda dibikin gelap** (`surface/dark` `#252421`). Dua layar itu yang paling sering muncul saat HP berpindah. Dark mode penuh menyusul belakangan.

### 4.4 Sesi hilang kalau ada telepon masuk

Kalau state cuma di memori, semuanya hilang — dan grup tidak akan mengulang dari nol, mereka berhenti main.

Saat dibuka lagi dan ada sesi tersimpan, **jangan langsung lanjut**, tampilkan pilihan:

> Sesi Bucin Era tadi belum selesai.
> [ Lanjutin ] [ Mulai baru ]

### 4.5 HP terbuka di tangan orang lain

Kecemasan nyata yang jarang diucapkan. Aplikasi web tidak bisa mencegahnya, tapi satu tips sekali muncul di sesi pertama sudah membantu:

> Biar aman, kunci HP-mu di aplikasi ini dulu.
> iPhone: Guided Access · Android: Screen Pinning

---

# 5. UX — Per Layar

## Layar depan

**Masalah sekarang:** headline dummy ("Chat rooms with the most valuable") menjelaskan produk yang salah — orang mengira ini aplikasi chat. Tombol paling menonjol adalah Log In.

```
┌──────────────────────────────┐
│  👻 RYLL                     │
│                              │
│  The 👀 asks                 │
│  You answer                  │
│  Honestly. 👍                │
│                              │
│  Kartu obrolan buat 3–10     │  ← subline; orang perlu ini
│  orang. Pilih temanya,       │
│  tarik kartunya, jawab       │
│  sejujurnya.                 │
│                              │
│  ┌────────────────────────┐  │
│  │      Gas Main          │  │ ← primary, gelap
│  └────────────────────────┘  │
│                              │
│  Udah punya akun? Masuk      │ ← teks kecil
└──────────────────────────────┘
```

Subline dipakai juga untuk `og:description`. Sekali tulis, dua tempat kepakai.

## Pilih tema

Dua carousel ("Popular Trending", "Barusan Dibuka") adalah bukti sosial. Di minggu pertama akan menampilkan tema yang sama terus, dan orang menangkap sinyalnya: tidak ada yang main di sini.

Ganti jadi grid tema biasa, judul kurasi manual — "Paling Sering Bikin Ribut", "Buat Yang Baru Kenal". Ganti ke data asli setelah traffic nyata.

Karena UI-nya monokrom, **artwork kartu memikul seluruh identitas visual.** Tiga tema harus bisa dibedakan sekilas dari jauh, tanpa membaca judulnya.

## Pilih level

**Masalah paling struktural di seluruh alur:** level dikunci di depan. Grup tidak pernah mulai dalam — mereka memanas. Memilih kedalaman sebelum kartu pertama itu meminta keputusan yang belum bisa mereka ambil.

Hilangkan layar ini dari alur masuk. Selalu mulai Chill, lalu sediakan **tombol "Naikin Level" selama permainan berlangsung** yang bisa ditekan siapa pun. Eskalasi itu mekanik utamanya.

Mode dua pemain: mulai dari Personal, bukan Chill.

## Tambah pemain

**Momen terburuk di seluruh alur** — mengetik lima nama sementara empat orang menunggu.

- Satu field, Enter langsung menambah dan fokus balik ke field yang sama
- Keyboard **tidak boleh tertutup** di antara nama
- **Tombol "Lewat"** yang jelas — nama bisa ditambahkan kapan saja dari dalam permainan
- Kalau dilewat, jangan pakai "Pemain 1, Pemain 2". Sembunyikan semua fitur berbasis nama
- Nama panjang dan emoji: potong di 12 karakter untuk tampilan, simpan aslinya
- Sediakan tambah/hapus pemain **di tengah sesi**

## Spin wheel

- Maksimal 2 detik, bisa di-tap untuk dilewati
- **Jangan tampilkan sisa ronde** — ketegangan hilang kalau pemain bisa menghitung siapa berikutnya
- 2 pemain: sembunyikan roda
- 1 pemain: lewati sepenuhnya, langsung kartu. Bukan error
- Getar singkat saat berhenti (`navigator.vibrate(40)`) — Android terasa, iOS Safari abaikan saja

## Kartu

**Gestur geser kiri/kanan** punya dua masalah: tidak terlihat oleh orang kedua yang memegang HP, dan bentrok dengan navigasi mundur di iOS Safari. Pertahankan sebagai jalan pintas, tapi **selalu sediakan tombol yang terlihat**, dan mulai deteksi geser minimal 40px dari tepi layar.

**Tombol "Lewat" jangan bersebelahan dengan "Tarik Lagi".** Salah pencet akan terjadi, dan dua aksi ini punya arti berbeda di data layar penutup. Beri jarak, bedakan bobot visualnya — lewat itu sekunder.

**Jangan tampilkan penghitung "7 / 99".** Kolam kartu 99, tapi sesi cuma menghabiskan belasan. Menampilkan sisa yang tak mungkin dicapai itu membingungkan. Kalau perlu indikator, pakai hitungan sesi ("kartu ke-7") tanpa penyebut.

Tiga tombol maksimal di bawah kartu: **Tarik Lagi · Naikin Level · Sudahi**.

---

# 6. UX — Lintas Layar

### Anggaran waktu ke kartu pertama

| Langkah | Anggaran |
|---|---|
| Buka link → layar depan tampil | 3 dtk |
| Tap "Gas Main" → pilih tema | 5 dtk |
| Nama pemain (atau dilewat) | 8 dtk |
| Spin wheel | 2 dtk |
| **Total** | **18 dtk** |

Tidak ada ruang untuk layar tambahan. Setiap layar baru harus mengambil jatah dari yang lain.

### Jangkauan satu tangan

Semua aksi utama di sepertiga bawah layar. Bottom bar `h80` sudah tepat. Yang di atas cukup informasi, jangan aksi.

### Warna sebagai satu-satunya penanda

`color/accent/alert` (`#f88787`) itu satu-satunya warna aksen. Jangan pernah pakai warna sendirian untuk menyampaikan sesuatu yang penting — selalu ada teks atau bentuk pendampingnya.

### Gerak

Hormati `prefers-reduced-motion`. Untuk animasi kartu dan roda, sediakan versi tanpa gerak.

---

# 7. Keadaan yang Belum Dirancang

Daftar periksa. Tiap baris yang belum ada akan muncul sebagai bug di sesi nyata.

| Keadaan | Yang harus terjadi |
|---|---|
| Sesi terputus (telepon masuk) | Tawarkan lanjut atau mulai baru |
| Koneksi hilang di tengah | Permainan **tetap jalan**. Pencatatan mengantre |
| 1 pemain | Lewati roda, langsung main. Bukan error |
| 2 pemain | Roda disembunyikan, kartu `minPemain: 3` disaring |
| Nama pemain kosong / dilewat | Sembunyikan semua fitur berbasis nama |
| Nama sangat panjang / emoji | Potong tampilan di 12 karakter |
| Pemain masuk di tengah | `tambah()` — sisipkan ke sisa ronde |
| Pemain keluar di tengah | `hapus()` + `saringUlang()` |
| Kartu habis di satu level | Tawarkan naik level atau kocok ulang |
| Semua kartu dilewat | Layar penutup tetap tampil, nada berbeda |
| Tema belum punya artwork | Jangan tampilkan sama sekali |
| Kartu gagal dimuat | Tampilkan kartu cadangan, jangan layar kosong |

---

# 8. Yang Sengaja Tidak Ada

| Dihapus | Alasan |
|---|---|
| Login / Register di jalur utama | Akun untuk menyimpan sesuatu yang berharga; belum ada |
| Upload foto | Lima layar profil untuk produk tanpa pengalaman pribadi |
| Zodiak di onboarding | Sebarannya terlalu tipis untuk jadi mekanik — 5 pemain paling banyak menutupi 5 dari 12 zodiak, jadi kartu bertanda zodiak meleset lebih dari separuh waktu. Dipindah jadi **tema**, bukan data profil: *"Katanya Gemini paling gampang bosen. Siapa di sini yang paling cocok?"* — nol data dibutuhkan, jalan di grup mana pun |
| Role of Hangout di onboarding | Dipindah jadi **tiga kartu pembuka yang ditunjuk grup** (lihat 1.4) |
| Layar Pilih Level di depan | Level naik di tengah sesi |
| Carousel "Popular Trending" | Bukti sosial kosong lebih merusak daripada tidak ada |
| Paywall Midnight | Kunci dengan perilaku dulu |
| Form email/password | Tujuh layar tersembunyi plus urusan deliverability. Google sign-in menghapus semuanya |
| Field "konfirmasi password" | Tidak relevan lagi tanpa form password. Kalaupun nanti ada, ganti dengan tombol mata |
| Riwayat sesi berbentuk daftar | Tidak ada yang membacanya |
| Statistik pribadi | Tidak ada yang mau memamerkan statistik pemakaian aplikasi |
| Lencana / pencapaian | Ini permainan satu ruangan, bukan kompetisi |
| Profil publik | Tidak ada jaringan sosial di sini, dan tidak perlu ada |
| Timer per kartu | Game ini hidup dari orang merasa tidak diburu-buru |
| Leaderboard global | Ini permainan satu ruangan, bukan kompetisi |
| AI di setiap kartu | Biaya sekarang mendekati nol dan tetap nol berapa pun ramainya |

---

# 9. Prioritas

### Kerjakan sekarang

| Perbaikan | Dampak | Biaya |
|---|---|---|
| Layar depan: headline asli + "Gas Main" jadi primary | Tinggi | 1 jam |
| Wake Lock — layar tidak mati saat sesi | Tinggi | 1 jam |
| Punggung kartu menampilkan nama yang harus jawab | Tinggi | 2 jam |
| Spin wheel maks 2 detik + bisa dilewati | Tinggi | 1 jam |
| Pemain bisa dilewat; satu field, Enter menambah | Tinggi | 3 jam |
| Level jadi tombol dalam permainan, bukan gerbang masuk | Tinggi | 4 jam |
| Pasang `giliran.js` + `kartu.js` | Tinggi | 2 jam |
| Ingatan lokal: squad, kartu terpakai, sesi lalu | Tinggi | 4 jam |
| Simpan sesi ke sessionStorage + tawarkan lanjut | Sedang | 2 jam |
| Tombol Lewat dijauhkan dari Tarik Lagi | Sedang | 30 mnt |
| Hapus penghitung "/99" | Sedang | 15 mnt |
| Carousel → grid kurasi manual | Sedang | 2 jam |
| Geser dimulai ≥40px dari tepi | Sedang | 30 mnt |
| Kolom `minPemain` di kartu | Sedang | 2 jam |

### Menyusul

- Google sign-in + halaman callback + pemindahan data tamu (~½ hari; menurut roadmap ini bukan pekerjaan Fase 0, karena sampai akun punya sesuatu yang berharga untuk disimpan, tamu saja sudah cukup)
- Punggung kartu & layar roda dibikin gelap
- Getar saat roda berhenti dan kartu dibuka
- Tips penguncian layar (Guided Access / Screen Pinning)
- Tambah/hapus pemain di tengah sesi
- Ritual penutup
- Dark mode penuh
- Mode dua pemain yang benar-benar terpisah
- Component set Figma dipakai sebagai instance, bukan salinan detached

---

# 10. Cara Menguji

## Tujuh skenario

1. **Jalur normal** — 4 pemain, Chill, 15 kartu, sudahi, screenshot
2. **Jalur naik level** — mulai Chill, naik ke Personal di kartu ke-8, lanjut sampai selesai
3. **Jalur terputus** — main 5 kartu, tutup tab, buka lagi, lanjut
4. **Jalur berdua** — 2 pemain, roda hilang, kartu `minPemain: 3` tidak muncul
5. **Jalur tanpa nama** — lewati input nama, layar hasil tetap masuk akal
6. **Jalur lingkaran** — salin ajakan, buka di HP lain, pastikan `dari` tercatat
7. **Jalur ingat** — main sampai selesai, simpan squad, mulai sesi baru dengan squad yang sama, pastikan kartu yang sudah kepakai tidak muncul lagi

Skenario 6 paling sering dilewat, dan itu satu-satunya yang membuktikan mesin pertumbuhan benar-benar jalan.

## Tanpa riset formal

Bawa ke satu grup, perhatikan tiga hal:

1. **Kapan ada yang bilang "ini gimana sih?"** — tiap satu celetukan = satu layar yang perlu diperbaiki
2. **Kapan HP ditaruh di meja** — itu titik bocornya
3. **Kartu mana yang bikin orang diam dulu sebelum jawab** — itu kartu bagus; taruh yang seperti itu di lima kartu pembuka

Tiga pengamatan itu mengalahkan seluruh dokumen ini.
