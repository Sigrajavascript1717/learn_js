function cariMean(arr) {
    let sum=0;
    
    for(let i =0;i < arr.length;i++){
        sum+= arr[i]
    }
     // Menggunakan fungsi Math.round() untuk membulatkan hasil mean
    return Math.round(sum / arr.length);
}
    console.log(cariMean([1, 2, 3, 4, 5])); // 3
    console.log(cariMean([3, 5, 7, 5, 3])); // 5
    console.log(cariMean([6, 5, 4, 7, 3])); // 5
    console.log(cariMean([1, 3, 3])); // 2
    console.log(cariMean([7, 7, 7, 7, 7])); // 7



function perkalianUnik(arr) {
  // you can only write your code here!
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;

    // Hitung hasil perkalian semua elemen kecuali elemen pada indeks ke-i
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        product *= arr[j];
      }
    }

    result.push(product);
  }

  return result;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
    

function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
     // Periksa selisih antar elemen
  let selisih = arr[1] - arr[0];

  // Loop untuk memeriksa apakah selisih konstan
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== selisih) {
      return false;
    }
  }

  // Jika selisih konstan untuk semua pasangan elemen, maka ini adalah deret aritmatika
  return true;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false