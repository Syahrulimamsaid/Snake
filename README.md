# 🐍 Mini Game Snake (Nokia Style)

## Deskripsi

Proyek ini merupakan implementasi **mini game Snake klasik seperti pada ponsel Nokia** yang dibuat menggunakan **JavaScript murni (Vanilla JavaScript)**.

Tujuan utama project ini adalah sebagai **latihan pembelajaran konsep dasar dan fundamental JavaScript**, khususnya dalam manipulasi DOM, pengelolaan state menggunakan array, serta logika permainan berbasis grid.

Game ini dibuat sebagai media pembelajaran untuk memahami bagaimana logika permainan sederhana bekerja tanpa menggunakan framework tambahan.

---

## Tujuan Pembelajaran

Project ini berfokus pada pemahaman konsep berikut:

* Manipulasi DOM
* Event Handling (Keyboard Input)
* Game Loop menggunakan `setInterval`
* Array sebagai struktur data utama
* 2D Grid Mapping ke Array 1D
* Collision Detection
* Random Position Generation
* State Management sederhana
* Logika pergerakan objek

---

## Fitur Game

* Pergerakan Snake menggunakan keyboard
* Sistem pertumbuhan saat memakan makanan
* Random spawn makanan
* Deteksi tabrakan dinding
* Deteksi tabrakan dengan tubuh sendiri
* Skor dasar
* Mekanisme pergerakan klasik ala Nokia Snake

---

## Teknologi yang Digunakan

* HTML
* CSS
* JavaScript (Vanilla JS)

Tidak menggunakan library atau framework eksternal.

---

## Cara Menjalankan Project

1. Clone repository:

```bash
git clone <repository-url>
```

2. Masuk ke folder project:

```bash
cd snake-game
```

3. Buka file `index.html` menggunakan browser.

---

## Kontrol Game

| Tombol      | Aksi              |
| ----------- | ----------------- |
| Arrow Up    | Bergerak ke atas  |
| Arrow Down  | Bergerak ke bawah |
| Arrow Left  | Bergerak ke kiri  |
| Arrow Right | Bergerak ke kanan |

---

## Struktur Project (Contoh)

```
/snake-game
 ├── index.html
 ├── style.css
 └── script.js
```

---

## Konsep Penting yang Dipelajari

### 1. Representasi Snake menggunakan Array

Snake direpresentasikan sebagai array berisi koordinat posisi setiap bagian tubuh.

### 2. Pergerakan Snake

Pergerakan dilakukan dengan:

* Menambahkan kepala baru di depan
* Menghapus ekor lama

### 3. Grid System

Board permainan menggunakan sistem koordinat `(x, y)` yang dipetakan ke array satu dimensi.

### 4. Game Loop

Game berjalan menggunakan mekanisme loop waktu tetap menggunakan `setInterval`.

---

## Pengembangan Selanjutnya

Beberapa ide pengembangan:

* Sistem level dan peningkatan kecepatan
* Pause / Resume
* High score
* Sound effect
* Mobile control
* Animasi tambahan

---

## Lisensi

Project ini dibuat untuk tujuan pembelajaran dan bebas digunakan sebagai referensi belajar.

---

## Catatan

Project ini ditujukan untuk memperkuat pemahaman fundamental JavaScript sebelum menggunakan framework modern.
