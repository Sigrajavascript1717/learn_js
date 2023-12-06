function targetTerdekat(arr) {
    // Temukan indeks 'o' dan 'x'
    let indexO = arr.indexOf('o');
    let indexX = arr.indexOf('x');
  
    // Jika tidak ada 'o' atau 'x', return 0
    if (indexO === -1 || indexX === -1) {
      return 0;
    }
  
    // Hitung jarak antara 'o' dan 'x'
    let distance = Math.abs(indexO - indexX);
  
    return distance;
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


  function mengelompokkanAngka(arr) {
    // Inisialisasi array untuk kelompok genap, ganjil, dan kelipatan 3
    let result = [[], [], []];
  
    // Loop melalui setiap angka dalam array input
    for (let angka of arr) {
      // Pengecekan kategori dan push ke dalam array kelompok yang sesuai
      if (angka % 3 === 0) {
        result[2].push(angka);
      } else if (angka % 2 === 0) {
        result[0].push(angka);
      } else {
        result[1].push(angka);
      }
    }
  
    return result;
  }
  
  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]
  

  function groupAnimals(animals) {
    // Inisialisasi objek untuk menyimpan kelompok berdasarkan huruf pertama
    let groupedAnimals = {};
  
    // Loop melalui setiap nama hewan
    for (let animal of animals) {
      // Ambil huruf pertama sebagai kunci
      let key = animal[0];
  
      // Jika kunci belum ada di objek, inisialisasi array kosong untuk kunci tersebut
      if (!groupedAnimals[key]) {
        groupedAnimals[key] = [];
      }
  
      // Masukkan nama hewan ke dalam array sesuai kunci
      groupedAnimals[key].push(animal);
    }
  
    // Konversi nilai objek menjadi array (hasil akhir)
    let result = Object.values(groupedAnimals);
  
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
  