window.onload = function(){
    loadProducts();
}

function loadProducts(){

    document.getElementById("card-list").innerHTML = "";

    var currentUser = getCurrentUser();

    var products = database.products;

    products.sort((a, b)=>{
        var aCount = getProductBuyCount(a.id);
        var bCount = getProductBuyCount(b.id);
        if (aCount > bCount){
            return -1;
        }
        if (aCount < bCount){
            return 1;
        }
        return 0;
    });

    for(var i = 0; i < products.length && i < 3; i++) {

        var hasProduct = userHasProductInCart(currentUser, products[i].id);

        var footer = buildBuyProductFooter(products[i], hasProduct);

        var content = buildProductCard(products[i], footer, "");
        
        document.getElementById("card-list").innerHTML += content;
    }
}

function buy(id){

    var currentUser = getCurrentUser();
    if (currentUser == null){
        alert("Por favor, realize o login para comprar.");
        return;
    }

    addProductToUser(currentUser, id);

    setCurrentUser(currentUser);

    loadProducts();

}

function remove(id){

    var currentUser = getCurrentUser();
    if (currentUser == null){
        alert("Por favor, realize o login para remover.");
        return;
    }

    removeProductFromUser(currentUser, id);

    setCurrentUser(currentUser);

    loadProducts();

}