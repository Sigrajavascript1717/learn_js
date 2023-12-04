function palindrome(kata) {
    kata=kata.toLowerCase().replace(/\s/g,'')
    let panjang = kata.length;
    for (let i = 0; i < Math.floor(panjang / 2); i++) {
        if (kata[i] !== kata[panjang - 1 - i]) {
          return false; // Jika ada perbedaan, bukan palindrome
        }
      }
      return true
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false



function angkaPalindrome(num) {
    // Membuat fungsi untuk memeriksa apakah suatu angka adalah palindrome
    function isPalindrome(number) {
      const strNumber = String(number);
      const reversedStr = strNumber.split('').reverse().join('');
      return strNumber === reversedStr;
    }
  
    // Melakukan pengecekan terus-menerus hingga menemukan angka palindrome
    while (true) {
      num++;
      if (isPalindrome(num)) {
        return num;
      }
    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001
  