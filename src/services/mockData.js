const books = [
    {
        id: "1",
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        price: 19.99,
        description: "La obra cumbre de Gabriel García Márquez, una saga de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo. Una historia épica de amor, pasión, muerte y resurrección que combina la realidad con lo fantástico.",
        coverImage: "/assets/images/books/cienAniosDeSoledad.webp",
        isbn: "978-0307474728",
        year: 1967,
        genre: "Realismo mágico",
        pages: 417
    },
    {
        id: "2",
        title: "1984",
        author: "George Orwell",
        price: 15.50,
        description: "Una novela distópica que presenta una crítica al totalitarismo y la vigilancia gubernamental masiva. Winston Smith lucha contra un sistema opresivo que controla incluso los pensamientos de sus ciudadanos.",
        coverImage: "/assets/images/books/1984.gif",
        isbn: "978-0451524935",
        year: 1949,
        genre: "Distopía",
        pages: 328
    },
    {
        id: "3",
        title: "Don Quijote de la Mancha",
        author: "Miguel de Cervantes",
        price: 12.95,
        description: "La obra más destacada de la literatura española y una de las principales de la literatura universal. Narra las aventuras de un hidalgo que, enloquecido por la lectura de libros de caballerías, recorre España en busca de aventuras.",
        coverImage: "/assets/images/books/donQuijote.webp",
        isbn: "978-8420412146",
        year: 1605,
        genre: "Novela",
        pages: 863
    },
    {
        id: "4",
        title: "Harry Potter y la piedra filosofal",
        author: "J.K. Rowling",
        price: 14.99,
        description: "El primer libro de la famosa saga de Harry Potter. Describe las aventuras del joven aprendiz de magia Harry Potter y sus amigos Hermione Granger y Ron Weasley en el Colegio Hogwarts de Magia y Hechicería.",
        coverImage: "/assets/images/books/harryPotter.webp",
        isbn: "978-8478884452",
        year: 1997,
        genre: "Fantasía",
        pages: 309
    },
    {
        id: "5",
        title: "El Señor de los Anillos",
        author: "J.R.R. Tolkien",
        price: 25.99,
        description: "Una trilogía épica de fantasía que narra la misión del hobbit Frodo Bolsón para destruir el Anillo Único, creado por el Señor Oscuro Sauron para dominar la Tierra Media.",
        coverImage: "/assets/images/books/senorDeLosAnillos.webp",
        isbn: "978-8445000663",
        year: 1954,
        genre: "Fantasía épica",
        pages: 1137
    },
    {
        id: "6",
        title: "Orgullo y prejuicio",
        author: "Jane Austen",
        price: 9.95,
        description: "Una novela romántica que retrata la vida de la familia Bennet y sus cinco hijas en la Inglaterra rural del siglo XIX. Se centra en la historia de Elizabeth Bennet y su complicada relación con el señor Darcy.",
        coverImage: "/assets/images/books/orgulloYPrejuiciio.webp",
        isbn: "978-8497940214",
        year: 1813,
        genre: "Novela romántica",
        pages: 368
    },
    {
        id: "7",
        title: "Crónica de una muerte anunciada",
        author: "Gabriel García Márquez",
        price: 12.50,
        description: "Una novela que relata el asesinato de Santiago Nasar a manos de los hermanos Vicario. La historia se desarrolla mediante una reconstrucción casi periodística de los hechos, 27 años después del crimen.",
        coverImage: "/assets/images/books/cronicaDeUnaMuerteAnunciada.webp",
        isbn: "978-0307474729",
        year: 1981,
        genre: "Realismo mágico",
        pages: 122
    },
    {
        id: "8",
        title: "El Principito",
        author: "Antoine de Saint-Exupéry",
        price: 8.99,
        description: "Una fábula infantil que aborda temas profundos como el sentido de la vida, la amistad y el amor. Narra la historia de un pequeño príncipe que viaja de planeta en planeta, conociendo a diversos personajes.",
        coverImage: "/assets/images/books/elPrincipito.gif",
        isbn: "978-8498381498",
        year: 1943,
        genre: "Literatura infantil",
        pages: 96
    },
    {
        id: "9",
        title: "La Metamorfosis",
        author: "Franz Kafka",
        price: 10.95,
        description: "Una novela corta que narra la historia de Gregorio Samsa, un comerciante que un día amanece convertido en un enorme insecto. La obra explora temas como la alienación y el absurdo de la existencia.",
        coverImage: "/assets/images/books/metamorfosis.webp",
        isbn: "978-8420669861",
        year: 1915,
        genre: "Ficción absurda",
        pages: 128
    },
    {
        id: "10",
        title: "Matar a un ruiseñor",
        author: "Harper Lee",
        price: 13.75,
        description: "Una novela que aborda temas de racismo e injusticia racial a través de los ojos de una niña, Scout Finch, cuyo padre abogado es designado para defender a un hombre negro acusado falsamente de violar a una mujer blanca.",
        coverImage: "/assets/images/books/matarAUnRuisenor.webp",
        isbn: "978-0061120084",
        year: 1960,
        genre: "Novela",
        pages: 376
    },
    {
        id: "11",
        title: "La Odisea",
        author: "Homero",
        price: 11.50,
        description: "Uno de los poemas épicos más antiguos de la literatura occidental. Narra el regreso de Ulises (Odiseo) a su hogar en Ítaca después de la Guerra de Troya, un viaje que duró diez años y estuvo lleno de aventuras y peligros.",
        coverImage: "/assets/images/books/laOdisea.webp",
        isbn: "978-8424935152",
        year: -800, // Fecha aproximada
        genre: "Poema épico",
        pages: 448
    },
    {
        id: "12",
        title: "Los juegos del hambre",
        author: "Suzanne Collins",
        price: 16.99,
        description: "En una distopía futura, Katniss Everdeen se ofrece como voluntaria para participar en unos brutales juegos televisados en sustitución de su hermana pequeña. La novela explora temas de supervivencia, desigualdad y rebelión.",
        coverImage: "/assets/images/books/losJuegosDelHambre.jpeg",
        isbn: "978-8427202122",
        year: 2008,
        genre: "Distopía juvenil",
        pages: 400
    }
];

// Función para obtener todos los libros
export const getBooks = () => {
    return [...books]; // Devuelve una copia para evitar mutaciones
};

// Función para obtener un libro por su ID
export const getBookById = (id) => {
    return books.find(book => book.id === id) || null;
};

// Función para buscar libros por título
export const searchBooks = (query) => {
    const lowercaseQuery = query.toLowerCase();
    return books.filter(book =>
        book.title.toLowerCase().includes(lowercaseQuery) ||
        book.author.toLowerCase().includes(lowercaseQuery)
    );
};

// Función para obtener libros por género
export const getBooksByGenre = (genre) => {
    return books.filter(book => book.genre === genre);
};

// Función para obtener libros del mismo autor
export const getBooksByAuthor = (author) => {
    return books.filter(book => book.author === author);
};

// Función para obtener libros destacados (simulado)
export const getFeaturedBooks = () => {
    // Devuelve los primeros 4 libros como destacados (podría ser otra lógica)
    return books.slice(0, 4);
};

// Función para obtener novedades (simulado como los últimos libros por año)
export const getNewReleases = () => {
    // Ordena por año descendente y devuelve los primeros 5
    return [...books].sort((a, b) => b.year - a.year).slice(0, 5);
};