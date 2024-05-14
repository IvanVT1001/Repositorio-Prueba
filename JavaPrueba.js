var perro = {

    nombre: "milo",
    edad: 12,
    vivo: false,
    quienSoy(){return "soy " + this.nombre},
    ladrar(){return this.nombre+" dice guau"}
}
document.write(perro.nombre+" tiene "+ perro.edad+" anios de edad.")
document.write(perro.quienSoy())
if(perro.vivo == true) {
    document.write(perro.ladrar())
} else {
    document.write("el perro ta morido")
}

