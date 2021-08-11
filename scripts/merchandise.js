//filtering the search bar

$(document).ready(function(){
    $("#search").on("keyup", function(){
        var input = $(this).val().toUpperCase();
        $(".merchandise li").filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(input) > -1)
        })
    })
})

// filtering using checkboxes -- JS
// var fJersey = document.getElementById("filterJersey")
// var jersey = document.getElementById("jersey")
// console.log(fJersey)

// function filter(){
//     if (fJersey.checked == true){
//         jersey.querySelectorAll.
//     }
// }

//---SHOPPING CART---//

var addToCart = document.getElementsByClassName("addToCart")

for(let x = 0; x < addToCart.length; x++)
    {
     var button = addToCart[x]
     {
         button.addEventListener("click", addToCartClicked)
     }
}

function addToCartClicked(event){
    var button = event.target
    var item = button.parentElement.parentElement
    var name = item.getElementsByClassName("name")[0].innerText
    var price = item.getElementsByClassName("price")[0].innerText
    var image = item.getElementsByClassName("merchImg")[0].src
    console.log(name)
    console.log(price)
    console.log(image)
    addItemToCart(name, price, image)

}

function addItemToCart(name, price, image){
    var createRow = document.createElement("div")
    createRow.innerText = name
    createRow.classList.add("cRow")
    var cartItem = document.getElementsByClassName("displayCart")[0]

    var cartRowCont = 
    `<div class="cartItem cartColumn">
        <img class="cartImg" src="${image}" width="100" height="100">
        <span class="itemName">${name}</span>
    </div>
    <span class="cartPrice cartColumn">${price}</span>
    <div class="cartQuantity cartColumn">
        <input class="cartQuantityNum" type="number" value="1" min="1" max="5">
        <button onclick=onClickRemove() class="btn btnRemove" type="button">Remove</button>
</div>`

    createRow.innerHTML = cartRowCont
    cartItem.append(createRow)

}

function onClickRemove(e){
    var buttonClick = event.target
    buttonClick.parentElement.parentElement.remove()
}

/*---PRICE---*/

function checkCartTotal(){
    var cartItem = document.getElementsByClassName("displayCart")[0]
    var cartRows = cartItem.getElementsByClassName("cRow")
    var total = 0;

    for(let x = 0; x < cartRows.length; x++){
        var cartRow = cartRows[x]
        var priceItem = cartRow.getElementsByClassName("cartPrice")[0]
        var quantityItem = cartRow.getElementsByClassName("cartQuantityNum")[0]

        var price = parseFloat(priceItem.innerText.replace("$", ""))
        var quantity = quantityItem.value

        total = total + (price * quantity)
        // console.log(price)
        
        
    }
    document.getElementsByClassName("priceNum")[0].innerText = "$" + total

}

function updateCart(){
    checkCartTotal();  

}





//---View Cart---//

$( document ).ready(function openCart(){
    $(".container").find(".viewCart").click(function(){
        $(this).parent().find(".modal").addClass("openModal")
        
    });

    $(".container").find(".closeBtn").click(function(){
        $(this).parent().parent().removeClass("openModal")
        
    });
    

});
