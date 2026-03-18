async function getPlants() {
    const listElement = document.getElementById('plantsList');
    
    // Mensaje de carga inicial
    listElement.innerHTML = '<li>⌛ Consultando al vivero...</li>';

    try {
        // Asegúrate de que tu servidor Node esté corriendo en el puerto 3000
        const response = await fetch('http://localhost:3000/plants'); 
        
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

    data.data.forEach(plant => {
      const li = document.createElement("li");
      li.textContent = plant.name + " - $" + plant.price;
      list.appendChild(li);
    });

        // Limpiamos la lista
        listElement.innerHTML = '';

        if (data.length === 0) {
            listElement.innerHTML = '<li>🌿 No hay plantas registradas todavía.</li>';
            return;
        }

        // Dibujamos las plantas
        data.forEach(plant => {
            const li = document.createElement('li');
            // Usamos los nombres de campos de tu esquema de base de datos
            li.innerHTML = `<strong>🌵 Nombre:</strong> ${plant.nombre} <br> 
                            <strong>☀️ Clima:</strong> ${plant.clima || 'No definido'}`;
            listElement.appendChild(li);
        });

    } catch (error) {
        console.error('Error:', error);
        listElement.innerHTML = `<li style="color: red; border-left-color: red;">
            ❌ Error: No se pudo conectar con la API. <br>
            Verifica que el servidor esté activo y que tengas instalado CORS.
        </li>`;
    }
}
document.getElementById('btnVer').addEventListener('click', getPlants);
