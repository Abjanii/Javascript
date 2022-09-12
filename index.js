let namaPegawai = "Ridwan";
let jabatan = "Manager";
let status = "Menikah";
let gapok = 0;

if (jabatan == "Manager") {
  gapok = 15000000;
} else if (jabatan == "Asisten Manager") {
  gapok = 10000000;
} else if (jabatan == "staff") {
  gapok = 5000000;
} else {
  gapok = 0;
}

let tJabatan = 0.15 * gapok;
let BPJS = 0.1 * gapok;

let nilai = 0.2;
const tKeluarga = status == "Menikah" ? 0.2 * gapok : 0;

let bruto = gapok + tJabatan + BPJS + tKeluarga;

document.write(
  `<h1 align='center'>Data Gaji Pegawai</h1> </br>`
);

document.write(`<table border="1" align="center" cellspacing="0" cellpadding="12">
<thead>
  <tr bgcolor="#A5C9CA" style="color: #000;">
    <th colspan="5">Table Gaji Pegawai</th>
  </tr>
  <tr bgcolor="#D2DAFF" style="color: #000;">
    <th>Nama Pegawai</th>
    <th>Jabatan</th>
    <th>Status</th>
    <th>Data Gaji</th>
    <th>Keterangan</th>
  </tr>
</thead>
<tbody>
  <tr bgcolor="#D2DAFF" style="color: #000;">
    <td rowspan="4">Ridwan</td>
    <td rowspan="4">${jabatan}</td>
    <td rowspan="4">${status}</td>
    <td>Gaji Pokok</td>
    <td>Rp.${gapok}</td>
  </tr>
  <tr bgcolor="#D2DAFF" style="color: #000;">
    <td>Tunjangan Jabatan</td>
    <td>Rp.${tJabatan}</td>
  </tr>
  <tr bgcolor="#D2DAFF" style="color: #000;">
    <td>BPJS</td>
    <td>Rp.${BPJS}</td>
  </tr>
  <tr bgcolor="#D2DAFF" style="color: #000;">
    <td>Tunjangan Keluarga</td>
    <td>Rp.${tKeluarga}</td>
  </tr>
</tbody>
<tfoot bgcolor="#A5C9CA">
  <th colspan="4">Total</th>
  <th>Rp.${bruto}</th>
</tfoot>
</table>`);
