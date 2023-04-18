
let productos = []





const agregarUnProducto = () => {

    let continuar

    do {

        const nombre = prompt("Ingresa el nombre del producto:")
        const precio = parseFloat(prompt("Ingresa el precio del producto:"))

        productos.push(new Producto(nombre, precio))

        alert(`${nombre} fue agregado a la lista.`)
        continuar = prompt("Queres seguir agregando mas productos? si o no").toLowerCase()

    } while (continuar == "si")
}



const verProductos = () => {

    let listaProductos = ""
    productos.forEach(producto => listaProductos += `${producto.nombre} - ${producto.precio}\n`)
    alert(listaProductos)

}




function precioTotal() {

    return productos.reduce((total, producto) => total + producto.precio, 0)

}


agregarUnProducto()


verProductos()


const final = precioTotal()
alert(`El precio total de los productos es ${final}.`)
