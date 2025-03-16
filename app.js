let amigos = [];

// Capturar el botón y el campo de entrada
const botonAgregar = document.getElementById('botonAgregar');  // Seleccionamos el botón "Agregar" por su ID
const campoNombre = document.getElementById('amigo');  // Seleccionamos el campo de entrada por su ID
const listaAmigos = document.getElementById('listaAmigos'); // Lista donde se agregarán los amigos
const resultado = document.getElementById('resultado');  // Donde se mostrará el resultado del sorteo

// Función para agregar el nombre a la lista de amigos
function agregarAmigo() {
    const nombre = campoNombre.value.trim();  // Obtener el nombre y quitar los espacios al principio y al final

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor agrega un nombre.");  // Mostrar mensaje si el campo está vacío
        return;  // Detener la ejecución si el campo está vacío
    }

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar la lista de amigos visualmente antes de agregar los nuevos
    listaAmigos.innerHTML = "";  // Limpiar la lista anterior

    // Iterar sobre el arreglo de amigos y agregar cada nombre a la lista en HTML
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');  // Crear un elemento <li> para cada amigo
        li.textContent = amigos[i];  // Establecer el nombre como contenido del <li>
        listaAmigos.appendChild(li);  // Agregar el <li> al contenedor de la lista
    }

    // Limpiar el campo de entrada para permitir agregar otro amigo
    campoNombre.value = "";
}

// Función para sortear un amigo aleatorio
function sortearAmigoAleatorio() {
    // Validar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio entre 0 y la longitud del arreglo menos 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la sección correspondiente
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}

// Asignar el evento de click al botón "Agregar"
botonAgregar.addEventListener('click', agregarAmigo);

// Asignar el evento de click al botón "Sortear Amigo Aleatorio"
const botonSorteoAleatorio = document.getElementById('botonSorteoAleatorio');
botonSorteoAleatorio.addEventListener('click', sortearAmigoAleatorio);
