// Sample menu data with prices in Naira
const menuItems = [
    { name: 'ENGLISH BREAKFAST', price: 5000 },
    { name: 'AMERICAN BREAKFAST', price: 5000 },
    // Add more menu items here
];

// Function to format a number as Naira (₦)
function formatNaira(price) {
    return `₦${price.toFixed(2)}`;
}

// Function to calculate the total price of the order
function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => total + item.price, 0);
}

// Function to update the menu list
function updateMenuList() {
    const menuList = document.getElementById('menu-list');
    
    menuItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${formatNaira(item.price)}`;
        menuList.appendChild(li);
    });
}

// Function to update the order list and total price
function updateOrderList() {
    // Code to add selected item(s) to the order
    // Update the total price accordingly
    // Example: const totalPrice = calculateTotalPrice(orderItems); // Calculate the total price
    // document.getElementById('total-price').textContent = formatNaira(totalPrice);
}

// Initialize the menu
updateMenuList();

// Event delegation for "Add to Order" button
document.getElementById('menu-list').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        // Add the selected item to the order list
        const selectedItem = menuItems.find(item => item.name === event.target.textContent.split(' - ')[0]);
        if (selectedItem) {
            // Add the item to the orderItems array
            // Update the order list and total price
            updateOrderList();
        }
    }
});
