/** Variables */
// 1. Create a Categories Array
const categories = ['All', 'T-shirt', 'Hoodies'];
const cartItems = [];

/** Functions */
//2. Display Categories Dynamically
// Create a function to display the categories | function
function displayCatergories(){
    // Retrieve the HTML element where the categories will be displayed | getElementById
    const $categories = document.getElementById('categories');
    // Create an empty list (array) to store the category elements | const, array
    const htmlTemplate = [];
    // Loop through each item in the categories array | forEach
    categories.forEach( category => {
        // Create an HTML list item for each category | template literal, push
        htmlTemplate.push(`<li class="nav-item">
              <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
            </li>`)
    });

    // Combine the list of category elements into a single string | join
    // Insert the HTML into the categories element | innerHTML
    $categories.innerHTML = htmlTemplate.join('')
}
// displayCatergories()


//3. Refactor with map()
function displayCatergoriesMap(){
    document.getElementById('categories').innerHTML = 
    categories.map( category => `<li class="nav-item">
              <a href="#" class="nav-link btn btn-light btn-sm rounded-0 mx-1">${category}</a>
            </li>`).join('');
}
// displayCatergoriesMap()

// 4. Add Products to the Cart
function addProduct(item){
    cartItems.push(item);

    cartItems.forEach(item => {
        const newLi = document.createElement('li')
        newLi.textContent = item
        document.getElementById('cart').appendChild(newLi)
    })


}

// 5. Create a specific function to display the cart. Obtain the code from the addToCart function.


// 6. Refactor Using JavaScript Methods to Create HTML Elements


// 7. Remove a Product from the Cart by index


// 8. Remove a Product from the Cart using filter()
