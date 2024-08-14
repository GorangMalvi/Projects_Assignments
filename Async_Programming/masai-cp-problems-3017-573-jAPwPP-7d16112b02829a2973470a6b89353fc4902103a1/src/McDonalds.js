const getSelectedItems = () => {
  // code here
  const selectedItemsArray = [];
  const checkBox = document.querySelectorAll(".food");
  checkBox.forEach(function (items) {
    if (items.checked) {
      selectedItemsArray.push(items.value);
      items.checked = false;
    }
  });

  //console.log(selectedItemsArray);
  return selectedItemsArray;
};

// accepts selected items from the menu as an array
const orderFood = async (items) => {
  //console.log(items);

  let ID = Math.floor(Math.random() * 1000);
  return ( new Promise(function (res, rej) {
    let p1 = setTimeout(function () {
      const orderedFood = document.getElementById("ordered-items");
      const orderedID = document.getElementById("order-id");
      orderedFood.innerHTML = "";
      orderedID.innerHTML="";

      items.forEach(function (item) {
        let displayOrderedItem = document.createElement("div");
        displayOrderedItem.setAttribute("id", "food-item");
        displayOrderedItem.textContent = item;
         const orderID = document.createElement("h1");
        orderID.textContent = ID;
        orderedID.append(orderID);
        orderedFood.append(displayOrderedItem, orderedID);
      });
    }, 1000);
    res(p1);
  }));
};



window.onload = function () {
  //  get the buttons here and add click event
  const orderBtn = document.querySelector("button");
  orderBtn.addEventListener("click", function () {
    const items = getSelectedItems();
    //console.log(items);
    orderFood(items);
  });
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    orderFood,
  };
}