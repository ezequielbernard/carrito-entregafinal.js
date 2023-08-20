const pintarProductos = (data) => {
  const contenedor = document.getElementById("producto-contenedor");

  data.forEach(producto => {
      const divCol = document.createElement('div');
      divCol.classList.add('h-100'); 

      const card = document.createElement('div');
      card.classList.add('card');
      
      const cardImage = document.createElement('div');
      cardImage.classList.add('card-image');
      cardImage.innerHTML = `
          <img src=${producto.imagen}>
          <span class="card-title">${producto.nombre}</span>
      `;

      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');
      cardContent.innerHTML = `
          <p>${producto.desc}</p>
      `;

      const cardFooter = document.createElement('div');
      cardFooter.classList.add('card-action');
      cardFooter.innerHTML = `
          <a class="btn-floating btn-small waves-effect waves-light right brown">
              <i id=${producto.id} class="material-icons agregar">add_shopping_cart</i>
          </a>
          $${producto.precio}
      `;

      card.appendChild(cardImage);
      card.appendChild(cardContent);
      card.appendChild(cardFooter);
      
      divCol.appendChild(card);
      contenedor.appendChild(divCol);
  });
};



