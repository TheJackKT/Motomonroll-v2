const productos = [
    {id:1, nombre:"Carenaje", precio:200000, img:"img/prod_1.jpg"}, 
    {id:2, nombre:"Pegatinas Moto", precio:50000, img:"img/prod_2.avif"},
    {id:3, nombre:"Llanta Moto", precio:300000, img:"img/prod_3.webp"}
]

function formatearDinero(valor){
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(valor);
}

function agregarAlCarrito(id){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let producto = productos.find(function(p){

        return p.id === id;

    });

    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto Agregado")

};


function mostrarCarrito(){

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let contenedor = document.getElementById("carritoContainer")
    if(!contenedor) return;
    contenedor.textContent = ""

    let total = 0;

    carrito.forEach(function(producto , index){
        contenedor.innerHTML +=
        "<div class='Producto'>" + 
        "<img src='" + producto.img + "' width='200'>" +
        "<p class='nombreP'>" + producto.nombre + "</p>" + 
        "<p class='precioP'>" + formatearDinero(producto.precio) + "</p>" + "<button onclick='eliminarProducto(" + index + ")'>Eliminar</button>" +
        "</div>";

        total = total + producto.precio;
    });

    let totalElemento = document.getElementById("totalPrecio")
    totalElemento.textContent = total

};


function vaciarCarrito(){
    localStorage.removeItem("carrito");
    mostrarCarrito();

}

function eliminarProducto(index){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(index, 1); // elimina 1 elemento en esa posición

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
}


mostrarCarrito();
    