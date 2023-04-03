window.onload = function() {
  CheckPrice();
  handleSiUsernameEmpty();


};



function CheckPrice(){
  const price25 = 10;
  const price50 = 20;
  const price75 = 30;
  const price100 = 40;
  const price250 = 50;

  const dropdown = document.getElementById("dropdown");
  const priceElement = document.getElementById("price");

  dropdown.addEventListener("change", function() {
    let price = 0;
    switch(dropdown.value) {
      case "25":
        price = price25;
        break;
      case "50":
        price = price50;
        break;
      case "75":
        price = price75;
        break;
      case "100":
        price = price100;
        break;
      case "250":
        price = price250;
        break;
      default:
        price = 0;
    }
    priceElement.textContent = "$" + price;
  });
}
function handleSiUsernameEmpty(){
  field = document.getElementById("username")
  field.addEventListener("change", function(){
    error = document.getElementById("usrEmpty")
    if(field.value === undefined || field.value === ""){
      error.textContent = "Enter a valide username"
    }
  });
}
