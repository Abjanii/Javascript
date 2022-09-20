//Membuat OOP pada JavaScript

class Gempa{
    constructor(lokasi, skala){
        this.lokasi = lokasi;
        this.skala = skala;
    }

    //If Multikondisi
    getdampak(){
        if (this.skala >= 6 && this.skala <= 10) this.dampak = 'Bangunan Roboh dan Berpotensi Tsunami';
        else if (this.skala >= 4 && this.skala < 6)this.dampak = 'Bangunan Roboh';
        else if (this.skala >= 2 && this.skala < 4)this.dampak = 'Bangunan retak-retak';
        else if (this.skala >= 0 && this.skala < 2)this.dampak = 'tidak terasa';
        else this.dampak = '';

        return this.dampak;
    }

    //Function infoGempa
    infogempa(){
        document.write(`<br/>Lokasi: ${this.lokasi}
        <br/>Skala: ${this.skala}
        <br/>Dampak: ${this.getdampak()}
        <hr/>`);
    }
}

//membuat Object
g1 = new Gempa('Aceh',5);
g2 = new Gempa('Yogyakarta',6);
g3 = new Gempa('Bandung',7);
g4 = new Gempa('Semarang',2);
g5 = new Gempa('Sabang',8);
g6 = new Gempa('Malang',4);
g7 = new Gempa('Madiun',1);
g8 = new Gempa('Lombok',9);
g9 = new Gempa('RajaAmpat',10);
g10 = new Gempa('Papua',3);

//Mencetak
g1.infogempa();
g2.infogempa();
g3.infogempa();
g4.infogempa();
g5.infogempa();
g6.infogempa();
g7.infogempa();
g8.infogempa();
g9.infogempa();
g10.infogempa();
