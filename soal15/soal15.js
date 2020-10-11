let warna = ['biru', 'merah', 'kuning', 'hijau']

let dataBukuTambahan = {
  penulis: 'John Doe',
  tahunTerbit: 2020
}

let buku = {
  nama: 'pemrog dasar',
  jumlahHalaman: 122,
  warnaSampul: ['hitam']
}

const gabung = [...buku.warnaSampul, ...warna]
const gabung2 = [dataBukuTambahan, buku]
console.log(gabung)
console.log(gabung2);