// Datos de ejemplo para las reseñas
const reviews = [
    {
        name: "Carlos Pérez",
        image: "https://via.placeholder.com/60",
        rating: 5,
        review: "Excelente producto, me encanta la calidad y el diseño. Muy recomendable.",
    },
    {
        name: "Laura Gómez",
        image: "https://via.placeholder.com/60",
        rating: 4,
        review: "Buen producto, aunque la entrega tardó un poco más de lo esperado.",
    },
    {
        name: "Juan Rodríguez",
        image: "https://via.placeholder.com/60",
        rating: 3,
        review: "Producto bueno, pero no cumple todas las expectativas que tenía.",
    },
    {
        name: "Ana López",
        image: "https://via.placeholder.com/60",
        rating: 5,
        review: "Me encantó. Superó mis expectativas. Definitivamente volveré a comprar.",
    },
    {
        name: "Luis Fernández",
        image: "https://via.placeholder.com/60",
        rating: 2,
        review: "No estoy completamente satisfecho con la compra. Me parece que falta calidad.",
    }
];

// Función para mostrar las reseñas
function mostrarReseñas() {
    const contenedor = document.getElementById("reviews-list");

    reviews.forEach((review) => {
        const card = document.createElement("div");
        card.classList.add("review-card");

        // Crear contenido de la reseña
        card.innerHTML = `
            <div style="display: flex; align-items: center;">
                <img src="${review.image}" alt="${review.name}">
                <div class="review-info">
                    <h4>${review.name}</h4>
                    <div class="review-rating">${"★".repeat(review.rating)}</div>
                </div>
            </div>
            <div class="review-text">
                <p>${review.review}</p>
            </div>
        `;

        // Insertar la tarjeta en el contenedor
        contenedor.appendChild(card);
    });
}

// Llamamos a la función para cargar las reseñas
mostrarReseñas();
