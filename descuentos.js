
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) /100;

    return precioConDescuento;
}

 function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    console.log("EL precio aqui es:" + priceValue)

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    console.log("EL descuento aqui es:" + discountValue)

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son:" + precioConDescuento;
}