# Media Prima Berhad - Employee Overtime Portal
### Portal Pengurusan & Pematuhan Masa Lebih Masa Kakitangan (Sistem Penggajian & Audit HR)

![Media Prima Berhad](https://raw.githubusercontent.com/mediaprima/branding/main/mpb-banner.png)

> **Enterprise Employee Overtime & Shift Compliance Portal** developed for **Media Prima Berhad** to streamline operational overtime punch logging, manager justifications, official form attachments, and monthly 7th-cutoff payroll reconciliation in strict compliance with the **Malaysian Employment Act 1955 (Section 60)**.

---

## 📌 Gambaran Keseluruhan (Overview)

Sistem ini memudahkan kakitangan penyiaran, operasi teknikal, dan pengeluaran Media Prima merekod masa kerja lebih masa (OT) harian serta memuat naik borang perakuan fizikal/imbasan sebelum tarikh tutup pemprosesan gaji bulanan (7hb setiap bulan).

Platform ini dilengkapi dengan pemantauan had statutori maksimum 104 jam sebulan, bar simulasi kitaran tarikh tutup penggajian, pengesahan baucar rasmi, dan papan pemuka juruaudit HR (*Lead HR Auditor*).

---

## ✨ Ciri-Ciri Utama (Key Features)

### 1. Log Masa Lebih Masa Harian (Staff Overtime Logging)
- **Kiraan Automatik**: Pengiraan tempoh jam OT secara tepat berdasarkan masa mula dan tamat (termasuk syif merentasi tengah malam).
- **Templat Syif Pantas (1-Click Presets)**:
  - ⚡ *Lanjutan Malam (18:00 – 21:30)*
  - ⚡ *Hotfix L2 (19:00 – 23:00)*
  - ⚡ *Standby Hujung Minggu (14:00 – 17:00)*
  - 📋 *Salin Syif Terakhir (Duplicate Last Entry)*
- **Muat Naik Borang Lebih Masa (Upload Overtime Form)**:
  - Butang muat naik borang sokongan/perakuan fizikal (*PDF, JPG, PNG, DOCX*).
  - Sokongan seret & lepas (*Drag-and-Drop*) serta pilihan fail setempat.
  - Pilihan melampirkan *Templat Rasmi Media Prima Berhad*.
  - Modal pratonton dokumen (*Document Preview*) & muat turun fail yang dimuat naik.

### 2. Pematuhan Statutori & Kuota (Statutory 104-Hour Cap Compliance)
- Tolok kuota masa nyata (*Real-time Quota Gauge*) yang memantau had undang-undang 104 jam di bawah Seksyen 60 Akta Kerja 1955.
- Amaran pintar (*Early Warning Thresholds*) sebelum staf melebihi had kerja selamat.
- Pengasingan kadar tuntutan: Hari Biasa (1.5x) dan Hari Rehat / Siap Sedia (2.0x).

### 3. Kitaran Tarikh Tutup 7hb & Penggajian (7th Cutoff Reconciliation)
- Aliran kerja 4 fasa standard:
  1. **Draf Kakitangan (1hb – 7hb)**: Kakitangan bebas merekod dan menyunting syif.
  2. **Tarikh Tutup Penyerahan (7hb, 23:59)**: Kunci rekod bagi fasa penyediaan gaji.
  3. **Pengesahan & Audit HR (8hb – 14hb)**: Pengauditan oleh **Lead HR Auditor (Asward)**.
  4. **Kredit Gaji (25hb)**: Bayaran elaun disalurkan ke akaun gaji.

### 4. Papan Pemuka Juruaudit HR (Lead HR Auditor - Asward)
- Mod pentadbir khusus untuk menyemak senarai rekod kakitangan merentas jabatan.
- Pemeriksaan lampiran borang perakuan bagi setiap entri yang dituntut.
- Tindakan pantas: *Hantar Peringatan Pantas*, *Kunci Rekod Pentadbir (Admin Force-Lock)*, dan *Buka Semula Draf Kakitangan*.

### 5. Baucar Tuntutan & Cetakan Rasmi (Official Claim Voucher)
- Baucar pengesahan rasmi Media Prima Berhad lengkap dengan kod bar audit, perincian syif, dan perakuan digital.
- Fungsi cetak / eksport ke PDF yang mesra pencetak (*Print-ready*).

### 6. Dwi-Bahasa & Pengalaman Pengguna Moden
- Sokongan Bahasa Melayu (BM) dan Bahasa Inggeris (EN).
- Mod Gelap (*Corporate Dark Mode*) dan Mod Cerah (*Light Mode*).
- Penukaran paparan antara Jadual (*Table View*) dan Kalendar Bulanan (*Calendar View*).

---

## 🛠️ Teknologi & Seni Bina (Tech Stack)

- **Frontend Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Gaya & Rekaan**: [Tailwind CSS](https://tailwindcss.com/)
- **Ikon**: [Google Material Symbols](https://fonts.google.com/icons) & [Lucide Icons](https://lucide.dev/)
- **Font Korporat**: Plus Jakarta Sans & Inter

---

## 🚀 Panduan Pemasangan & Pelaksanaan (Getting Started)

### Pra-syarat
- Node.js versi 18.0 atau lebih tinggi
- Pengurus pakej `npm` atau `bun`

### Langkah Pemasangan

1. **Klon Repositori**:
   ```bash
   git clone https://github.com/aswardmpb/ot-tracker.git
   cd ot-tracker
   ```

2. **Pasang Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Pelayan Pembangunan (Dev Server)**:
   ```bash
   npm run dev
   ```
   Buka pelayar web di `http://localhost:3000`.

4. **Bina untuk Pengeluaran (Production Build)**:
   ```bash
   npm run build
   ```

---

## 👥 Profil Pengguna Demo (Demo Personas)

Sistem ini membolehkan pertukaran peranan pantas untuk tujuan demonstrasi aliran kerja:
- **Ahmad Razak** (ID: EMP-10492) – Kakitangan Operasi IT & Penyiaran (*Staff Mode*)
- **Asward** (ID: DIR-881) – Ketua Pengaudit HR / *Lead HR Auditor* (*Admin Mode*)
- **Elena Rostova** (ID: EMP-10493) – Ketua Inventori & Logistik

---

## 📄 Struktur Direktori (Project Structure)

```
├── public/
│   ├── asward-profile.jpg       # Gambar profil rasmi Lead HR Auditor
│   └── media-prima-logo.svg     # Logo vektor rasmi Media Prima Berhad
├── src/
│   ├── assets/                  # Aset imej & media
│   ├── components/
│   │   ├── AdminMonitoring.tsx  # Papan pemuka pengauditan pentadbir (Asward)
│   │   ├── AuditDetailModal.tsx # Modal audit terperinci kakitangan
│   │   ├── CalendarView.tsx     # Paparan kalendar visual syif OT
│   │   ├── ClaimReviewPage.tsx  # Baucar perakuan rasmi tuntutan
│   │   ├── EditEntryModal.tsx   # Modal kemaskini rekod OT & lampiran borang
│   │   ├── FileViewerModal.tsx  # Modal pratonton fail & muat turun borang OT
│   │   ├── Header.tsx           # Bar navigasi atas berjenama Media Prima
│   │   ├── LoginPage.tsx        # Halaman log masuk & pemilihan profil
│   │   ├── MediaPrimaLogo.tsx   # Komponen logo rasmi Media Prima Berhad
│   │   ├── QuotaGauge.tsx       # Tolok pematuhan had 104 jam Akta Kerja
│   │   ├── SimulationBar.tsx    # Bar simulasi peranan & tarikh tutup
│   │   ├── StaffDashboard.tsx   # Papan pemuka staf, borang log OT & muat naik
│   │   └── Toast.tsx            # Pemberitahuan sistem masa nyata
│   ├── App.tsx                  # Komponen induk aplikasi & pengurusan keadaan
│   ├── mockData.ts              # Data awal simulasi penggajian Oktober 2024
│   ├── types.ts                 # Definisi jenis TypeScript (OvertimeEntry, dll)
│   └── main.tsx                 # Titik masuk aplikasi
├── package.json
└── README.md
```

---

## ⚖️ Pematuhan Undang-Undang Buruh (Statutory Compliance)

Aplikasi ini dibina berpandukan keperluan perundangan buruh Malaysia:
- **Seksyen 60(3) Akta Kerja 1955**: Had kerja lebih masa tidak melebihi **104 jam dalam satu bulan kalendar**.
- **Kadar Bayaran Lebih Masa**:
  - Hari Bekerja Biasa: **1.5x** kadar gaji sejam (Hourly Rate of Pay - HRP).
  - Hari Rehat / Kelepasan Am: **2.0x** hingga **3.0x** kadar gaji sejam.
- **Integriti Rekod**: Rekod log masa dan borang lampiran disimpan secara digital bagi tujuan semakan Jabatan Tenaga Kerja (JTK).

---

## 🏢 Hak Cipta & Lesen (Copyright)

Hak Cipta Terpelihara © 2025 **Media Prima Berhad**.  
Dibangunkan untuk Operasi Personel & Bahagian Sumber Manusia Media Prima Berhad.
