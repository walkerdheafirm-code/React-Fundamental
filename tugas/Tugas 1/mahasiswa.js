const mahasiswa ={
    nama: "Dhea Firmasari",
    nim: "0123456789",
    jurusan: "Manajemen Informatika",
    nilai: [80, 90, 85, 95, 88]
}

const {nama, nim, jurusan, nilai} = mahasiswa;

const hitungRataRata = (arrNilai) => {
    const total = arrNilai.reduce((acc, val )=> acc + val, 0);
    return total / arrNilai.length;
}

let rataRata = hitungRataRata(nilai);

console.log(`===== DATA MAHASISWA =====`);
console.log(`Nama       : ${nama}`);
console.log(`NIM        : ${nim}`);
console.log(`Jurusan    : ${jurusan}`);
console.log(`Nilai      : ${nilai.join(", ")}`);
console.log(`Rata-rata  : ${rataRata.toFixed(2)}`);

const mahasiswaAktif = { ...mahasiswa, status: "Aktif" };

console.log(`\n===== DATA MAHASISWA (STATUS DITAMBAHKAN) =====`);
console.log(`Nama       : ${mahasiswaAktif.nama}`);
console.log(`Status     : ${mahasiswaAktif.status}`);

console.log(`\nObject asli masih tanpa status:`, mahasiswa);

const hitungTotal = (...semuaNilai) => {
  return semuaNilai.reduce((acc, val) => acc + val, 0);
};

const totalNilai = hitungTotal(...nilai);
console.log(`\nTotal Nilai: ${totalNilai}`);