console.log("Header production JS Started 2");
  
/*
*  PORFTOLIO GRID JS STUFF
*/


// IMAGE NAMES TO DESCRIPTIONS
/*
$( document ).ready(function() {    

    String.prototype.replaceAll = function(str1, str2, ignore) 
  {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
  } 


  $(".grid-item").each(function(i){
  var datasrcunmodified = $(this).find("img").attr("data-src");
    
  var  splittedSecondPart = datasrcunmodified.split("%7C%7C");
      
    var descriptionFromImageName = splittedSecondPart[1];
    
    var descriptionFromImageName = decodeURI(descriptionFromImageName);
    
    var replaced = descriptionFromImageName.replaceAll("+", " ");
    console.log(replaced);
    replaced = replaced.replace(".png", "");
    
    
    
    $( "<p class='description-hack'>" + replaced+ "</p>" ).insertAfter( $(this).find(".portfolio-title") );
    

  });

}); 
*/


    //write a function that loops each .grid-item, adds a div called "number" and adds the number of the item to it.
    function addNumber(){
      $(".grid-item").each(function(i){
        var number = i++;
        $(this).prepend("<div class='number'>" + i + "</div>");
      });
    }

    //call the function
    $( document ).ready(function() {
      addNumber();
    });



  //we want to find the first .grid-item with href containing "post-market". add a h2 element with text "Post-market" before it
  function addPreMarketAndPostMarketTitles() {
    $(".grid-item").first().before("<h2>Pre-Market</h2>");

    var $firstPostMarket = $('.grid-item[href*="post-market"]:first');
    $firstPostMarket.before('<h2 class="post-market-title">Post-market</h2>');
  }

  $( document ).ready(function() {
    addPreMarketAndPostMarketTitles();
  });









//Loop each .grid-item, adds a div called "number" and adds the number of the item to it.
  function addNumber(){
    $(".grid-item").each(function(i){
      var number = i++;
      $(this).prepend("<div class='number'>" + i + "</div>");
    });
  }

//call the function
$( document ).ready(function() {
  addNumber();
});


  








/*

BLOG STUFF

*/

// SINGLE BLOG POST: reposition tags and categories to be under author bio inside .custom-metabox
$( document ).ready(function() {    
  if( (window.location.pathname.includes("/blog/")) && $('article').length   ){
      console.log("blog page and article found. LEt's fix meta categories and tags");
  
      
      //move categories and tags after author
          $("<div class='custom-metabox'></div>").insertAfter(".blog-item-author-profile-wrapper");
          $("div.blog-meta-item.blog-meta-item--tags").prependTo(".custom-metabox");
          $("div.blog-meta-item.blog-meta-item--categories").prependTo(".custom-metabox");
          
          
          //create labeels for categories and tags
          $("<span class='custom-meta-label category-label'>Categories:</span>").prependTo("div.blog-meta-item.blog-meta-item--categories");
          $("<span class=' custom-meta-label custom-tag-label'>Tags:</span>").prependTo("div.blog-meta-item.blog-meta-item--tags");    
  
  }
}); 





// if Blog category page (filtering of blog post) is on, let's make this category tag in each blog post (inside grid) have a class so we can show that yeah, this blog post is indeed filtered correctly
$( document ).ready(function() {    
  if(window.location.pathname.includes("/blog/category/")){
console.log("category page - filtering enabled");
$("body").addClass("blog-category-filtered");

var currentCategory = window.location.pathname;
console.log()
$(".blog-categories-list a").each(function(i){
var categoryLabelLink = $(this).attr("href");
  console.log(categoryLabelLink);

  if(categoryLabelLink == currentCategory){
      console.log("ACTIVATE THIS ONE");
      $(this).addClass("blog-post-category-current-filter ");
  }
  
})
  
}
}); 




//This function will style blog page tag navigation. It'll compare the link destination url to current url. If they're the same, we'll make that link active
if (window.location.pathname.includes("/blog")) {

  $(document).ready(function() {

    var currentPagePath = window.location.pathname;

    $(".fe-block-yui_3_17_2_1_1669985837576_4451 a").each(function() {
      // console.log(currentPagePath);
      //console.log($(this).attr("href"));
      if (currentPagePath == $(this).attr("href")) {
        console.log(" ✅ Blog Tag Navigation — Current URL and the link matches. Lets style it to be active:" + $(this).text());
        $(this).addClass("active-filter");
      }
    })
  });
}




// UTM & REF --> Form. Let's hide any field that talks about UTM codes so when we duplicate pages, we don't need to get field ID's for CSS every time.
$( document ).ready(function() {    
  $( ".form-item.field.text:contains('UTM'), .form-item.field.text:contains('GTM')" ).addClass( "GTM-hidden-field-hide");    
}); 





/*

FORMATTING DATES

*/

//// BLOG PAGE GRID DATES – OROGINALLY MONTH/DAY/YEAR WITH HTML <time class="blog-date" pubdate="" data-animation-role="date">9/14/22</time>
$( document ).ready(function() {    
  
   $('time.blog-date').each(function(i, obj) {
  
       console.log(dateArray);
          var dateArray = $(this).text().split("/");
     
          console.log(dateArray);
          var month = dateArray[0];
       if( month.length <= 1){
           console.log("blog grid month is single digit. Let's add a 0");
           month = "0" + month;
       } else{
          console.log("blog grid month is double digit. So it's cool as is");    
       }
          var day = dateArray[1];
  
        if( day.length <= 1){
           console.log("blog grid day is single digit. Let's add a 0");
           day = "0" + day;
       } else{
          console.log("blog grid day is double digit. So it's cool as is");    
       }
          var year = dateArray[2];
          
          $(this).html("20" + year + "-" + month + "-" + day).addClass("dateFormatted-and-ready-to-show");
          
      });
  }); 







// !--DATE FORMAT: SINGLE POST-->
  $( document ).ready(function() {    
    //❗IF BLOG POST SINGLE  DATE FORMAT 
if(document.querySelector("meta[itemprop=datePublished]")){

  //if(document.querySelector("meta[itemprop=datePublished]").getAttribute("content") === "Description of the webpage")

    //console.log("BLOG SINGLE POST WITH DATE FOR IT");
    
    //blog post single - <meta itemprop="datePublished" content="2022-09-14T16:31:36+0300">
    console.log("yes");
     var blogSinglePublishDate = $('meta[itemprop="datePublished"]').attr("content")
    console.log(blogSinglePublishDate);
    var blogSingleDateArray = blogSinglePublishDate.split("T");
    console.log(blogSingleDateArray);
    var blogSingleDateSplitted = blogSingleDateArray[0].split("-");
console.log(blogSingleDateSplitted);

    var year = blogSingleDateSplitted[0];
    var month = blogSingleDateSplitted[1];
    var day = blogSingleDateSplitted[2]
    $(".blog-meta-item--date span").html(year + "-" + month + "-" + day).addClass("dateFormatted-and-ready-to-show");

}
else{
  console.log("No meta description for blog date");

}

}); 






// SUMMARY BLOCK DATE FORMAT
$( document ).ready(function() {    
  $('time.summary-metadata-item--date').each(function(i, obj) {
      var dateArray = $(this).attr("datetime").split("-");
      var year = dateArray[0];
      var month = dateArray[1];
      var day = dateArray[2];
      $(this).html(year + "-" + month + "-" + day).addClass("dateFormatted-and-ready-to-show");
      
  });
}); 








// home hero css animation
// add try function so if it doesn't  work, it won't break the code
try {
   //code that might throw an exception
   var howLongWeShowALineFor = 2500;
   var howCloseShouldTheAnimationsOverlap = 360;
   var letterspeed = 45;
   $( document ).ready(function() {    
       
   
   
   
   //select a heading that has a strike through (way for user to select a heading to be animated)
   var animatedH1 = $( "h1, h2, h3" ).has( "span[style*='line-through']" );
   
   
   //remove white-space:pre-wrap;
   animatedH1.css("white-space", "normal");
   
   //add a class so we can add CSS animations not for all headings, but only animated specific ones
   animatedH1.addClass("codetonic-textanimation-one");
   
   // get the page breaked lines as array
   var animationArray = animatedH1.children("span")[0].innerHTML.split("<br>");
   
   //add the first line and a container for animated lines
   animatedH1.html(animationArray[0] + '<br><span class="container"></span>');
   
   
   //loop through lines and add them as span.word -tags
   for (var i = 1; i < animationArray.length; i++) { 
       console.log(animationArray[i]); 
       $("span.container").append("<span class='word'>" + animationArray[i] + "</span>");
   }
   
   
   ///Animation JS
   //animoidaan
   var words = document.getElementsByClassName('word');
   var wordArray = [];
   var currentWord = 0;
   
   words[currentWord].style.opacity = 1;
   for (var i = 0; i < words.length; i++) {
     splitLetters(words[i]);
   }
   
   function changeWord() {
     var cw = wordArray[currentWord];
     var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
     for (var i = 0; i < cw.length; i++) {
       animateLetterOut(cw, i);
     }
     
     for (var i = 0; i < nw.length; i++) {
       nw[i].className = 'letter behind';
       nw[0].parentElement.style.opacity = 1;
       animateLetterIn(nw, i);
     }
     
     currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
   }
   
   function animateLetterOut(cw, i) {
     setTimeout(function() {
       cw[i].className = 'letter out';
     }, i*letterspeed);
   }
   
   function animateLetterIn(nw, i) {
     setTimeout(function() {
       nw[i].className = 'letter in';
     }, howCloseShouldTheAnimationsOverlap+(i*letterspeed));
   }
   
   function splitLetters(word) {
     var content = word.innerHTML;
     word.innerHTML = '';
     var letters = [];
     for (var i = 0; i < content.length; i++) {
       var letter = document.createElement('span');
       letter.className = 'letter';
       letter.innerHTML = content.charAt(i);
       word.appendChild(letter);
       letters.push(letter);
     }
     
     wordArray.push(letters);
   }
   
   changeWord();
   setInterval(changeWord, howLongWeShowALineFor);
     
     }); 




}
catch (e) {
   //code to handle the exception
}

console.log("Header production ran to the end");





console.log("Header production ran to the end");



