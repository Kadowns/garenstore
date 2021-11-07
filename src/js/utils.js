

function getProductBuyCount(productId){
    var item = window.localStorage.getItem(productId + "buy_count");
    if (item == null){
        return 0;
    }
    return JSON.parse(item);
}

function setProductBuyCount(productId, value){
    return window.localStorage.setItem(productId + "buy_count", JSON.stringify(value));
}

function getCurrentUser(){
    return JSON.parse(window.localStorage.getItem("current_user"))
}

function setCurrentUser(user){
    window.localStorage.setItem("current_user", JSON.stringify(user));
}

function addProductToUser(user, productId){
    user.cart.push(JSON.stringify(productId));
    setProductBuyCount(productId, getProductBuyCount(productId) + 1);
}

function removeProductFromUser(user, productId){
    user.cart.splice(user.cart.indexOf(JSON.stringify(productId)), 1)
    setProductBuyCount(productId, getProductBuyCount(productId) - 1);
}

function getProductById(productId){
    for (var i = 0; i < database.products.length; i++){
        if (productId == database.products[i].id){
            return database.products[i];
        }
    }
    return null;
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

function buildBuyProductFooter(product, hasProduct){
    var content = "";
    if(hasProduct == false) {
        content += '<div class="card-buy"  onclick="buy(' + product.id + ')"  >';
        content += 'Adicionar ao carrinho';
        content += '</div>';
    }
    else {
        content += '<div class="card-buy card-in-cart" onclick="remove('+ product.id + ')" >';
        content += 'Remover do carrinho';
        content += '</div>';
    }
    return content;
}

function buildProductCard(product, footerContent, rootFolderPath){
    var content = "";
    content += '<div class="card" >';
    content += '<div class="card-img">';
    content += '<img src="' + rootFolderPath + product.path + '" />';
    content += '</div>';
    content += '<div class="card-description">';
    content += product.name;
    content += '</div>';

    content += footerContent;

    content += '</div>';
    return content;
}