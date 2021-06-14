let orderId = newURL(location.href).searchParams.get('orderId')
document.getElementById('commandId').textContent = orderId

function addConfirmationText(){
    let confirmationId = localStorage.getItem("orderConfirmation");
    let totalPrice = localStorage.getItem("prixtotalpanier");
    let confirmation = document.getElementById("Confirmation");
   

    messageConfirmation.innerText = 
    "nous vous remercions pour votre commande n° " + confirmationId;
    confirmationPrice.innerText = 
    "prix total de votre commande:" + total price + "euros"

    confirmation.appendChild(messageConfirmation)
    confirmation.appendChild(confirmationPrice)