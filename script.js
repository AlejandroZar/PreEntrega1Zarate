const plantList = [
  { name: "Planta 1", price: 10 },
  { name: "Planta 2", price: 15 },
  { name: "Planta 3", price: 20 },
];

const cart = [];

const plantListElement = document.getElementById("plant-list");
const cartListElement = document.getElementById("cart-list");
const totalElement = document.getElementById("total");
const buyButtonElement = document.getElementById("buy-button");

function updateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  totalElement.textContent = total;
}

function addToCart(plant, quantity) {
  for (let i = 0; i < quantity; i++) {
    cart.push(plant);
    const listItemElement = document.createElement("li");
    listItemElement.textContent = `${plant.name} - $${plant.price}`;
    cartListElement.appendChild(listItemElement);
  }
  updateTotal();
}

for (let i = 0; i < plantList.length; i++) {
  const plant = plantList[i];
  const listItemElement = document.createElement("li");
  listItemElement.textContent = `${plant.name} - $${plant.price}`;
  plantListElement.appendChild(listItemElement);
  listItemElement.addEventListener("click", () => {
    const quantity = parseInt(prompt(`¿Cuántas ${plant.name} desea comprar?`));
    if (quantity) {
      addToCart(plant, quantity);
    }
  });
}

buyButtonElement.addEventListener("click", () => {
  const customerName = prompt("Por favor, ingrese su nombre:");
  if (customerName) {
    const confirmPurchase = confirm(`¿Desea confirmar la compra por un total de $${totalElement.textContent}?`);
    if (confirmPurchase) {
      alert(`Gracias por su compra, ${customerName}! Total: $${totalElement.textContent}`);
      cart.length = 0;
      cartListElement.innerHTML = "";
      updateTotal();
    }
  }
});
