let i =1
while(i<=5){
    console.log(i)
    i++;
}
console.log("//////////////LOOPING 1 PAKAI WHILE/////////////////////")
let x = 5
while(x>=1){
    console.log(x)
    x--;
}

let nama =1
while(nama<=5){
    if(nama<=5){
        console.log("sigra")
    }else{
        console.log("argis")
    }
    nama++;
}
console.log("//////////////LOOPING 2 PAKAI WHILE/////////////////////")
let kebalikan = 5
while(kebalikan>=1){
    if(kebalikan>=1){
        console.log("argis")
    }else{
        console.log("sigra")
    }
    kebalikan--;
}
console.log("=======================================================")
console.log("=======================================================")

for(let z =1;z<=5;z++){
    console.log(z)
}
console.log("//////////////LOOPING 1 PAKAI FOR/////////////////////")
for(let s =5;s>=1;s--){
    console.log(s)
}

for(let v = 1;v<=5;v++){
    if(v<=5){
        console.log("agus")
    }else{
        console.log("suga")
    }
}
console.log("//////////////LOOPING 1 PAKAI FOR/////////////////////")
for(let c = 5;c>=1;c--){
    if(c>=1){
        console.log("suga")
    }else{
        console.log("agus")
    }
}


console.log("//////////////GANJIL AND GENAP/////////////////////")
for(let dan = 0 ; dan<=100;dan++){
    if(dan % 2 ==0){
        console.log(dan+" "+"genap")
    }else{
        console.log(dan+" "+"ganjil")
    }
}

console.log("///////////////// KELIPATAN :( //////////////////////////////////")

for(let conte1=1;conte1<=100;conte1+=2){
    if(conte1 % 3 ==0){
        console.log(conte1+" "+"kelipatan 3")
    }
}
for(let conte2=1;conte2<=100;conte2+=5){
    if(conte2 % 6 ==0){
        console.log(conte2+" "+"kelipatan 6")
    }
}
for(let conte3 =1;conte3<=100;conte3+=9){
    if(conte3 % 10 ==0){
        console.log(conte3+" "+"adalah kelipatan 10")
    }
}


console.log("///////////////CARA BIKIN BINTANG ASTERIKS///////////////////////")
let jumlah = 5
for(let k =1;k<=jumlah;k++){
    let bintang =""
    for(let n =1;n<=k;n++){
        bintang+="*"
    }
    console.log(bintang)
}