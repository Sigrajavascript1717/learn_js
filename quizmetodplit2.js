let input = ["001", "Sigra Maulana ", "Aceh", "17/08/2000", "Game"];

function data_saya(input) {
    let [id,nama,kota,lahir,hobi]=input
    
    nama=nama.substr(0,15)
    kota = `kota ${kota}`;
    let tgl=lahir.split('/');

    let monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      let month = monthNames[parseInt(tgl[1])-1]
      console.log([id, nama, kota, lahir, "Pria", "SMA Negeri 2 Lhokseumawe"]);
    console.log(month);
    console.log(tgl);
    console.log(tgl.join('-'));
}
data_saya(input)