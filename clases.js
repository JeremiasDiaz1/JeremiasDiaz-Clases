
class usuario { 
    constructor(nombre, apellido){
        this.nombre = nombre, 
        this.apellido = apellido,
        this.libros = []
        this.mascotas = []
    }

    getFullName(){
        console.log('${nombre} ${apellido}')
    }

    addMascota(tipoMascota){
        this.mascotas.push(tipoMascota)

    }

    countMascota(){
        console.log(this.mascotas.length)

    }

    addBook(nombr, autor){
        this.libros.push({nombre: nombr, autor: autor})

    }

    getBookName(){
        const nombreLibros = []
        for(const libro of this.libros){
            nombreLibros.push(libro.nombre)
        }
        console.log(nombreLibros)
    }
}

const usuario1 = new usuario('Jeremias', 'Diaz')
usuario1.getFullName(),
usuario1.addMascota('Perro'),
usuario1.addMascota('Gato'),
usuario1.countMascota(),
usuario1.addBook('El visitante', 'Stephen King'),
usuario1.getBookName()