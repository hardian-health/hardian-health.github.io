//alert("cant believe this works");

// ⬜️ domready START
$( document ).ready(function() {

    //⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ from browser console testing
    
    var productNameMaxLength = 1000;
    var showSimplePaginationOnTop = true;
    var showLargePaginationOnBottom = true;
    
    
    //HELPER truncate
    //truncate long titles to specified length. Example  truncate("Jukolan talo, eteläisessä Hämeessä", 5)
    var  truncate = function(input, length) {
       if (input.length > length) {
          return input.substring(0, length) + '...';
       }
       return input;
    };
    
    
    
    if(  window.location.pathname.includes("/p/") && $(".product-details").length  ) {
    console.log("we're on a product page (url containts /p/ and we've found .product-details");
    
    
    
    
    // get the name of this producrt were seeing and remove whitespace
    var productName = $(".ProductItem-details-title").text().replace(/^\s+|\s+$/gm,'');
    
    console.log("CURRENT PRODUCT WE'RE LOOKING AT: " + productName);
    
    var productNameList = []; // list of names in order
    var jsonListOfProducts = {}; //list of product objects with all info like urls
    
    // SET THE FETCH URL
    const urlFirstPart = window.location.pathname.split('/')[1];
    var fetchUrl = "/" + urlFirstPart + "?format=json-pretty";
    console.log("fetcurl: " + fetchUrl);
    
    // product list refresh link for admin only
    setTimeout(function(){
        
         if( $("body").hasClass('sqs-edit-mode') ) {
    console.log("admin logged in");
    
    $("<a target='_blank' href='" + fetchUrl + "'>Refresh product list (for admin only) by opening this in new tab</a>").appendTo("body");
    
    } else{
    console.log("admin not logged in. Normal visitor seeing the page");
    }
      
     }, 1000);
    
    
    
    //fetch headers
    var myHeaders = new Headers();
    
    //fetch headers – shouold they be A) cached for speed or B) non-cached for admin to see chances in real time?
    if(document.location.host.includes(".squarespace.com")){
      console.log("url contains .squarespace.com so we're assuming it's admin logged in and won't cache the product pagination fetch");
      myHeaders.append('pragma', 'no-cache');
      myHeaders.append('cache-control', 'no-cache');
    
    } else{
      console.log("url  DOES NOT contain .squarespace.com. Assuming its' a visitor and will cache product pagination fetch to make everything quicker");
    }
    
    
    
    
    // loop summary items
    fetch(fetchUrl, { 
      method: 'GET',
      headers: myHeaders
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
      // use the json
    
    jsonListOfProducts = json.items;
    
    jsonListOfProducts.forEach(function (arrayItem) {
        var productTitle = arrayItem.title;
        productNameList.push(productTitle);
    });
    
    var currentProductIndex = productNameList.indexOf(productName);
    
    // get the previous product name
    var previousProductIndex = currentProductIndex - 1;
    
    if( typeof productNameList[previousProductIndex] !== "undefined" ){
    console.log("previous product exists");
    console.log("previous = " + productNameList[previousProductIndex]);
    var previousProductName = productNameList[previousProductIndex];
    var previousProductName = truncate(previousProductName, productNameMaxLength);
    console.log(jsonListOfProducts[previousProductIndex].fullUrl)
    var previousProductLink = jsonListOfProducts[previousProductIndex].fullUrl;
    console.log("prev link: " + previousProductLink);
    //console.log("previous: " + previousProductIndex);
    
    console.log("PREVIOUS PRODUCT IS: " + previousProductName);
    
    
    } else{
    //previous undefined
    console.log("previous undefined");
    }
    
    
    
    // get the next product name
    var nextProductIndex = currentProductIndex + 1;
    
    if( typeof productNameList[nextProductIndex] !== "undefined" ){
    console.log("next product exists");
    var nextProductName = productNameList[nextProductIndex];
    var nextProductName = truncate(nextProductName, productNameMaxLength);
    console.log(jsonListOfProducts[nextProductIndex].fullUrl)
    var nextProductLink = jsonListOfProducts[nextProductIndex].fullUrl;
    console.log("next link: " + nextProductLink);
    console.log("NEXT PRODUCT IS: " + nextProductName);
    
    
    } else{
    //previous undefined
    console.log("next product undefined");
    }
    
    
    
    
    /*
    $("<a href='" + previousProductLink + "'>Prev: "  + previousProductName + "</a> ").insertAfter(".ProductItem-additional");
    $("<a href='" + nextProductLink + "'>Next: "  + nextProductName + "</a> ").insertAfter(".ProductItem-additional");
    */
    
    if(previousProductLink && nextProductLink) {
      console.log("next and previous");
    
    
      if(showLargePaginationOnBottom == true){
        $('<section class="item-pagination item-pagination--prev-next" data-collection-type="portfolio-grid-overlay" data-controller="ItemPagination" data-controllers-bound="ItemPagination"> <a href="' + previousProductLink +'" class="item-pagination-link item-pagination-link--prev"> <div class="item-pagination-icon icon icon--stroke"> <svg class="caret-left-icon--small" viewBox="0 0 9 16"> <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2"></polyline> </svg> </div><span class="pagination-title-wrapper"> <div class="visually-hidden">Previous</div><div class="item-pagination-prev-next">Previous</div><h2 class="item-pagination-title">' + previousProductName + '</h2> </span> </a> <a href="' + nextProductLink +'" class="item-pagination-link item-pagination-link--next"> <div class="pagination-title-wrapper"> <div class="visually-hidden">Next</div><div class="item-pagination-prev-next">Next</div><h2 class="item-pagination-title">' + nextProductName + '</h2> </div><div class="item-pagination-icon icon icon--stroke"> <svg class="caret-right-icon--small" viewBox="0 0 9 16"> <polyline fill="none" stroke-miterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7"></polyline> </svg> </div></a> </section>').insertAfter("article.ProductItem");
    }
    
    if(showSimplePaginationOnTop == true){
      console.log("simple pagination for next and prev");
        $('<div class="ProductItem-next-prev-codeandtonic"> <a class="codetonic-product-pagination-link-simple codetonic-prev" href="' + previousProductLink + '">Prev</a> <span class="ProductItem-nav-pagination-separator ProductItem-nav-pagination-separator--hasPrev ProductItem-nav-pagination-separator--hasNext"></span> <a class="codetonic-product-pagination-link-simple codetonic-next" href="' + nextProductLink + '" >Next</a></div>').appendTo(".ProductItem-nav");
    }
    
      
    } else if (previousProductLink){
      console.log("prev only");
    
    
    if(showSimplePaginationOnTop == true){
     console.log("simple pagination for prev only");
        $('<div class="ProductItem-next-prev-codeandtonic"> <a class="codetonic-product-pagination-link-simple codetonic-prev" href="' + previousProductLink + '">Prev</a>').appendTo(".ProductItem-nav");
    
    }
    
      if(showLargePaginationOnBottom == true){
        $('<section class="item-pagination item-pagination--prev-next" data-collection-type="portfolio-grid-overlay" data-controller="ItemPagination" data-controllers-bound="ItemPagination"> <a href="' + previousProductLink +'" class="item-pagination-link item-pagination-link--prev"> <div class="item-pagination-icon icon icon--stroke"> <svg class="caret-left-icon--small" viewBox="0 0 9 16"> <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2"></polyline> </svg> </div><span class="pagination-title-wrapper"> <div class="visually-hidden">Previous</div><div class="item-pagination-prev-next">Previous</div><h2 class="item-pagination-title">' + previousProductName + '</h2> </span> </a> <a  style="display:none;" href="' + nextProductLink +'" class="item-pagination-link item-pagination-link--next"> <div class="pagination-title-wrapper"> <div class="visually-hidden">Next</div><div style="display:none;" class="item-pagination-prev-next">Next</div><h2 class="item-pagination-title">' + nextProductName + '</h2> </div><div class="item-pagination-icon icon icon--stroke"><svg class="caret-right-icon--small" viewBox="0 0 9 16"> <polyline fill="none" stroke-miterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7"></polyline> </svg> </div></a> </section>').insertAfter("article.ProductItem");
      }
    
     
    
    
    
    
    } else{
      console.log("next only");
    
      if(showLargePaginationOnBottom == true){
        $('<section class="item-pagination item-pagination--prev-next" data-collection-type="portfolio-grid-overlay" data-controller="ItemPagination" data-controllers-bound="ItemPagination"> <a style="display:none;" href="' + previousProductLink +'" class="item-pagination-link item-pagination-link--prev"> <div class="item-pagination-icon icon icon--stroke"> <svg class="caret-left-icon--small" viewBox="0 0 9 16"> <polyline fill="none" stroke-miterlimit="10" points="7.3,14.7 2.5,8 7.3,1.2"></polyline> </svg> </div><span class="pagination-title-wrapper"> <div class="visually-hidden">Previous</div><div class="item-pagination-prev-next">Previous</div><h2 class="item-pagination-title">' + previousProductName + '</h2> </span> </a> <a href="' + nextProductLink +'" class="item-pagination-link item-pagination-link--next"> <div class="pagination-title-wrapper"> <div class="visually-hidden">Next</div><div class="item-pagination-prev-next">Next</div><h2 class="item-pagination-title">' + nextProductName + '</h2> </div><div class="item-pagination-icon icon icon--stroke"> <svg class="caret-right-icon--small" viewBox="0 0 9 16"> <polyline fill="none" stroke-miterlimit="10" points="1.6,1.2 6.5,7.9 1.6,14.7"></polyline> </svg> </div></a> </section>').insertAfter("article.ProductItem");
      }
    
    
    
    
    
    if(showSimplePaginationOnTop == true){
      console.log("simple pagination for nextonly");
        $('<div class="ProductItem-next-prev-codeandtonic"><a class="codetonic-product-pagination-link-simple codetonic-next" href="' + nextProductLink + '" >Next</a></div>').appendTo(".ProductItem-nav");
    }
     
    }
    
    });
    
    
    } // end if products page
    
    
    //⬆️⬆️⬆️⬆️⬆️⬆️
    
    
    }); // ⬛️  domready END