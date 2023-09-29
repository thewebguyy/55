
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
  })(window.jQuery);

  var button = document.querySelector('.btn-primary');

button.addEventListener('click', function() {
  window.location.href = 'order.html';
});

// Define a shopping cart array to store cart items
var shoppingCart = [];

// Function to add an item to the shopping cart
function addToCart(itemName, itemPrice, quantityInputId) {
    var quantity = parseInt(document.getElementById(quantityInputId).value, 10);

    // Validate the quantity input
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Create a cart item object
    var cartItem = {
        name: itemName,
        price: itemPrice,
        quantity: quantity
    };

    // Add the item to the shopping cart
    shoppingCart.push(cartItem);

    // Clear the quantity input field
    document.getElementById(quantityInputId).value = "1";

    // Update the total price
    updateTotalPrice();

    // You can update the UI to reflect the item added to the cart if needed
    // For example, update a cart icon or display a summary of the items in the cart
}

// Function to remove an item from the shopping cart by index
function removeItemFromCart(index) {
    if (index >= 0 && index < shoppingCart.length) {
        shoppingCart.splice(index, 1);
        // Update the total price after removing an item
        updateTotalPrice();
        // You can update the UI to reflect the removal of the item from the cart if needed
    }
}

// Function to update the total price of the shopping cart
function updateTotalPrice() {
    var total = 0;
    for (var i = 0; i < shoppingCart.length; i++) {
        var item = shoppingCart[i];
        total += item.price * item.quantity;
    }
    // Update the total price displayed in the UI
    document.getElementById("totalPrice").textContent = total.toFixed(2); // You can format as needed
}

// Function to proceed to the order/checkout page
function proceedToOrder() {
    // Check if the shopping cart is empty
    if (shoppingCart.length === 0) {
        alert("Your shopping cart is empty. Please add items to your cart before proceeding.");
        return;
    }

    // You can implement the logic to navigate to the order/checkout page here
    // For example, you can redirect the user to the order page
    // window.location.href = "order.html";

    // For demonstration purposes, log the cart items and total price to the console
    console.log("Cart Items:", shoppingCart);
    console.log("Total Price:", document.getElementById("totalPrice").textContent);
}

// Attach the "Proceed to Order" button click event
var proceedToOrderBtn = document.getElementById("proceedToOrderBtn");
if (proceedToOrderBtn) {
    proceedToOrderBtn.addEventListener("click", proceedToOrder);
}
