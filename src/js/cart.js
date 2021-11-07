window.onload = function(){
    loadCart();
}

function userHasProductInCart(user, productId){
    if (user == null){
        return false
    }

    for (var i = 0; i < user.cart.length; i++){
        var productIdOnCart = JSON.parse(user.cart[i])

        if (productIdOnCart == productId){
            return true;
        }
    }
    return false;
}

function loadCart(){

    document.getElementById("card-list").innerHTML = "";

    var currentUser = getCurrentUser();

    if (currentUser == null){
        alert("Please log in a user account")
        window.location.href = "signin.html";
        return;
    }


    for(var i = 0; i < currentUser.cart.length; i++) {

        var productId = JSON.parse(currentUser.cart[i]);

        var product = getProductById(productId);
        
        var content = buildProductCard(product, buildBuyProductFooter(product, true), "../");
        
        document.getElementById("card-list").innerHTML += content;
    }
}

function remove(id){

    var currentUser = getCurrentUser();
    if (currentUser == null){
        alert("Por favor, realize o login para remover.");
        return;
    }

    removeProductFromUser(currentUser, id);

    setCurrentUser(currentUser);

    loadCart();
}