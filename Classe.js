class Cachorro {

    constructor(raca) {
        this.raca = raca;
    }
}

const rotweiller = new Cachorro('Rotweiller');
console.log(rotweiller.raca);

class Gato {

    constructor(raca) {
        this._raca = raca;
    }

    get raca() {
        return this._raca;
    }
}

const gato = new Gato('Persa');
console.log(gato.raca);

class Artigo {

    constructor(titulo, data) {
        this._titulo = titulo;
        this._data = data;
    }

    get titulo() {
        return this._titulo;
    }

    get data() {
        return this._data;
    }

    static compara(primeiroArtigo, segundoArtigo) {
        return primeiroArtigo._data - segundoArtigo._data;
    }

    toString() {
        ;
    }
}

const artigos = [
    new Artigo('HTML', new Date(2020, 4, 1)),
    new Artigo('Java', new Date(2020, 3, 1)),
    new Artigo('Javascript', new Date(2020, 2, 1)),
    new Artigo('AngularJs', new Date(2020, 1, 1)),
    new Artigo('Sql Server', new Date(2020, 0, 1)),
]

const artigosOrdenadosPorData = artigos.sort(Artigo.compara);
console.log(artigosOrdenadosPorData);