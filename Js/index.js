const getProducts = async() => {
    const response = await fetch("http://localhost:3000/products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const data = await response.json()

    console.log(data)

    let phone_html = ''
    let watch_html = ''
    let laptop_html = ''

    
    data.forEach(product => {
        item = `<div class="inside-container2">
        <img id="mobile2-ml" src="${product.image}" alt="Mobile 2" />
        <div class="double-inside-container2">
          <p class="para1" id="item-1">${product.name}</p>
          <p class="para2" id="price-1">₹${product.price}</p>
        </div>
        <div class="btn-container">
          <button class="buy-ml">BUY</button>
          <button class="cart-ml">Add To Cart</button>
        </div>
      </div>`

        if(product.category === 'mobile'){
            phone_html += item
        }
        if(product.category === 'watch'){
            console.log(product.category)
            watch_html += item
        }
        if(product.category === 'laptop'){
            console.log(product.category)
            laptop_html += item
        }
    });

    console.log(laptop_html)

    document.getElementById('container-mobile').innerHTML = phone_html
    document.getElementById('container-laptop').innerHTML = laptop_html
    document.getElementById('container-watches').innerHTML = watch_html

}
getProducts()

