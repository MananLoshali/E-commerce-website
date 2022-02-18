const text = document.querySelector(".fancy")
const stringText = text.textContent
const splitText = stringText.split("")
text.textContent = ""
for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}
let char = 0
let timer = setInterval(onTick, 50)

function onTick() {
    const span = document.querySelectorAll('span')[char]
    span.classList.add('fade')
    char++
    if (char === splitText.length) {
        complete()
        return
    }
}
function complete() {
    clearInterval(timer)
    timer = null

}

const Image = document.getElementsByTagName("img")
for (let img = 0; img < Image.length; img++) {
    Image[img].addEventListener("mouseover", (event) => {
        event.target.style.width = `${225}px`
        event.target.style.height = `${225}px`
        event.target.style.backgroundColor = "blue"
    })
}

for (let img = 0; img < Image.length; img++) {
    Image[img].addEventListener("mouseout", (event) => {
        event.target.style.width = `${200}px`
        event.target.style.height = `${200}px`
    })
}




const buyBtn = document.getElementsByClassName("buy-ml")
const mainHead = document.getElementById("main-heading")

for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener("click", function () {
        var cnfrm = confirm("Are you sure to Buy")
        if (cnfrm == true) {
            // mainHead.innerHTML = '<div class="box">Order Placed </div> '
            alert("Order Placed")
        }
    });
}
let sum = 0
let myItems = []
let myAmount = []
const cartBtn = document.getElementsByClassName("cart-ml")
const cartPara = document.getElementById("list-ml")
const cartPrice = document.getElementById("price-list")
const removeBtn = document.getElementById("remove-btn-list")

for (let c = 0; c < cartBtn.length; c++) {

    cartBtn[c].addEventListener("click", function () {
        this.disabled = true
        cartBtn[c].innerHTML = "<div class = 'btn-change'> Added to Cart </div>"

        switch (c) {
            case 0:
                var paraItem = document.getElementById("item-0")
                var paraCost = document.getElementById("price-0")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 1:
                var paraItem = document.getElementById("item-1")
                var paraCost = document.getElementById("price-1")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 2:
                var paraItem = document.getElementById("item-2")
                var paraCost = document.getElementById("price-2")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 3:
                var paraItem = document.getElementById("item-3")
                var paraCost = document.getElementById("price-3")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 4:
                var paraItem = document.getElementById("item-4")
                var paraCost = document.getElementById("price-4")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 5:
                var paraItem = document.getElementById("item-5")
                var paraCost = document.getElementById("price-5")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 6:
                var paraItem = document.getElementById("item-6")
                var paraCost = document.getElementById("price-6")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 7:
                var paraItem = document.getElementById("item-7")
                var paraCost = document.getElementById("price-7")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 8:
                var paraItem = document.getElementById("item-8")
                var paraCost = document.getElementById("price-8")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 9:
                var paraItem = document.getElementById("item-9")
                var paraCost = document.getElementById("price-9")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 10:
                var paraItem = document.getElementById("item-10")
                var paraCost = document.getElementById("price-10")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 11:
                var paraItem = document.getElementById("item-11")
                var paraCost = document.getElementById("price-11")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 12:
                var paraItem = document.getElementById("item-12")
                var paraCost = document.getElementById("price-12")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 13:
                var paraItem = document.getElementById("item-13")
                var paraCost = document.getElementById("price-13")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 14:
                var paraItem = document.getElementById("item-14")
                var paraCost = document.getElementById("price-14")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 15:
                var paraItem = document.getElementById("item-15")
                var paraCost = document.getElementById("price-15")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 16:
                var paraItem = document.getElementById("item-16")
                var paraCost = document.getElementById("price-16")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 17:
                var paraItem = document.getElementById("item-17")
                var paraCost = document.getElementById("price-17")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 18:
                var paraItem = document.getElementById("item-18")
                var paraCost = document.getElementById("price-18")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 19:
                var paraItem = document.getElementById("item-19")
                var paraCost = document.getElementById("price-19")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 20:
                var paraItem = document.getElementById("item-20")
                var paraCost = document.getElementById("price-20")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 21:
                var paraItem = document.getElementById("item-21")
                var paraCost = document.getElementById("price-21")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 22:
                var paraItem = document.getElementById("item-22")
                var paraCost = document.getElementById("price-22")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 23:
                var paraItem = document.getElementById("item-23")
                var paraCost = document.getElementById("price-23")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 24:
                var paraItem = document.getElementById("item-24")
                var paraCost = document.getElementById("price-24")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 25:
                var paraItem = document.getElementById("item-25")
                var paraCost = document.getElementById("price-25")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 26:
                var paraItem = document.getElementById("item-26")
                var paraCost = document.getElementById("price-26")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 27:
                var paraItem = document.getElementById("item-27")
                var paraCost = document.getElementById("price-27")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 28:
                var paraItem = document.getElementById("item-28")
                var paraCost = document.getElementById("price-28")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 29:
                var paraItem = document.getElementById("item-29")
                var paraCost = document.getElementById("price-29")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 30:
                var paraItem = document.getElementById("item-30")
                var paraCost = document.getElementById("price-30")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 31:
                var paraItem = document.getElementById("item-31")
                var paraCost = document.getElementById("price-31")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 32:
                var paraItem = document.getElementById("item-32")
                var paraCost = document.getElementById("price-32")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 33:
                var paraItem = document.getElementById("item-33")
                var paraCost = document.getElementById("price-33")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;

            case 34:
                var paraItem = document.getElementById("item-34")
                var paraCost = document.getElementById("price-34")
                myItems.push(paraItem.textContent)
                myAmount.push(paraCost.textContent)
                sum = sum + parseFloat(paraCost.textContent.replace(/,/g, ''))
                break;


            default:
                console.log("Defullt case")
                break;
        }
        renderListItems()
        renderListPrice()
        totalAmount()
        // addRemoveBtn()
    })

}

function renderListItems() {
    let myCartItems = ""

    for (let items = 0; items < myItems.length; items++) {
        myCartItems += `
    <li id = "list-of-cart"> 
    ${myItems[items]}
     </li><hr>
     `
        cartPara.innerHTML = myCartItems
    }
}


function renderListPrice() {
    let myCartPrice = ""
    for (let price = 0; price < myAmount.length; price++) {
        myCartPrice += `
        <li id = "list-of-cart"> 
        ${myAmount[price]}
        </li><hr>
        `
        cartPrice.innerHTML = myCartPrice
    }
}
function totalAmount() {
    const totalPrice = document.getElementById("total-price")
    totalPrice.innerHTML = `Total Amount: Rs ${sum}`;
}

const orderBtn = document.getElementById("order-ml")
orderBtn.addEventListener("click", () => {
    var cnfrm = confirm("Are you sure to Buy")
    if (cnfrm == true) {
        mainHead.innerHTML = '<div class="box">Order Placed </div> '
        // alert("Order Placed")
    }
})


const placeOrderBtn = document.getElementById("order-ml")
placeOrderBtn.addEventListener("mouseenter", function (event) {
    console.log("Mouse is over")
    event.target.style.backgroundColor = "green"
})
placeOrderBtn.addEventListener("mouseout", function (event) {
    event.target.style.backgroundColor = "sandybrown"
})







// function addRemoveBtn() {
//     let myRemoveBtn = ""
//     for (let btn = 0; btn < myAmount.length; btn++) {
//         myRemoveBtn += `
//         <li id = "list-of-cart-btn">
//         <button id = "remove-btn" onclick = "removeItems()" >remove</button>
//         </li><hr>
//         `
//         removeBtn.innerHTML = myRemoveBtn
//     }
// }
// function removeItems() {
//     console.log("remove btn is pressed")
//     for (let rebtn = 0; rebtn < myAmount.length; rebtn++) {
//         myItems.unshift(rebtn)
//     }
//     renderListItems()
//     renderListPrice()
// }