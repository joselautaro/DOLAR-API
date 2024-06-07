// Realiza una solicitud a la API para obtener datos sobre el dólar
fetch("https://dolarapi.com/v1/dolares")
  .then(response => response.json()) // Convierte la respuesta a formato JSON
  .then(data => {
    // Selecciona el contenedor donde se insertarán las tarjetas
    const container = document.getElementById('card-container');
    
    // Itera sobre cada elemento en los datos recibidos
    data.forEach(dolar => {
      // Crea un nuevo elemento div para la tarjeta
      const card = document.createElement('div');
      // Asigna la clase 'card' al nuevo div
      card.className = 'card';
      // Agrega el contenido HTML a la tarjeta con los datos del dólar
      card.innerHTML = `
        <h2>${dolar.nombre}</h2>
        <p>Compra: ${dolar.compra}</p>
        <p>Venta: ${dolar.venta}</p>
        <p>Fecha: ${dolar.fecha}</p>
      `;
      // Añade la tarjeta al contenedor
      container.appendChild(card);
    });
  })
  .catch(error => {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error('Error al obtener los datos:', error);
  });
