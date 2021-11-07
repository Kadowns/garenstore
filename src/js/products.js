window.onload = function(){
    loadProducts();
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

function loadProducts(){

    document.getElementById("card-list").innerHTML = "";

    var currentUser = JSON.parse(window.sessionStorage.getItem("current_user"))


    var products = database.products;


    for(var i = 0; i < products.length; i++) {
        var conteudo = "";
        conteudo += '<div class="card" >';
        conteudo += '<div class="card-img">';
        conteudo += '<img src="../' + products[i].path + '" />';
        conteudo += '</div>';
        conteudo += '<div class="card-description">';
        conteudo += products[i].name;
        conteudo += '</div>';


        var hasProdutct = userHasProductInCart(currentUser, products[i].id);

        if(hasProdutct == false) {
            conteudo += '<div class="card-buy"  onclick="buy(' + products[i].id + ')"  >';
            conteudo += 'Adicionar ao carrinho';
            conteudo += '</div>';
        }
        else {
            conteudo += '<div class="card-buy card-in-cart" onclick="remove('+ products[i].id + ')" >';
            conteudo += 'Remover do carrinho';
            conteudo += '</div>';
        }
        
        conteudo += '</div>';
        
        document.getElementById("card-list").innerHTML += conteudo;
    }
}

function buy(id){

    var currentUser = JSON.parse(window.sessionStorage.getItem("current_user"))
    if (currentUser == null){
        alert("Por favor, realize o login para comprar.");
        return;
    }

    currentUser.cart.push(JSON.stringify(id));

    window.sessionStorage.setItem("current_user", JSON.stringify(currentUser));

    loadProducts();

}

function remove(id){

    var currentUser = JSON.parse(window.sessionStorage.getItem("current_user"))
    if (currentUser == null){
        alert("Por favor, realize o login para remover.");
        return;
    }

    currentUser.cart.splice(currentUser.cart.indexOf(JSON.stringify(id)), 1)

    window.sessionStorage.setItem("current_user", JSON.stringify(currentUser));

    loadProducts();

}