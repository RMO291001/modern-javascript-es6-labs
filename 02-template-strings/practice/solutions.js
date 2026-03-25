// console.log("Exercise -1");
// {
//     const firstName = "Sara";
//     const lastName  = "Ahmed";
//     const age       = 24;
//     const city      = "Dhaka";
//     const isPremium = true;
//     const Premium = (isPremium)?"Premium ✓":"Basic";
//     const output = 
//     `    Name: ${firstName} ${lastName}
//     Age: ${age}
//     City: ${city}
//     Account: ${Premium}
//     `;
//     console.log(output);
// }

console.log("Exercise -2");
{
const product = {
        name:     "Wireless Headphones",
        price:    2499,
        stock:    3,
        discount: 10   // percent
    };

function renderProductCard(pro){
    const Final_price = (pro.price - (pro.price*(pro.discount/100))).toFixed(2);
    const html =
    `   <div class="card">
    <h2>${pro.name}</h2>
    <p class="price">৳ ${Final_price} <span>(${pro.discount}% off)</span></p>
    <p class="stock">Only ${pro.stock} left!</p>
  </div>
    `;
    return html;
}
console.log(renderProductCard(product));
}