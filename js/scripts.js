//Business logic

"use strict";

// Constructor for pizza
function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
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
var crusts = ["Original crust", "Gluten-friendly crust"];

// Constructor for topping
function Topping(name, price) {
  this.name = name;
  this.price = price;
}

var cheeseToppings = [
  new Topping("Dairy-free cheese", 0.7),
  new Topping("Feta", 0.5),
  new Topping("Gorgonzola", 0.6),
  new Topping("Mozzarella", 0.4),
  new Topping("Parmesan", 0.6),
];

var veggieToppings = [
  new Topping("Artichokes", 0.4),
  new Topping("Black olives", 0.4),
  new Topping("Jalapenos", 0.2),
  new Topping("Mushrooms", 0.2),
  new Topping("Red peppers", 0.2),
  new Topping("Spinach", 0.2),
  new Topping("Tomatoes", 0.2),
];

var meetToppings = [
  new Topping("Anchovies", 1.5),
  new Topping("Bacon", 1.8),
  new Topping("Grilled chicken", 1.5),
  new Topping("Pepperoni", 1.6),
  new Topping("Salami", 1.5),
];

var sauceToppings = [
  new Topping("BBQ swirl", 0.4),
  new Topping("Hot buffalo sauce", 0.4),
  new Topping("Ranch finish", 0.4),
  new Topping("Pesto drizzle", 0.4),
];


Pizza.prototype.calculatePrice = function(basePrice) {
  var price = basePrice;
  var size = this.size;
  var crust = this.crust;
  var toppings = this.toppings;

  if (size == "Small") {
    price = price + 4
  } else if (size == "Medium") {
    price = price + 6
  } else {
    price = price + 9
  }

  if (crust == "Original crust") {
    price = price + 3
  } else {
    price = price + 3.5
  }

  toppings.forEach(function(topping) {
    price = price + topping.price
  })
  return price
}


// User Interface Logic

$(document).ready(function() {
  cheeseToppings.forEach(function(t) {
    $("#cheese-check-label").show();
    $("#cheese").append('<input type="checkbox" name="cheese" value="' + t.name + '">' + t.name + '<br>');
  });
  veggieToppings.forEach(function(t) {
    $("#veggie-check-label").show();
    $("#veggie").append('<input type="checkbox" name="veggie" value="' + t.name + '">' + t.name + '<br>');
  });
  meetToppings.forEach(function(t) {
    $("#meet-check-label").show();
    $("#meet").append('<input type="checkbox" name="meet" value="' + t.name + '">' + t.name + '<br>');
  });
  sauceToppings.forEach(function(t) {
    $("#sauce-check-label").show();
    $("#sauce").append('<input type="checkbox" name="sauce" value="' + t.name + '">' + t.name + '<br>');
  });
  
  $("#pizza").submit(function(event) {
    event.preventDefault();


    //
    // var chosenSize = $("input:radio[name=size]:checked").val();
    // var chosenToppingsNames = [];
    // $("input:checked").each(function() {
    //   chosenToppingsNames.push($(this).val());
    // });
    // var chosenToppings = [];
    // chosenToppingsNames.forEach(function(toppingName) {
    //   allToppings.forEach(function(toppingCategory) {
    //     toppingCategory.forEach(function(topping) {
    //       if (topping.name == toppingName) {
    //         chosenToppings.push(topping)
    //       }
    //     });
    //   });
    // });
    //
    // var basePrice = 5;
    // var pizza =  new Pizza (chosenSize, chosenToppings);
    // var pizzaPrice = pizza.calculatePrice(basePrice);
    // $("#pizzaPrice").text("Your pizza is " + chosenSize + " size with " + chosenToppingsNames + " toppings is cost " + "$" + pizzaPrice);
  });
});
