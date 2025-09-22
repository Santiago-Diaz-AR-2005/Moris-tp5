const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const app = document.getElementById("app");
const loginContainer = document.getElementById("login-container");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    loginContainer.remove();
    app.classList.remove("hidden");
  } else {
    errorMessage.textContent = "Usuario o contraseña incorrectos";
  }
});


function mostrarContenido(opcion) {
  const contenido = document.getElementById("contenido");
  let html = "";

  switch(opcion) {
    case "nuevaVenta":
      html = "<h2>Nueva Venta</h2><p>Formulario de nueva venta...</p>";
      contenido.innerHTML = html;
      break;
    case "historialVentas":
      html = "<h2>Historial de Ventas</h2><p>Tabla con historial...</p>";
      contenido.innerHTML = html;
      break;
    case "productos":
      mostrarProductos(); // Muestra el listado de productos
      break;
    case "ingresarProducto":
      html = `<h2>Ingresar Producto</h2>
        <form id="formProducto">
          <input id="nombreProd" placeholder="Nombre">
          <input id="precioProd" placeholder="Precio" type="number">
          <button type="submit">Guardar</button>
        </form>`;
      contenido.innerHTML = html;
      break;
    case "reportesStock":
      html = "<h2>Reportes de Stock</h2><p>Gráficos o reportes...</p>";
      contenido.innerHTML = html;
      break;
    case "aperturaCaja":
      html = "<h2>Apertura de Caja</h2><p>Formulario de apertura...</p>";
      contenido.innerHTML = html;
      break;
    case "cierreCaja":
      html = "<h2>Cierre de Caja</h2><p>Formulario de cierre...</p>";
      contenido.innerHTML = html;
      break;
    case "movimientosCaja":
      html = "<h2>Movimientos de Caja</h2><p>Listado de movimientos...</p>";
      contenido.innerHTML = html;
      break;
    default:
      html = "<h2>Bienvenido</h2><p>Selecciona una opción del menú.</p>";
      contenido.innerHTML = html;
  }
}

// Guardar un producto
function guardarProducto(nombre, precio) {
  let productos = JSON.parse(localStorage.getItem("productos")) || [];
  productos.push({ nombre, precio });
  localStorage.setItem("productos", JSON.stringify(productos));
}

function mostrarProductos() {
  let productos = JSON.parse(localStorage.getItem("productos")) || [];
  let html = "<h2>Productos</h2><ul>";
  productos.forEach(prod => {
    html += `<li>${prod.nombre} - $${prod.precio}</li>`;
  });
  html += "</ul>";
  document.getElementById("contenido").innerHTML = html;
}

document.addEventListener("submit", function(e) {
  if (e.target && e.target.id === "formProducto") {
    e.preventDefault();
    const nombre = document.getElementById("nombreProd").value;
    const precio = document.getElementById("precioProd").value;
    guardarProducto(nombre, precio);
    mostrarProductos();
  }
});