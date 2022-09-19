const hitung = (tombol) => {
    //tangkap id form
    let frm = document.getElementById("calcForm");
    let a1 = parseFloat(frm.angka1.value);
    let a2 = parseFloat(frm.angka2.value);

    let total = "";
    if (isNaN(a1) || isNaN(a2)) {
      alert("Harap masukkan angka!!");
    } else {
      switch (tombol) {
        case "btn_tambah":
          total = a1 + a2; //rumus
          frm.hasil.value = total; //penempatan hasil
          break;
        case "btn_kurang":
          total = a1 - a2; //rumus
          frm.hasil.value = total; //penempatan hasil
          break;
        case "btn_kali":
          total = a1 * a2; //rumus
          frm.hasil.value = total; //penempatan hasil
          break;
        case "btn_bagi":
          total = a1 / a2; //rumus
          frm.hasil.value = total; //penempatan hasil
          break;
        case "btn_pangkat":
          total = Math.pow(a1, a2); //rumus
          frm.hasil.value = total; //penempatan hasil
          break;
      }
    }
  };
