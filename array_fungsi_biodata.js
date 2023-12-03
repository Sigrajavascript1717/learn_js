// console.log("===============hasil dari penjumlahan array===============================")
// // pakai for
// const x =[3,5,12]
// let nilai = 0
// for(let i =0;i<x.length;i++){
//     nilai +=x[i];
// }
// console.log(nilai)
// //pakai while
// const y =[3,5,12]
// let hasil=0
// let a=0
// while(a<y.length){
//     hasil+=y[a]
//     a++
// }
// console.log(hasil)
// //pakai do while
// let z=[3,5,12]
// let hasill =0
// let  c=0
// do{
//     hasill+=z[c];
//     c++
// }while (c<z.length) {
// }
// console.log(hasill)

// let nama_siswa=["ega","rafli","jamal"]
// console.log(nama_siswa[0])

// let hobi=[["nama","alamat","hobi"],["makan","game","jalan"]]
// console.log(hobi[0][2])

console.log("=========membuat bidata dengan fungsi/function==========================")

function datahandling(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log("Nomor ID:  " + arr[i][0]);
      console.log("Nama Lengkap:  " + arr[i][1]);
      console.log("TTL:  " + arr[i][2] + " " + arr[i][3]);
      console.log("Hobi:  " + arr[i][4] + "\n");
    }
  }
  
  let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ];
  
  datahandling(input);
  console.log("=====================memakai split mode======================")

  function dataHandling(arr) {
    for (let i = 0; i < arr.length; i++) {
      let id = arr[i][0];
      let name = arr[i][1];
      let city = arr[i][2];
      
      // Pecah tanggal lahir menggunakan split
      let birthDate = arr[i][3].split("/");
      let birthPlace = city + " " + birthDate[0] + "/" + birthDate[1] + "/" + birthDate[2];
  
      let hobby = arr[i][4];
  
      console.log("Nomor ID:  " + id);
      console.log("Nama Lengkap:  " + name);
      console.log("TTL:  " + birthPlace);
      console.log("Hobi:  " + hobby + "\n");
    }
  }
  
  let inputan = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ];
  
  dataHandling(inputan);
  

