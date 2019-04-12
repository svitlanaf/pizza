//Business logic

"use strict";

// Constructor for pizza
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
  this.show = true;
}

// Constructor for order
function Pizzas () {
  this.pizzas = [];
  // this.currentId = 0;
}

Pizzas.prototype.addPizza = function(pizza) {
  // pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

// Pizzas.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }


var sizes = ["Small", "Medium", "Large"];

var allToppings = [crustTopping, cheeseTopping, veggiesTopping, meetTopping, sauceTopping];

var crustTopping = {name: crust, products: ["original", "gluten-friendly"];
var cheeseTopping = {name: cheese, products: ["dairy-free cheese", "feta", "gorgonzola", "mozzarella", "parmesan"]};
var veggiesTopping = {name: veggies, products: ["artichokes", "black olives", "jalapenos", "mushrooms", "red peppers", "spinach", "tomatoes",]};
var meetTopping = {name: meet, products: ["anchovies", "bacon", "grilled chicken", "pepperoni", "salami",]};
var sauceTopping = {name: sauce, products: ["bbq swirl", "hot buffalo sauce", "ranch finish", "pesto drizzle"]};

var crust = [{name: "original", price: 3}, {name: "gluten-friendly", price: 3.5}];
var cheese = [{name: "dairy-free cheese", price: 0.7}, {name: "feta", price: 0.5}, {name: "gorgonzola", price: 0.6}, {name: "mozzarella", price: 0.4}, {name: "parmesan", price: 0.6}];
var veggies = [{name: "artichokes", price: 0.4}, {name: "black olives", price: 0.4}, {name: "jalapenos", price: 0.2}, {name: "mushrooms", price: 0.2}, {name: "red peppers", price: 0.2}, {name: "spinach", price: 0.2}, {name: "tomatoes", price: 0.2}];
var meet = [{name: "anchovies", price: 1.5}, {name: "bacon", price: 1.8}, {name: "grilled chicken", price: 1.5}, {name: "pepperoni", price: 1.6}, {name: "salami", price: 1.5}];
var sauce = [{name: "bbq swirl", price: 0.4}, {name: "hot buffalo sauce", price: 0.4}, {name: "ranch finish", price: 0.4}, {name: "pesto drizzle", price: 0.4}];


// Constructor for price
function Price(size, topping, basePrice) {
  this.size = size;
  this.topping = topping;
  this.basePrice = basePrice;
}

Price.prototype.calculatePrice = function() {
  var basePrice = this.basePrice;
  var size = this.size;
  var topping = topping;

  for (i = 0; i < sizes.length; i++) {
    if (size == "Small") {
      price = basePrice + 4
    } else if (size == "Medium") {
      price = basePrice + 6
    } else {
      price = basePrice + 9
    }
  }
  allToppings.forEach(function(topping) {

  })
  }

  return price
}
//
// stores.forEach(function(store) {
//   console.log(store.name + " sells:");
//   store.products.forEach(function(product) {
//     console.log(product.name);
//   });
//   console.log("\n");
// });


// User Interface Logic
var refreshTime = function() {
  $("#time").empty();
  var filteredMovie = $("select#movie").val();
  for (var i = 0; i < movies.length; i++) {
    if (movies[i].title == filteredMovie) {
      movies[i].time.forEach(function(t) {
        $("#time").append(
          "<option>" + t + "</option>")
      });
    }
  };
}

$(document).ready(function() {
  $("#age").change(function() {
    $("#movie").empty();
    var userAge = parseInt($("input#age").val());
    filterMoviesByAge(userAge).forEach(function(movie) {
      $("#movie").append(
        "<option>" + movie.title + "</option>")
    });
    refreshTime();
  });

  $("#movie").change(function() {
    refreshTime();
  });

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var filteredMovie = $("select#movie").val();
    var filteredTime = $("select#time").val();
    var seniorDiscount = 0.3;
    var morningDiscount = 0.2;
    var basePrice = 40;
    var releaseDiscount = 0.1;

    movies.forEach(function(m) {
      if (m.title == filteredMovie) {
        var userTicket = new Ticket (filteredMovie, m.release, filteredTime, basePrice, releaseDiscount);
        var userAge = parseInt($("input#age").val());
        var newTicketPrice = userTicket.calculatePrice(userAge);
        $("#ticketPrice").text("You are going to see " + filteredMovie + " at " + filteredTime + " for " + "$" + newTicketPrice);
      }
    });
  });
});
