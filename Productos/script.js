// Datos de ejemplo para los productos
const productos = [
    { nombre: 'Collares para perros', descripcion: 'Varios colores y tamaños.', precio: '5.900,00', imagen: '/images/collar.jpg' },
    { nombre: 'Pretales para perros', descripcion: 'Reforzados, todos los tamaños.', precio: '15.000,00', imagen: '/images/pretales.jpg' },
    { nombre: 'Comederos', descripcion: 'De aluminio, varios colores y todos los tamaños.', precio: '10.000,00', imagen: '/images/comederos.jpg' },
    { nombre: 'Juguetes', descripcion: 'De materiales seguros y resistentes.', precio: '4.500,00', imagen: '/images/juguetes.jpg' },
];

// Función para mostrar los productos
function mostrarProductos() {
    const contenedor = document.getElementById('product-list');
    productos.forEach((producto, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="card-body">
                <h4>${producto.nombre}</h4>
                <p>${producto.descripcion}</p>
                <p class="price">$${producto.precio}</p>
                <button onclick="mostrarDescripcion(${index})">Ver descripción</button>
            </div>
        `;
        
        contenedor.appendChild(card);
    });
}

// Función para mostrar la descripción del producto
function mostrarDescripcion(index) {
    const producto = productos[index];
    const descripcionElemento = document.getElementById('producto-descripcion');
    descripcionElemento.innerHTML = `
        <strong>Descripción:</strong> ${producto.descripcion}<br>
        <strong>Precio:</strong> $${producto.precio}
    `;

    // Desplazamiento hacia la sección de descripción del producto
    window.scrollTo({
        top: document.getElementById('descripcion-producto').offsetTop,
        behavior: 'smooth'
    });
}

// Llamamos a la función para cargar los productos
mostrarProductos();
