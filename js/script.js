// Define the order object to store user's selected items
const order = {
    items: [],
    totalPrice: 0,
  };
  
  // Function to add an item to the order
  function addItemToOrder(itemName, price) {
    order.items.push({ name: itemName, price: price, quantity: 1 });
    order.totalPrice += price;
  }
  
  // Function to update the order summary
  function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    orderSummary.innerHTML = ''; // Clear existing content
  
    order.items.forEach((item) => {
      const itemElement = document.createElement('div');
      itemElement.classList.add('order-item');
  
      const itemName = document.createElement('span');
      itemName.textContent = item.name;
      itemName.classList.add('item-name');
  
      const itemPrice = document.createElement('span');
      itemPrice.textContent = `₦${item.price}`;
      itemPrice.classList.add('item-price');
  
      const itemQuantity = document.createElement('input');
      itemQuantity.type = 'number';
      itemQuantity.value = item.quantity;
      itemQuantity.classList.add('item-quantity');
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-button');
  
      removeButton.addEventListener('click', () => {
        removeItemFromOrder(item);
        updateOrderSummary();
      });
  
      itemQuantity.addEventListener('change', (event) => {
        const newQuantity = parseInt(event.target.value);
        updateItemQuantity(item, newQuantity);
        updateOrderSummary();
      });
  
      itemElement.appendChild(itemName);
      itemElement.appendChild(itemPrice);
      itemElement.appendChild(itemQuantity);
      itemElement.appendChild(removeButton);
  
      orderSummary.appendChild(itemElement);
    });
  
    // Display the total price
    const totalPriceElement = document.createElement('div');
    totalPriceElement.textContent = `Total: ₦${order.totalPrice}`;
    totalPriceElement.classList.add('total-price');
  
    orderSummary.appendChild(totalPriceElement);
  }
  
  // Function to remove an item from the order
  function removeItemFromOrder(item) {
    const itemIndex = order.items.indexOf(item);
    if (itemIndex !== -1) {
      order.totalPrice -= item.price * item.quantity;
      order.items.splice(itemIndex, 1);
    }
  }
  
  // Function to update item quantity
  function updateItemQuantity(item, newQuantity) {
    if (newQuantity >= 1) {
      const itemIndex = order.items.indexOf(item);
      if (itemIndex !== -1) {
        order.totalPrice += (newQuantity - item.quantity) * item.price;
        item.quantity = newQuantity;
      }
    }
  }
  
  // Event listener for the "Place Order" button
  const placeOrderButton = document.getElementById('place-order-button');
  placeOrderButton.addEventListener('click', () => {
    // Validate form fields (You can implement form validation here)
  
    // Simulate submitting order data to the server (replace with actual server request)
    submitOrderToServer(order, (success) => {
      if (success) {
        alert('Order placed successfully!');
        // Clear order and update order summary
        order.items = [];
        order.totalPrice = 0;
        updateOrderSummary();
      } else {
        alert('Failed to place the order. Please try again.');
      }
    });
  });
  
  // Function to simulate submitting order data to the server (Replace with actual server request)
  function submitOrderToServer(orderData, callback) {
    // Simulate a server request with a delay (Replace with actual server request)
    setTimeout(() => {
      const randomSuccess = Math.random() < 0.8; // Simulate success or failure
      callback(randomSuccess);
    }, 2000); // Simulate a 2-second delay
  }
  
  // Initialize the order summary
  updateOrderSummary();
  