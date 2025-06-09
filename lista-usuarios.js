document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById('usuarios');
    const loader = document.getElementById('loader');
  
    fetch('https://reqres.in/api/users?page=1')
      .then(res => res.json())
      .then(data => {
        loader.style.display = 'none';
  
        data.data.forEach((user, index) => {
          const card = document.createElement('div');
          card.className = 'card';
          card.style.animationDelay = `${index * 100}ms`;
  
          card.innerHTML = `
            <img src="${user.avatar}" width="80" height="80" alt="Avatar de ${user.first_name}">
            <p><strong>${user.first_name} ${user.last_name}</strong></p>
            <p>${user.email}</p>
          `;
  
          contenedor.appendChild(card);
        });
      })
      .catch(err => {
        loader.innerText = "Error al cargar los usuarios.";
        console.error('Error al obtener usuarios:', err);
      });
  });
  