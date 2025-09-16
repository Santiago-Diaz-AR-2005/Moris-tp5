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
      break;
    case "historialVentas":
      html = "<h2>Historial de Ventas</h2><p>Tabla con historial...</p>";
      break;
    case "productos":
      html = "<h2>Productos</h2><p>Listado de productos...</p>";
      break;
    case "ingresarProducto":
      html = "<h2>Ingresar Producto</h2><form><input placeholder='Nombre'><input placeholder='Precio'><button>Guardar</button></form>";
      break;
    case "reportesStock":
      html = "<h2>Reportes de Stock</h2><p>Gráficos o reportes...</p>";
      break;
    case "aperturaCaja":
      html = "<h2>Apertura de Caja</h2><p>Formulario de apertura...</p>";
      break;
    case "cierreCaja":
      html = "<h2>Cierre de Caja</h2><p>Formulario de cierre...</p>";
      break;
    case "movimientosCaja":
      html = "<h2>Movimientos de Caja</h2><p>Listado de movimientos...</p>";
      break;
    default:
      html = "<h2>Bienvenido</h2><p>Selecciona una opción del menú.</p>";
  }

  contenido.innerHTML = html;
}