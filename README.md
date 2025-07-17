# Proyek Halaman Arahan Tipografi Modern

Selamat datang di proyek halaman arahan tipografi modern. Proyek ini dibuat menggunakan teknologi web terbaru untuk memberikan pengalaman pengguna yang cepat, mulus, dan menarik secara visual.

## Kabar Baik: Tidak Perlu Instalasi Rumit!

Proyek ini dirancang dengan pendekatan "buildless", yang berarti **Anda tidak perlu menjalankan `npm install` atau menginstal dependensi apa pun**. Semua pustaka yang diperlukan (seperti React) dimuat langsung oleh browser dari CDN (Content Delivery Network), membuat proyek ini sangat ringan dan mudah dijalankan.

## Cara Menjalankan Proyek Secara Lokal

Karena browser modern memiliki kebijakan keamanan untuk modul JavaScript, Anda tidak bisa hanya membuka file `index.html` secara langsung. Anda perlu menjalankannya melalui web server lokal sederhana. Berikut adalah beberapa cara mudah untuk melakukannya:

### Opsi 1: Menggunakan VS Code (Cara Paling Mudah)

1.  Buka folder proyek ini di Visual Studio Code.
2.  Cari dan pasang ekstensi bernama **"Live Server"** dari marketplace VS Code.
3.  Setelah terpasang, klik kanan pada file `index.html` di panel explorer.
4.  Pilih **"Open with Live Server"**.
5.  Browser Anda akan otomatis terbuka dengan proyek yang sedang berjalan.

### Opsi 2: Menggunakan Python (Jika Anda punya Python terpasang)

1.  Buka Terminal atau Command Prompt.
2.  Navigasi ke direktori (folder) proyek ini menggunakan perintah `cd`. Contoh: `cd /path/to/your/project-folder`.
3.  Jalankan perintah berikut:
    ```bash
    python -m http.server
    ```
4.  Buka browser Anda dan kunjungi alamat: `http://localhost:8000`.

### Opsi 3: Menggunakan Node.js (Jika Anda punya Node.js terpasang)

1.  Buka Terminal atau Command Prompt.
2.  Instal paket `serve` secara global (hanya perlu dilakukan sekali):
    ```bash
    npm install
    ```
3.  Navigasi ke direktori proyek ini menggunakan `cd`.
4.  Jalankan perintah berikut:
    ```bash
    npm run dev
    ```
5.  Buka browser Anda dan kunjungi alamat yang ditampilkan di terminal (biasanya `http://localhost:3000`).

## Struktur Folder

-   `index.html`: File utama yang memuat semua aset dan aplikasi.
-   `index.tsx`: Titik masuk utama untuk aplikasi React.
-   `App.tsx`: Komponen utama yang menyusun seluruh tata letak halaman.
-   `metadata.json`: Informasi dasar tentang aplikasi.
-   `components/`: Folder ini berisi semua komponen React yang dapat digunakan kembali yang membangun halaman (misalnya, Header, Footer, Hero, dll.).

Terima kasih telah mempercayakan proyek ini. Jika ada pertanyaan, jangan ragu untuk menghubungi.
