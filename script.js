
// Fetch the products data from the 'products.json' file
fetch('products.json')
.then(response => response.json()) //convert JSON string into JavaScript object
.then(data => {
  // Get the product grid element by its ID where products will be displayed
  const productGrid = document.getElementById('productGrid');

   // Select only the first 4 products to display
  const productsToDisplay = data.slice(0, 4);

  // Loop through the selected products
  productsToDisplay.forEach(product => {
     // Create a new <section> element for each product
    const productSection = document.createElement('section');

    // Set the inner HTML of the section element with product details
    productSection.innerHTML = `
    <a href="${product.link}">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <p class="description">${product.description}</p>
    </a>
    `;

    // Append the created product section to the product grid
    productGrid.appendChild(productSection);
  });
})

.catch(error => {
  // Log any errors that occur while fetching or processing the data
  console.error("Error loading the product dara:", error);
});