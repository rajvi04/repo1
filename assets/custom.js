var product_price = 0 ;
var message = "away from shipping";
var freemessage = "You're eligible for FREE shipping!";
var cartdata = function(){
  fetch('https://rp-develope-test.myshopify.com/cart.js')
    .then(response => response.json())
    .then(data => {
      let cart_total = data.total_price / 100;
      console.log(cart_total);
      product_price = cart_total;
      $('.rangebar progress').val(cart_total);
      var remaining_price = 100.00 - cart_total;
      console.log(remaining_price);
      var remaining_amount = Number(remaining_price).toFixed(2);
      console.log(remaining_amount);
      document.querySelector('.Drawer__Container p span').text(remaining_amount);
    });
}


$(document).ready(function(){

$("#scroll-top button img").click( function() {
   $("html, body").animate({ scrollTop: "0" }, 3000);
 });
  
$('.open-button').on('click', function() {
  
   var data1 = $(this).attr('popup-open');

  // var selector = "['popup-open='"+ data1 +"']'";
  // var selector = "['popup-open=' +'" data1 +"']";
  var selector = $('[popup-name='+data1+']');
  console.log(selector);
  $(selector).show();
  // console.log("'[popup-open='"+ data1 +"']' ");

 });   

      $('.main-custom-menu li').hover(function() {
        console.log('hovered');
        $(this).parent('.main-custom-menu').children('.child-custom-menu li').show();
     
      });

});

    $(document).ready(function() {
      $(".card__inner .card__media").hover(
        function() {
          $(this).addClass(".open-button");
        },
        function() {
          $(this).removeClass(".open-button");
        }
      );
    });

$('.close-btn').click(function() {
    $('.popup').hide();
});



$(document).ready(function () {

  var url = window.location.pathname+'?sections=banner-image';
  console.log(url);
  
   $.ajax({
            type: "GET",
            url: url,
            
            //if received a response from the server
            success: function(result) {

              console.log(result);
              
              var data = result['banner-image'];
              // console.log(data);
              $('#mycontact').append(data);
            },
      
        });
});




$(document).ready(function () {

  $( "#Search" ).on( "keyup", function() {
  var search =  $('.searchbar').find('#Search').val();
  console.log(search);
  var b = '&resources[type]=product'
  console.log(b);
  var searchurl = window.location.origin + '/search/suggest.json?q=' +search + b;
  console.log(searchurl);
var searchResultsContainer = $('#search-results');

if (search === '') {
        console.log('Search bar is empty');
        // Perform any desired action when the search bar is empty
      } else {
        console.log('Performing search for:', search);
        // Perform the search with the non-empty search term
      }
    
   $.ajax({
            type: 'GET',
            dataType: 'json',
            url: searchurl,
            
            //if received a response from the server
            success: function(response) {

            var productSuggestions = response.resources.results.products;
            console.log(productSuggestions);


            for (let i = 0; i < productSuggestions.length; i++) {
             searchResultsContainer.append('<div>' + productSuggestions[i].title + '</div>');
             // searchResultsContainer.append('<img src=' + productSuggestions[i].featured_image + '>');
            }
    
               
            }
      
        });
  });
});


$(document).ready(function() {
  $('nav ul li').hover(
    function() {
      // When the mouse enters the menu item
      $(this).find('.submenu').stop(true, true).slideDown(200);
    },
    function() {
      // When the mouse leaves the menu item
      $(this).find('.submenu').stop(true, true).slideUp(200);
    }
  );
});



$(document).ready(function() {
  
  var arra = [];
  $('.wishlist-add').on('click', function() {
    
    var productId = $(this).attr('product-id'); 
    console.log(productId);
    var producthandle = $(this).attr('product-handle'); 
    console.log(producthandle);

    if($.inArray(productId,arra) !==-1){
      console.log("Product ID exists in the array.");
    } else {
      arra.push(productId);
      console.log(arra);
    }


    var cookiedata = $.cookie("rajvi", arra);   
    console.log(cookiedata);

 
  });

  
    var data = $('.custom-menu').find('.menu li');
     console.log(data);
  
    $(data).each(function() {
    var href = $(this).attr("href");
      console.log(href);
                 
    
    });
  
 //collection tabbing 
      $('.tabs-nav button').click(function() {
    
        $('.tabs-nav button').removeClass('active');
        $(this).addClass('active');
    
        let currentTab = $(this).attr('href');
        $('.tabbing-content .tab-content').hide();
        $(currentTab).show();
    
        return false;
      });

      var url = window.location.pathname+'?sections=collection-tabbing';
      console.log(url);
      
       $.ajax({
                type: "GET",
                url: url,
                
                //if received a response from the server
                success: function(result) {
    
                  console.log(result);
                  
                  var data = result['collection-tabbing'];
                  console.log(data);
                  $('#mycontact').append(data);
                },
          
            });
  


$('.product-form__buttons').on('click', function(e) {
    e.preventDefault();

    var items = [];
    $('.recommended_products li').each(function() {
      if ($(this).find('.adone-pro-content input').prop('checked')) {
        console.log('checkbox is checked');

        var test = $(this).find('.adone-pro-content input:checked').attr('data-product-id');
        console.log(test);
        
        var inputData = ({id:test,quantity:1}); 
        items.push(inputData);
      }
    });
     var mainproid = $('.product-form__input').parent().siblings(".buy-buttons").find('.product-form .variant-id .product-variant-id').val();
     console.log(mainproid);
  
     var maindata = ({id:mainproid,quantity:1});        
       items.push(maindata);
       
        console.log(items);
        jQuery.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {items:items},
        dataType: 'json',
        success: function(response) {
          // console.log('Success:', response);
           $('.product-form__submit').submit();
        }
      });
  });

});

$(document).ready(function(){ 
  
    $(document).on('click','#product1',function() { 
    if ($(this).is(':checked')) { 
        variantId1 = jQuery(this).attr('data-variant');
          $('.btn-unsell_addToCart').attr('data-variant1',variantId1);
        } 
    else{
          $('.btn-unsell_addToCart').attr('data-variant1','');
        }
    });
    $(document).on('click','#product2',function() { 
    if ($(this).is(':checked')) { 
          variantId2 = jQuery(this).attr('data-variant');
          $('.btn-unsell_addToCart').attr('data-variant2',variantId2);
        } 
    else{
          $('.btn-unsell_addToCart').attr('data-variant2','');
        }
    });
    $(document).on('click','#product3',function() {  
      if ($(this).is(':checked')) { 
            variantId3 = jQuery(this).attr('data-variant');
            $('.btn-unsell_addToCart').attr('data-variant3',variantId3);
          }
      else{
        $('.btn-unsell_addToCart').attr('data-variant3','');
      }
    });
  
$(document).on('click','.btn-unsell_addToCart',function(){
      $('.hidden.error').hide();
      if($('.upsell-product input').is(":checked")){
        console.log('1');        
        $('.hidden.error').hide();
        variantId1 = $(this).attr('data-variant1');
          console.log(variantId1);
        variantId2 = $(this).attr('data-variant2');
          console.log(variantId2);
        variantId3 = $(this).attr('data-variant3');
          console.log(variantId3);
        var items= [];
        
        if(typeof (variantId1) != null && variantId1 != ''){
          item1 = {
            id : variantId1,
            quantity : 1 
          }
          items.push(item1);
        }
        if(typeof (variantId2) != null && variantId2 != ''){
          item2 = {
            id : variantId2,
            quantity : 1 
          }
          items.push(item2);
        }
        if(typeof (variantId3) != null && variantId3 != ''){
          item3 = {
            id : variantId3,
            quantity : 1 
          }
          items.push(item3);
        }
          console.log(items);
        
        let selected_items = { items:items};
          
        fetch(window.Shopify.routes.root + 'cart/add.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(selected_items)
        })
        .then(response => {
          response.json();
          $.get({
              url: "/",
              success: function (data) {
                var Drawer__Footer = $(data).find(".drawer__footer").html();
                var checkout_btn = $('body').find("#CartDrawer-Checkout").html();
                
                if(typeof(checkout_btn) === 'undefined')
                {
                  $('.Cart.Drawer__Content').append(`<div class="Drawer__Footer">`+ Drawer__Footer + `</div>`);
                }else{
                  $('.cart__contents .cart-drawer__form').html(Drawer__Footer);
                }
                var cart_items = $(data).find("#CartDrawer .drawer__inner #CartDrawer-CartItems .cart-items tbody").html();
                var cart_items_current = $('body').find("#CartDrawer .drawer__inner #CartDrawer-CartItems .cart-items tbody").html();
                var cartHtml = $(data).find('.cart-items tbody').html();
                cart_items = cartHtml;

                if(typeof(cart_items_current) === 'undefined')
                {
                  $("#CartDrawer .drawer__inner").append(`<div class="Drawer__Container"><div class="Cart__ItemList">`+ cart_items + `</div></div>`);
                }else{
                  $("#CartDrawer .drawer__inner #CartDrawer-CartItems .cart-items tbody").html(cart_items);
                }
  
              }
            });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      }else{
         console.log('0');
        $('.hidden.error').show();
      } 
  });
  
 $('.collection-tab-list a').click(function() {
   $('.collection-tab-list li').removeClass('active');
    $(this).parent().addClass('active');
    
    var tab = $(this).attr('data-attr');
    console.log(tab);
   $('.product-list div').hide();
    $('.' + tab).show();
});

 
});
            