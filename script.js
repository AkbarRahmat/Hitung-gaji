/*
Buatlah program untuk menentukan upah mingguan seorang karyawan,

data yang dimasukkan yaitu: nama dan jumlah jam kerja

Ketentuan : 
1. Jika jam kerja kurang dari sama dengan 48 jam, maka gaji = jumlah jam kerja x 2000
2. Jika jam kerja lebih dari sama dengan 48 jam, maka gaji = 48 x 2000 + lembur * 3000

lembur didapat dari : jumlah jam kerja - 48

Lalu tampilkan hasilnya di console.log atau alert() dengan format tulisan
"Nama : <nama>, upah : <gaji>"

CLUE : gunakan IF-ELSE
*/

/* ========================== */
/* Silahkan Kerjakan Di bawah ini! */

// mendeklarasikan variable
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nama = document.getElementById("nama").value;
    let jamKerja = parseInt(document.getElementById("jamKerja").value);

    let gaji;
    if (jamKerja <= 48) {
        gaji = jamKerja * 2000;
    } else {
        let lembur = jamKerja - 48;
        gaji = 48 * 2000 + lembur * 3000;
    }

    document.getElementById("result").innerHTML = "Nama : " + nama + ", upah : " + gaji;
});