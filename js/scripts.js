//Business logic

"use strict";

// Constructor for pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.show = true;
}

// Constructor for order
function Pizzas() {
  this.pizzas = [];
  // this.currentId = 0;
}

Pizzas.prototype.addPizza = function(pizza) {
  // pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

var sizes = ["Small", "Medium", "Large"];

// function Topping(name, price) {
//   this.name = name;
//   this.price = price;
// }

var crustTopping = [{
  name: "original crust",
  price: 3
}, {
  name: "gluten-friendly crust",
  price: 3.5
}];
var cheeseTopping = [{
  name: "dairy-free cheese",
  price: 0.7
}, {
  name: "feta",
  price: 0.5
}, {
  name: "gorgonzola",
  price: 0.6
}, {
  name: "mozzarella",
  price: 0.4
}, {
  name: "parmesan",
  price: 0.6
}];
var veggiesTopping = [{
  name: "artichokes",
  price: 0.4
}, {
  name: "black olives",
  price: 0.4
}, {
  name: "jalapenos",
  price: 0.2
}, {
  name: "mushrooms",
  price: 0.2
}, {
  name: "red peppers",
  price: 0.2
}, {
  name: "spinach",
  price: 0.2
}, {
  name: "tomatoes",
  price: 0.2
}];
var meetTopping = [{
  name: "anchovies",
  price: 1.5
}, {
  name: "bacon",
  price: 1.8
}, {
  name: "grilled chicken",
  price: 1.5
}, {
  name: "pepperoni",
  price: 1.6
}, {
  name: "salami",
  price: 1.5
}];
var sauceTopping = [{
  name: "bbq swirl",
  price: 0.4
}, {
  name: "hot buffalo sauce",
  price: 0.4
}, {
  name: "ranch finish",
  price: 0.4
}, {
  name: "pesto drizzle",
  price: 0.4
}];

var allToppings = [crustTopping, cheeseTopping, veggiesTopping, meetTopping, sauceTopping];

Pizza.prototype.calculatePrice = function(basePrice) {
  var price = basePrice;
  var size = this.size;
  var toppings = this.toppings;

  if (size == "Small") {
    price = price + 4
  } else if (size == "Medium") {
    price = price + 6
  } else {
    price = price + 9
  }

  toppings.forEach(function(topping) {
    price = price + topping.price
  })
  return price
}

// var p = new Pizza("Small", [{name: "original", price: 3}, {name: "hot buffalo sauce", price: 0.4}])
// console.log(p.calculatePrice(5))


// User Interface Logic

$(document).ready(function() {
  $("#pizza").submit(function(event) {
    event.preventDefault();
    var chosenSize = $("input:radio[name=size]:checked").val();
    var chosenToppingsNames = [];
    $("input:checkbox:checked").each(function() {
      chosenToppingsNames.push($(this).val());
    });
    var chosenToppings = [];
    chosenToppingsNames.forEach(function(toppingName) {
      allToppings.forEach(function(toppingCategory) {
        toppingCategory.forEach(function(topping) {
          if (topping.name == toppingName) {
            chosenToppings.push(topping)
          }
        });
      });
    });

    var basePrice = 5;
    var pizza =  new Pizza (chosenSize, chosenToppings);
    var pizzaPrice = pizza.calculatePrice(basePrice);
    $("#pizzaPrice").text("Your pizza is " + chosenSize + " size with " + chosenToppingsNames + " toppings is cost " + "$" + pizzaPrice);
  });
});
