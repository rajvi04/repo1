// $(window).on('load', function() {
  
//   var currentPagePath = window.location.pathname;
//   console.log(currentPagePath);

//   console.log("rajvi");
// function getCookie(cookieName) {
//   var name = cookieName + "=";
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var cookieArray = decodedCookie.split(';');

//   for (var i = 0; i < cookieArray.length; i++) {
//     var cookie = cookieArray[i];
    
//     while (cookie.charAt(0) === ' ') {
//       cookie = cookie.substring(1);
//     }
    
//     if (cookie.indexOf(name) === 0) {
//       return cookie.substring(name.length, cookie.length);
//     }
//   }
  
//   return "";
// }


  
// // Example usage:
// var cookieValue = getCookie("rajvi");
// console.log(cookieValue);

// const array = cookieValue.split(',');
//   console.log(array);
//   array.forEach(function(item) {
//     var url = window.location.origin + '/products/'  + item + '.json';
//     console.log(url);
    
//        $.ajax({
//           url: url, // Replace with the URL of your JSON file
//           dataType: "json",
//           success: function(data) {
//             var product = data;
//             console.log(product);
            
//               // var data = product.product['image'];
//               // console.log(data);
//               // var html = '<div class="pro-title"> '

// var html = '<div class="pro-img"><img src="' + product.product.image['src'] + '">  </div>' +
//             '<div class="pro-title"> '+ product.product['title'] + '</div>' + 
//             '<button class="pro-close-btn"> <i class="fa fa-close"></i> </button>'

//             $('.wishlist-content').append(html);
            
//             // console.log(product.product['title']);
//           }
//         });
//   });
// });


