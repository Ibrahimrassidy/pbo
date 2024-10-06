// Kelas dasar SensorPasut yang merepresentasikan sensor umum
class SensorPasut {
    #nama;   // Properti private untuk nama sensor
    #lokasi; // Properti private untuk lokasi sensor
    #status; // Properti private untuk status sensor (aktif/non-aktif)

    // Constructor untuk menginisialisasi sensor dengan nama dan lokasi
    constructor(nama, lokasi) {
        this.#nama = nama;
        this.#lokasi = lokasi;
        this.#status = "non aktif";  // Status awal sensor adalah non-aktif
    }

    // Method untuk mengaktifkan sensor
    aktifkan() {
        this.#status = "aktif";  // Ubah status menjadi aktif
        return `Sensor ${this.#nama} di ${this.#lokasi} telah diaktifkan`; // Pesan pengaktifan
    }

    // Method untuk menonaktifkan sensor
    nonaktifkan() {
        this.#status = "non aktif";  // Ubah status menjadi non-aktif
        return `Sensor ${this.#nama} di ${this.#lokasi} telah dinonaktifkan`; // Pesan penonaktifan
    }

    // Method untuk mendapatkan status sensor (aktif atau non-aktif)
    getStatus() {
        return `Sensor ${this.#nama} di ${this.#lokasi} sedang ${this.#status}`;  // Mengembalikan status sensor
    }

    // Getter untuk properti lokasi yang bersifat private
    getLokasi() {
        return this.#lokasi;  // Mengembalikan lokasi sensor
    }

    // Setter untuk memperbarui lokasi sensor
    setLokasi(lokasiBaru) {
        this.#lokasi = lokasiBaru;  // Memperbarui lokasi sensor dengan lokasi baru
    }

    // Getter untuk properti nama yang bersifat private (hanya bisa dibaca)
    getNama() {
        return this.#nama;  // Mengembalikan nama sensor
    }
}

// Kelas turunan dari SensorPasut, yang menambahkan informasi usia sensor
class UsiaSensor extends SensorPasut {
    #usia; // Properti private untuk menyimpan usia sensor

    // Constructor untuk menginisialisasi sensor dengan nama, lokasi, dan usia
    constructor(nama, lokasi, usia) {
        super(nama, lokasi);  // Memanggil constructor kelas induk
        this.#usia = usia;    // Menyimpan usia sensor
    }

    // Method untuk mendapatkan usia sensor
    getUsia() {
        return `Usia sensor adalah ${this.#usia} tahun`;  // Mengembalikan usia sensor
    }

    // Method untuk memperbarui usia sensor
    perbaruiUsia(usiaBaru) {
        this.#usia = usiaBaru;  // Memperbarui usia sensor
        return `Usia sensor telah diperbarui menjadi ${this.#usia} tahun`;  // Pesan pembaruan usia
    }
}

// Kelas SensorJaringan yang memperluas SensorPasut dengan menambahkan informasi jaringan
class SensorJaringan extends SensorPasut {
    #jaringan; // Properti private untuk menyimpan jaringan yang terhubung dengan sensor

    // Constructor untuk menginisialisasi sensor dengan jaringan
    constructor(nama, lokasi, jaringan) {
        super(nama, lokasi);  // Memanggil constructor kelas induk
        this.#jaringan = jaringan;  // Menyimpan informasi jaringan sensor
    }

    // Method untuk mendapatkan status jaringan sensor
    getStatusJaringan() {
        return `Sensor ${this.getNama()} di ${this.getLokasi()} terhubung ke jaringan ${this.#jaringan}`;  // Mengembalikan status jaringan
    }

    // Method untuk memperbarui jaringan sensor
    perbaruiJaringan(jaringanBaru) {
        this.#jaringan = jaringanBaru;  // Memperbarui jaringan sensor
        return `Jaringan sensor ${this.getNama()} telah diperbarui ke ${this.#jaringan}`;  // Pesan pembaruan jaringan
    }
}

// Kelas SensorBaterai yang memperluas SensorPasut dengan menambahkan status baterai
class SensorBaterai extends SensorPasut {
    #baterai; // Properti private untuk menyimpan status baterai sensor

    // Constructor untuk menginisialisasi sensor dengan status baterai
    constructor(nama, lokasi, baterai) {
        super(nama, lokasi);  // Memanggil constructor kelas induk
        this.#baterai = baterai;  // Menyimpan informasi status baterai
    }

    // Method untuk mendapatkan status baterai sensor
    getStatusBaterai() {
        return `Status baterai sensor ${this.getNama()} di ${this.getLokasi()} adalah ${this.#baterai}%`;  // Mengembalikan status baterai
    }

    // Method untuk mengisi ulang baterai sensor
    isiUlangBaterai() {
        this.#baterai = 100;  // Mengisi ulang baterai menjadi 100%
        return `Baterai sensor ${this.getNama()} telah diisi ulang menjadi ${this.#baterai}%`;  // Pesan pengisian ulang baterai
    }
}

// Contoh penggunaan kelas-kelas yang telah dibuat

// Membuat objek SensorPasut
let sensorPasutMerak = new SensorPasut("Selat Sunda", "Merak");
console.log(sensorPasutMerak.nonaktifkan());  // Menonaktifkan sensor dan menampilkan pesannya
console.log(sensorPasutMerak.getLokasi());    // Menggunakan getter untuk mendapatkan lokasi
sensorPasutMerak.setLokasi("Banten");         // Memperbarui lokasi sensor dengan setter
console.log(sensorPasutMerak.getStatus());    // Mendapatkan status sensor saat ini

// Membuat objek UsiaSensor
let usiaSensorMerak = new UsiaSensor("Selat Sunda", "Merak", 5);
console.log(usiaSensorMerak.getUsia());       // Mendapatkan usia sensor
console.log(usiaSensorMerak.perbaruiUsia(6)); // Memperbarui usia sensor dan menampilkan pesannya

// Membuat objek SensorJaringan
let sensorJaringanMerak = new SensorJaringan("Selat Sunda", "Merak", "WiFi");
console.log(sensorJaringanMerak.getStatusJaringan());  // Mendapatkan status jaringan sensor
console.log(sensorJaringanMerak.perbaruiJaringan("4G")); // Memperbarui jaringan sensor

// Membuat objek SensorBaterai
let sensorBateraiMerak = new SensorBaterai("Selat Sunda", "Merak", 50);
console.log(sensorBateraiMerak.getStatusBaterai());  // Mendapatkan status baterai sensor
console.log(sensorBateraiMerak.isiUlangBaterai());   // Mengisi ulang baterai sensor dan menampilkan pesan
