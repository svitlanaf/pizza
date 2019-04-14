//Business logic

"use strict";

// Constructor for pizza
function Pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

// Constructor for topping
function Topping(name, price) {
  this.name = name;
  this.price = price;
}

var sizes = ["Small", "Medium", "Large"];
var crusts = ["Original crust", "Gluten-friendly crust"];

var cheeseToppings = [
  new Topping("Dairy-free cheese", 0.70),
  new Topping("Feta", 0.50),
  new Topping("Gorgonzola", 0.60),
  new Topping("Mozzarella", 0.40),
  new Topping("Parmesan", 0.60),
];

var veggieToppings = [
  new Topping("Artichokes", 0.40),
  new Topping("Black olives", 0.40),
  new Topping("Jalapenos", 0.20),
  new Topping("Mushrooms", 0.20),
  new Topping("Red peppers", 0.20),
  new Topping("Spinach", 0.20),
  new Topping("Tomatoes", 0.20),
];

var meetToppings = [
  new Topping("Anchovies", 1.50),
  new Topping("Bacon", 1.80),
  new Topping("Grilled chicken", 1.50),
  new Topping("Pepperoni", 1.60),
  new Topping("Salami", 1.50),
];

var sauceToppings = [
  new Topping("BBQ swirl", 0.40),
  new Topping("Hot buffalo sauce", 0.40),
  new Topping("Ranch finish", 0.40),
  new Topping("Pesto drizzle", 0.40),
];

var allToppings = [cheeseToppings, veggieToppings, meetToppings, sauceToppings];

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
    price = price + 3.50
  }

  toppings.forEach(function(topping) {
    price = price + topping.price
  })
  return price
}

// User Interface Logic

$(document).ready(function() {
  $("#pizza-image").show();
  $("#size-crust").hide();
  $("#toppings").hide();
  $("#order").hide();
  $("#show-cart").hide();

  $("#pizza-image").click(function(event) {
    event.preventDefault();
    $("#pizza-image").hide();
    $("#size-crust").fadeIn();
    $("#toppings").fadeIn();
    $("#show-cart").show();

  cheeseToppings.forEach(function(t) {
    $("#cheese").append('<input type="checkbox" name="cheese" value="' + t.name + '">' + t.name + '<br>');
  });
  veggieToppings.forEach(function(t) {
    $("#veggie").append('<input type="checkbox" name="veggie" value="' + t.name + '">' + t.name + '<br>');
  });
  meetToppings.forEach(function(t) {
    $("#meet").append('<input type="checkbox" name="meet" value="' + t.name + '">' + t.name + '<br>');
  });
  sauceToppings.forEach(function(t) {
    $("#sauce").append('<input type="checkbox" name="sauce" value="' + t.name + '">' + t.name + '<br>');
  });
});

  $("#pizza").submit(function(event) {
    event.preventDefault();
    $("#order").fadeIn();
    $("#size-crust").hide();
    $("#toppings").hide();
    $("#show-cart").hide();
    var chosenSize = $("input:radio[name=size]:checked").val();
    var chosenCrust = $("input:radio[name=crust]:checked").val();
    var chosenToppingsNames = [];
    $("input[type=checkbox]:checked").each(function() {
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
    var pizza =  new Pizza (chosenSize, chosenCrust, chosenToppings);
    var pizzaPrice = pizza.calculatePrice(basePrice);
    var pizzaPriceRound = pizzaPrice.toFixed(2);
    var chosenPizzas = [];
    chosenPizzas.push(pizza);
    $('#pizza-panels').prepend(
      '<div id="pizza-panel-' + '"class="panel panel-default"><div class="panel-heading"><h4 class="panel-title">' +"Your pizza"  + '</h4></div><div class="panel-body"><p> ' + "Size: " + chosenSize + '<br>' + "Crust: " + chosenCrust + "<br>" + "Toppings: " + chosenToppingsNames.join(', ') + "<br>" + "Price: "  + pizzaPriceRound + '</p></div></div>'
    );
    $('input[type=checkbox]').prop('checked', false);
  });

  $("#show-cart").click(function(event) {
    event.preventDefault();
    $("#order").fadeIn();
    $("#show-cart").hide();
    $("#size-crust").hide();
    $("#toppings").hide();
    $("#show-cart").hide();
});

  $("#menu").click(function(event) {
    event.preventDefault();
    $("#order").hide();
    $("#show-cart").fadeIn();
    $("#size-crust").fadeIn();
    $("#toppings").fadeIn();
});
});
