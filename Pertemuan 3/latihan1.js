const sik = {
    kelas : "A",
    angkatan : "2023",
    walidosen : "Ayang",
}

console.log (sik.kelas);
console.log (sik.angkatan);
console.log (sik.walidosen);

const siKel = {}

siKel.atribut1 = "value1"
siKel.atribut2 = "value2"
siKel.atribut3 = "value3"

console.log.siKel.atribut1;

delete siKel.atribut1


    let orang = {
        nama : "Ibrahim",
        pekerjaan : "Seniman",
        kendaraan : {
            motor : "rxking",
            mobil : "fusso",
            pesawat : "helikopter",
        }
    }

console.log (orang.kendaraan.mobil)
orang.kendaraan.mobil = "fusso"

let tampil = "Nama Saya" + orang.nama + ", Saya bekerja sebagai" + orang.pekerjaan + "Sehari-hari saya terbiasa mengendarai pesawat pribadi dengan jenis" + orang.kendaraan.pesawat


// document.getElementById("objek").innerHTML = tampil


let mahasiswa ={
    namaDepan : "Ibrahim",
    namaBelakang : "Ayang",
    namaLengkap : function (){
        return this.namaDepan + " " +this.namaBelakang
    }

}

let tampilMs = "nama saya" + mahasiswa.namaDepan + ", nama lengkap saya adalah" + mahasiswa.namaLengkap()
// document.getElementById("objek").innerHTML = tampilMs

function mahasiswaSIK (nama, kelas, angkatan){
    this.nama = nama,
    this.kelas = kelas,
    this.angkatan = angkatan
}

const mhs1 = new mahasiswaSIK ("jikri", "B", "2023");
const mhs2 = new mahasiswaSIK ("ottmar", "A", "2023");
const mhs3 = new mahasiswaSIK ("Zaki", "B", "2023");

console.log("nama mahasiswa pertama adalah" + mhs1.nama)
console.log("nama mahasiswa kedua adalah" + mhs2.nama)
console.log("nama mahasiswa ketiga adalah" + mhs3.nama)