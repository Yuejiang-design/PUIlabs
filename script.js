console.log("loaded");
var cart_num = 0;

function getNum() {
    var num = document.getElementsByName('number');
    var num_value;
    for(var i = 0; i < num.length; i++) {
        if(num[i].checked){
            num_value = num[i].value;
        }
    }
    return parseInt(num_value);
}

function checkNum() {
    var num_value = getNum();
    var total_price = 9 * num_value;
    var summary = "Total price: $" + total_price.toString();
    document.getElementById("summary").innerHTML = summary;
//    document.getElementsByClassName("submit")[0].style.backgroundColor = "#FEB103";
    document.getElementById("submit").classList.add("clickable");
}

function addToBag() {
    var num_value = getNum();
    cart_num += num_value;
    document.getElementById("cart").innerHTML = "Carts" + "(" + cart_num.toString() + ")";
}