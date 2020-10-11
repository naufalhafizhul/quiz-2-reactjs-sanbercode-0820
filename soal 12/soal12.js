class BangunDatar {
    constructor ( nama ) {
        this._nama = nama;
    }
}

class Persegi extends BangunDatar {
    constructor(nama, sisi) {
        super(nama);
        this._sisi = sisi;
        this.luas = this._sisi * this._sisi;
        this.keliling = this._sisi * 4;
    }

    luas() {
        this.luas =  this._sisi * this._sisi;
    }

    keliling() {
        this.keliling = this._sisi * 4
    }

    get getluas() {        
        return this.luas;
    }

    get getkeliling() {
        return this.keliling;
    }

    set setsisi(x) {
        this._sisi = x;
    }
}

class Lingkarang extends BangunDatar {
    constructor(nama, r) {
        super(nama);
        this._r = r;
        this.luas = 3.14 * r * r;
        this.keliling = 2 * 3.14 * r;
    }

    luas() {
        this.luas = 3.14 * r * r;
    }

    keliling() {
        this.keliling = 2 * 3.14 * r;
    }

    get getluas() {        
        return this.luas;
    }

    get getkeliling() {
        return this.keliling;
    }

    set setsisi(x) {
        this._r = x;
    }
}
let kotak = new Persegi('kotak', 19);
console.log("Persegi");
console.log();
console.log("Luas Persegi = "+kotak.luas);
console.log("keliling Persegi = "+kotak.keliling);

console.log();
let bulat = new Lingkarang('bulat', 7);
console.log("Lingkaran");
console.log("Luas Lingkaran = "+bulat.luas);
console.log("keliling Lingkaran = "+bulat.keliling);
