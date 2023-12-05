function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    let jumlahKata=kalimat.split(' ').length;
    return jumlahKata
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  function pasanganTerbesar(num) {
    // Mengonversi angka menjadi string untuk mempermudah manipulasi digit
    const strNum = String(num);
    let maxPair = 0;
  
    // Iterasi melalui setiap pasangan digit dalam angka
    for (let i = 0; i < strNum.length - 1; i++) {
      // Mengambil pasangan digit dan mengonversi kembali ke bentuk angka
      const pair = Number(strNum[i] + strNum[i + 1]);
  
      // Membandingkan dengan pasangan terbesar yang sudah ditemukan
      if (pair > maxPair) {
        maxPair = pair;
      }
    }
  
    return maxPair;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  