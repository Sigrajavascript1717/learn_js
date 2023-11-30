function badingAngka(angka1,angka2) {
    if(angka2>angka1){
        return true
    }else if(angka1==angka2){
        return -1
    }else{
        return false
    }
}
//true
console.log(badingAngka(5,8))
// -1
console.log(badingAngka(5,5))
//false
console.log(badingAngka(5,4))


function balikKata(kata) {
    let i =kata.split('').reverse().join('')
    return i
}
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC console.log(balikKata('Super')); // repuS


console.log("===========================================================================================")
console.log("======================================CASE 2===============================================")
console.log("===========================================================================================")

function konversiMenit(menit) {
    // Menghitung jumlah jam
    let jam = Math.floor(menit / 60);
    
    // Menghitung sisa menit setelah dihitung jam
    let sisaMenit = menit % 60;
    
    // Menambahkan leading zero jika sisa menit kurang dari 10
    if (sisaMenit < 10) {
      sisaMenit = '0' + sisaMenit;
    }
    
    // Menggabungkan hasilnya dalam format jam:menit
    let hasil = jam + ':' + sisaMenit;
    
    // Mengembalikan hasil
    return hasil;
  }

  console.log(konversiMenit(63)); // Output: "1:03"
  

  function xo(str) {
    // Menghitung jumlah karakter 'x' dan 'o' dalam string
    let countX = (str.match(/x/g) || []).length;
    let countO = (str.match(/o/g) || []).length;
  
    // Mengembalikan true jika jumlah karakter 'x' sama dengan jumlah karakter 'o', dan false jika tidak
    return countX === countO;
  }
  
  // Contoh penggunaan
  console.log(xo("xxx"));        // Output: false
  console.log(xo("xoxoxo"));      // Output: true
  
  


