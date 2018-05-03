var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];
  var source = $('.total').html();
  var template = Handlebars.compile(source)

  var updateCart = function () {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    $('.cart-list').empty();

    var itemsTotal = 0;

    cart.forEach(element => {
      var cartItems =  '<p> ' + element.name + ' - <span> $' + element.price + '</span> </p>';
      itemsTotal += element.price; 
      $('.cart-list').append(cartItems);  
     });

    var totalPrice = template({
      totalPrice: itemsTotal
    });
     $('.total').text(itemsTotal);
  }


  var addItem = function (item) {
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    cart.push(item);
  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    $('.cart-list').empty();
    $('.total').text(0);
    cart = [];


  }
  
  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggleClass('show');

});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = {};
  item.name = $(this).closest('.item').data().name;
  item.price = $(this).closest('.item').data().price;
  app.addItem(item);
  app.updateCart();
  alert(item.name + ' Added To The Cart.')
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});