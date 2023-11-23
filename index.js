precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
let cantidad = 1;
const precioProducto = 400000;

function aumentarCantidad() {
  cantidad++;
  actualizarCantidadYTotal();
}

function disminuirCantidad() {
  if (cantidad > 1) {
    cantidad--;
    actualizarCantidadYTotal();
  }
}

function actualizarCantidadYTotal() {
  const cantidadElemento = document.getElementById("cantidad-valor");
  const totalElemento = document.getElementById("total-valor");
  const totalExternoElemento = document.getElementById(
    "total-valor-externo"
  );

  cantidadElemento.textContent = cantidad;
  const total = cantidad * precioProducto;
  totalElemento.textContent = total;
  totalExternoElemento.textContent = total;
}