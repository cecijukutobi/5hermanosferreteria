



function buttonClicked() {
    const product = {
      id: 1,
      name: 'Herramientas',
      description: 'Un conjunto de herramientas útiles',
      price: 100
    };
  
    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Producto agregado al carrito:', data);
    })
    .catch((error) => {
      console.error('Error al agregar el producto al carrito:', error);
    });
  }
  