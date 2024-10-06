class Kapal {
    constructor (nama, jenis, kapasitas, panjang, lebar){
        this.nama = nama,
        this.jenis = jenis,
        this.kapasitas = kapasitas,   
        this.panjang = panjang,    
        this.lebar = lebar
}

infoKapal (){
    return `Kapal ini bernama ${this.nama} yang jenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki ${this.panjang} x lebar ${this.lebar}`

    }   


}

let kapalPenumpang = new Kapal ("Budiono Siregar", "Ferry", 500, 200, 100)
console.log(kapalPenumpang.infoKapal())
document.getElementById("objek").innerHTML = kapalPenumpang.infoKapal()

// class Kapal {
//     constructor (nama,enis, kapasitas, panjang, lebar){
//         this.nama = nama,
//         this.jenis = jenis,
//         this.kapasitas = kapasitas,   
//         this.panjang = panjang,    
//         this.lebar = lebar
// }
// }

    // Method lainnya
    // berlayar (){
    //     return `${this.nama} berlayar ke selat sunda`
    // }

    // berlabuh (){
    //     return `${this.nama} berlabuh di pelabuhan merak`
    // }

    // berangkat (){
    //     return `${this.nama} berangkat dari pelabuhan merak`
    // }

    // infoKapal (){
    //     return `Kapal ini bernama ${this.nama} yangenis ${this.jenis} dengan kapasitas ${this.kapasitas} memiliki ${this.panjang} x lebar ${this.lebar}`
    // }

    