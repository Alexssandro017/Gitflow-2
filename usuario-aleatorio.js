function obtenerIdAleatorio() {
    return Math.floor(Math.random() * 12) + 1;
  }
  
  function cargarUsuario() {
    const id = obtenerIdAleatorio();
    const url = `https://reqres.in/api/users/${id}`;
    const div = document.getElementById('usuario');
  
    div.classList.remove("fadeIn");
    void div.offsetWidth; 
    div.classList.add("fadeIn");
  
    fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    })
      .then(res => res.json())
      .then(data => {
        const user = data.data;
        div.innerHTML = `
          <img src="${user.avatar}" class="avatar"/>
          <h2>${user.first_name} ${user.last_name}</h2>
          <p>${user.email}</p>
        `;
      })
      .catch(err => {
        div.innerHTML = "<p>Error al obtener usuario.</p>";
        console.error(err);
      });
  }
  
  cargarUsuario();
  