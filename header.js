
console.log("Header production JS Started");


/**
 * 
 * ALWAYS USE JQUERY DOMREADY INSTEAD OF VANILLA JS DOMContentLoaded
 * OTHERWISE DYNAMIC JS SCRIPT LOADING WILL NOT WORK
 * 
 */

  
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


//PRE-MARKET & POST-MARKET TITLES: check the first with href contains "pre-market" etc and add the title before it. 
// This method A) doesn't need robots.txt to be added, B) doesn't mess up pagination and C) doesn't mess the numbers of pages (4/12, if there's pre-market, post-market it'd be counted as 4/14)
var preAndPostMarketTitleBeforeFirstOfThose = function() {
  $(".grid-item").first().before("<h2>Pre-Market</h2>");
  var $firstPostMarket = $('.grid-item[href*="post-market"]:first');
  $firstPostMarket.before('<h2 class="post-market-title">Post-market</h2>');
}


  $( document ).ready(function() {
    // fire preAndPostMarketTitleBeforeFirstOfThose()
    preAndPostMarketTitleBeforeFirstOfThose();
    
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
      $(this).addClass("blog-post-category-current-filter active-filter");
  }
  
})
  
}
}); 






// BLOG CATEGORY NAVIGATION - ADD SELECTED CLASS TO CURRENTLY SELECTED CATEGORY
function styleBlogTagNavigation() {

  // ADD BLOG TAG NAVIGATION SECTION ID HERE)
  var blogCategoryNavigationBlockLink = 'section[data-section-id="63936a7c3d674d7079783a93"] a';

  if (window.location.pathname.includes("/blog")) {
      $(document).ready(function() {

        var currentPagePath = window.location.pathname;
  
        $(blogCategoryNavigationBlockLink).each(function() {
          if (currentPagePath == $(this).attr("href")) {
            console.log(" ✅ Blog Tag Navigation — Current URL and the link matches. Lets style it to be active:" + $(this).text());
            $(this).addClass("active-filter");
          }
        })
      });
  }
}

styleBlogTagNavigation();










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

function animateStrikedThroughHeadingsCodeAndTonicStyle(){
  
}

   //code that might throw an exception
   var howLongWeShowALineFor = 2500;
   var howCloseShouldTheAnimationsOverlap = 360;
   var letterspeed = 45;
   $( document ).ready(function() {    
       
   
   
   
   //select a heading that has a strike through (way for user to select a heading to be animated)
   var animatedH1 = $( "h1, h2, h3" ).has( "span[style*='line-through']" ); // let's check if we have a heading with a strike through first
   if(animatedH1.length){
        console.log("✅ We have a heading with a strike through. Let's animate it");
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

   } else{
      console.log("no heading with a strike through - no animation for you");

   }

   
   
   
     
     }); 




}
catch (e) {
   //code to handle the exception
}

console.log("Header production ran to the end");





console.log("Header production ran to the end");





// DEVELOPMENT STUFF. ALWAYS KEEP THIS





/*******
* ****************
* TUBE MAP DESCRIPTIONS
* ****************
*******/


// 1. FUNCTION TO LOOP tube map links and CREATE an array of descriptions in the console
const links = []
// get the links from the html and add them to the array
const htmlLinks = document.querySelectorAll('.grid-item');
htmlLinks.forEach(link => {
  links.push({
    //href: link.href,
//instead of full href we just want the path. Do it by getting the current window location domain. remove that from the href and then remove the first slash
    tubeStop: link.href.replace(window.location.origin, '').replace(/^\//, ''),
    description: link.querySelector('.portfolio-title').innerText
  })
});
//log links
console.log(links);



//  2 example result
const descriptions = [
    {
        "tubeStop": "services/clinical/inteded-use-pre-market",
        "description": "Description for Indeded Use lorem ipsum stuff yeah cool nice gr eat text more text."
    },
    {
        "tubeStop": "services/clinical/risk-classification-pre-market",
        "description": "Description for Risk Classification lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/pico-pre-market",
        "description": "Description for PICO lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/pathwayvalidation-pre-market",
        "description": "Description for Pathway validation lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/medical-device-file-design-pre-market",
        "description": "Description for Medical Device File Design lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/evidence-review-pre-market",
        "description": "Description for Evidence review lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/clinical-evaluation-plan-pre-market",
        "description": "Description for Clinical Evaluation Plan lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/literature-review-pre-market",
        "description": "Description for Literature Review lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/post-market",
        "description": "Description for POST MARKET lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/prrc-post-market",
        "description": "Description for PRRC lorem ipsum stuff yeah cool nice great text more text."
    },
    {
        "tubeStop": "services/clinical/ce-mark-post-market",
        "description": "Description for Getting your CE Mark lorem ipsum stuff yeah cool nice great text more text."
    }
]


// 3. FUNCTION TO ADD DESCRIPTIONS from the array TO THE TUBE MAP LINKS
function addDescriptions() {
    //get all the links
    var links = document.querySelectorAll(".grid-item");
    //loop through the links
    for (var i = 0; i < links.length; i++) {
        //get the href of the link
        var href = links[i].getAttribute("href");
        //loop through the descriptions array
        for (var j = 0; j < descriptions.length; j++) {
            //if the href of the link includes the tubeStop of the description
            if (href.includes(descriptions[j].tubeStop)) {
                console.log("YES");

                //create a new paragraph element
                var p = document.createElement("p");
                //add the description text to the new paragraph element
                p.innerHTML = descriptions[j].description;
                //add the class "description" to the new paragraph element
                p.classList.add("description");
                //get the h3.portfolio-title element
                var title = links[i].querySelector(".portfolio-title");
                //add the new paragraph element after the h3.portfolio-title element
                title.parentNode.insertBefore(p, title.nextSibling);
            }
        }
    }
}

//add descriptions to the tube map links on document ready
document.addEventListener("DOMContentLoaded", function(event) {
    //addDescriptions(); // we have a better way to do this now
});







//fetch cache stuff - "headers"
var myHeaders = new Headers();

//fetch headers – shouold they be A) cached for speed or B) non-cached for admin to see chances in real time?
   // Caching the portfolio SEO description for visitors
// The portfolio SEO description is not cached for admin users, so we'll only cache it for visitors

// If the url contains .squarespace.com, we're assuming it's admin logged in and won't cache the portfolio SEO description
// If the url does not contain .squarespace.com, we're assuming it's a visitor and will cache the portfolio SEO description
if(document.location.host.includes(".squarespace.com")){
    console.log("url contains .squarespace.com so we're assuming it's admin logged in and won't cache the portfolio SEO description");
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');

} else{
    console.log("url  DOES NOT contain .squarespace.com. Assuming its' a visitor and will cache portfolio SEO description to make everything quicker");
}














// 4 🟢🟢🟢🟢🟢🟢 fetch SEO descriptions for each portfolio item, and add them to the tube map links as descriptions in html
//
// loop summary items
// 4
// write a function that will fetch JSON from url and return that JSON as variable object.
// loop summary items
function fetchAndAddDescriptions(url){

    //create a new fetcUrl by combining current window.location full url with "?format=json-pretty"
    //var fetchUrl = window.location.href + "?format=json-pretty";
    //write new fetchUrl where we combine origin and pathname but skip the rest of the url
    var fetchUrl = window.location.origin + window.location.pathname + "?format=json-pretty";

    



    fetch(fetchUrl, { 
        method: 'GET',
        headers: myHeaders
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
        // use the json
    portfolioItems = json.items;

        // This function is called after the portfolio items are loaded
        // We loop through each JSONitem and check if it has a SEO description
        // If the SQSP JSON item has a SEO description, we add it to the corresponding a.grid-item
        function addSeoDescriptionToPortfolioItems() {
            // Loop through all portfolio items in the JSON
            portfolioItems.forEach((item) => {
                // Check if the porftolio item has a SEO description
                if (item.seoData && item.seoData.seoDescription) {
                    // Get all grid items (portfolio links in the tube map)
                    const gridItems = document.querySelectorAll(`a.grid-item`);
                    // Loop through all grid items
                    gridItems.forEach((gridItem) => {
                        // Get the href attribute of the grid item
                        const href = gridItem.getAttribute('href');
                        // Check if the link destiontion is the same as the JSON full URL of the portfolio item
                        if (href === item.fullUrl) {
                            // Create a paragraph element
                            const description = document.createElement('p');
                            // Add a class to the paragraph element
                            description.classList.add('seo-description');
                            // Set the inner text of the paragraph element
                            //description.innerText = item.seoData.seoDescription;
                            // edit the description text to also have this html: <span class="pofo-readmore">Read More →</span>
                            description.innerHTML = item.seoData.seoDescription + '<span class="pofo-readmore">Read More  <span class="arrow">→</span></span>';
                            // Get the portfolio text element
                            const portfolioText = gridItem.querySelector('.portfolio-text');
                            // Append the description to the portfolio text (so it appears below the h3 title)
                            portfolioText.appendChild(description);
                        }
                    });
                } else {
                  // Get all grid items (portfolio links in the tube map)
                  const gridItems = document.querySelectorAll(`a.grid-item`);
                  // Loop through all grid items
                  gridItems.forEach((gridItem) => {
                      // Get the href attribute of the grid item
                      const href = gridItem.getAttribute('href');
                      // Check if the link destiontion is the same as the JSON full URL of the portfolio item
                      if (href === item.fullUrl) {
                          // Create a paragraph element
                          const description = document.createElement('p');
                          // Add a class to the paragraph element
                          description.classList.add('seo-description');
                          // Set the inner text of the paragraph element
                          //description.innerText = item.seoData.seoDescription;
                          // edit the description text to also have this html: <span class="pofo-readmore">Read More →</span>
                          description.innerHTML = '<span class="pofo-readmore">Read More  <span class="arrow">→</span></span>';
                          // Get the portfolio text element
                          const portfolioText = gridItem.querySelector('.portfolio-text');
                          // Append the description to the portfolio text (so it appears below the h3 title)
                          portfolioText.appendChild(description);
                      }
                  });
                  
                
                }
            });
        }
        // Call the function to add the SEO descriptions to the portfolio items
        addSeoDescriptionToPortfolioItems();

    
    
    });
} // end of fetchAndAddDescriptions() function




//run fetchAndAddDescriptions() on document ready
//document.addEventListener("DOMContentLoaded", function(event) { //replace with jquery dom ready
$(document).ready(function() {

    //fetchAndAddDescriptions();
    // check if we have this element: #gridThumbs.portfolio-grid-basic on the page. if we do, run the function
    if (document.querySelector("#gridThumbs.portfolio-grid-basic")) {
        console.log("we are on a portfolio page");
        fetchAndAddDescriptions();
    }
});
//end of document ready



// PRE-MARKET AND POST MARKET TITLES in the timeline ! FOR PREMARKET PORTFOLIO PAGES to headings
function addPreMarketAndPostMarketTitles() {
  $(".grid-item").each(function(i) {
    var $this = $(this);
    var title = $this.find("h3.portfolio-title").text();
    if (title.toLowerCase().includes("pre-market")) {
     // $this.before(title);  //instead of this title make it be h2 
      $this.before("<h2 class='timeline-title pre-or-post pre'>" + title + "</h2>"); //this is the old title (hardcoded
    
      $this.remove();
    }
    if (title.toLowerCase().includes("post-market")) {
      $this.before("<h2 class='timeline-title pre-or-post post'>" + title + "</h2>"); //this is the old title (hardcoded
      $this.remove();
    }
  });
}



//Loop each .grid-item, adds a div called "number" and adds the number of the item to it.
  function addNumber(){
    $(".grid-item").each(function(i){
      var number = i++;
      $(this).prepend("<div class='number'>" + i + "</div>");
      //$(this).prepend("<div class='tube-item-vertical-line'></div>");
    });
  }

//call the function
$( document ).ready(function() {
  //addPreMarketAndPostMarketTitles(); // FIRST work the pre-market and post-market titles in the timeline
  addNumber(); // THEN add the number to each grid item. otherwise the number will be added to the pre-market and post-market title h2s
  //prepend <div class='tube-item-vertical-line'></div> to the first .grid-item
$( ".grid-item" ).first().prepend("<div class='tube-item-vertical-line'></div>");
});

















// TUBEMAPS VERTICAL LINE ANIMATION
function updateTimelineVerticalLine() {
  // get the distance between the first .tube-item-vertical-line and the top of the window and log it
  var distance = document.querySelector('.tube-item-vertical-line').getBoundingClientRect().top;
  console.log(distance);
  //if the distance is less than 50px. for each scrolled pixel add 1px more to the CSS height of the .tube-item-vertical-line
  // console log the distance of window top VS top of page

  var pageWindowOffset = window.pageYOffset
  console.log('window top: ' + pageWindowOffset);


  // calculate the height of viewport and divide by 2. create a variable for it
  let viewportHeight = window.innerHeight;
  let viewportHeightDividedByTwo = viewportHeight / 2;


  // EDIT THIS to change the distance at which the animation starts
  //let verticalLineAnimationOffset = 400;
  let verticalLineAnimationOffset = viewportHeightDividedByTwo; // animation the middle of the page - even if resized
  // get the height of the last .grid-item and log it
  //var lastGridItemHeight = document.querySelector('.grid-item').getBoundingClientRect().height;
  //console.log('last grid item height: ' + lastGridItemHeight);

  // get the difference between last grid item bottom and the top of the window and log it
  //var lastGridItemBottom = document.querySelector('.grid-item').getBoundingClientRect().bottom; // this gets the first grid item. let's get the last one
  // Q: if there are multiple elements how to use document query selector all and get the last one?
  // A: use document.querySelectorAll and then get the last one with [array.length - 1]
  // get the last .grid-item using that method
  var lastGridItem = document.querySelectorAll('.grid-item')[document.querySelectorAll('.grid-item').length - 1];
  // calculate the height difference betweet top of ".tube-item-vertical-line" and the bottom of last .grid-item
  var lastGridItemBottom = lastGridItem.getBoundingClientRect().bottom;

  console.log('last grid item bottom: ' + lastGridItemBottom);




  if ( (distance < verticalLineAnimationOffset ) && (lastGridItemBottom > verticalLineAnimationOffset) ) {
      console.log("ANIMATE");
      // edit height of .tube-item-vertical-line so when distance is 50, the height is 0. when distance is 40, the height is 10. when distance is 30, the height is 20. when distance is 20, the height is 30. when distance is 10, the height is 40. when distance is 0, the height is 50. but it'll keep growing as you scroll down

      document.querySelector('.tube-item-vertical-line').style.height = (verticalLineAnimationOffset - distance) + 'px';
  } else{
    console.log("Stop animation. We are over or under the animation offsets. Let's not animate if we're too high on page or if we're past the last grid item bottom");
  }


      /*
          // ⛔ let's use a more simple function below a function that checks if the .tube-item-vertical-line overlaps with a .number. if it does, add a class to the .number called "number-overlap"
            function checkOverlap() {
              var verticalLine = document.querySelector('.tube-item-vertical-line');
              var numbers = document.querySelectorAll('.number');
              numbers.forEach(function(number) {
                var numberRect = number.getBoundingClientRect();
                var verticalLineRect = verticalLine.getBoundingClientRect();
                if (numberRect.top < verticalLineRect.bottom && numberRect.bottom > verticalLineRect.top) {
                  number.classList.add('number-overlap');
                } else {
                  number.classList.remove('number-overlap');
                }
              });
            }

            //checkOverlap();
    */


  // a function that checks if a .number -element is less than verticalLineAnimationOffset from the top of the window. if it is, the vertical line has "touched" it. add a class to the .number called "number-overlap". if it's not, remove the class
  function checkNumberOverlap() {
    var numbers = document.querySelectorAll('.number');
    numbers.forEach(function(number) {
      var numberRect = number.getBoundingClientRect();
      if (numberRect.top < verticalLineAnimationOffset) {
        number.classList.add('number-overlap');
      } else {
        number.classList.remove('number-overlap');
      }
    });
  }

  checkNumberOverlap();
}


// on jquery domready, if page contains #gridThumbs, update the timeline vertical line
$( document ).ready(function() {
  if ($('#gridThumbs').length) {
    updateTimelineVerticalLine();
    // tubemaps - update vertical line if window is scrolled
    window.onscroll = function () {
      updateTimelineVerticalLine();
    }

    // tubemaps - run updateTimelineVerticalLine(); if window is resized. to calculate the new viewport height and keep the animated part in the middle of the page
    window.onresize = function () {
      updateTimelineVerticalLine();
    }
  }
});



























/**
 * 5 KEY VERTICAL SPECIFIC EDITS. MAINLY COLORS FOR TOP BAR AND BOTTOM BAR IN IOS SAFARI 
 * AND CHROME OVERSCROLL
 * AND  .clinical -type BODY CLASS SO WE CAN STYLE TUBE MAP COLORS 
 */


// function to get CSS variable values from CSS
function getCSSVariableValue(variableName) {
  return getComputedStyle(document.documentElement).getPropertyValue(variableName);
}


//Function to set the body background color (bottom bar in iOS and chrome overscroll) and the top-bar theme color for iOS Safari
function setBodyBackgroundAndThemeColor(color) {
  $('body').css('background', color);
  $('head').append('<meta name="theme-color" content="' + color + '">');
}
// e.g. setBodyBackgroundAndThemeColor(getCSSVariableValue('--health-economics-brightpink'));


/*
//Check if we're on a specific 5 key vertical service page OR service category page. add a class to the body and style iOS Safari top bar and bottom bar etc
function keyVerticalSpecificEdits() {
var path = window.location.pathname;
var body = document.querySelector('body');


switch (path) {
  case '/blog/category/Health+Economics':
  case '/health-economics':
    body.classList.add('health-economics');
    console.log('health-economics');
    //setBodyBackgroundAndThemeColor(getCSSVariableValue('--health-economics-brightpink')); // disabled until client confirms
    break;
  case '/blog/category/Intellectual+Property':
  case '/intellectual-property':
    body.classList.add('intellectual-property');
    console.log('intellectual-property');
    //setBodyBackgroundAndThemeColor(getCSSVariableValue('--ip-darkblue')); // disabled until client confirms
    break;
  case '/blog/category/Regulatory':
  case '/regulatory':
    body.classList.add('regulatory');
    console.log('regulatory');
    //setBodyBackgroundAndThemeColor(getCSSVariableValue('--regulatory-mintgreen')); // disabled until client confirms
    break;
  case '/blog/category/Strategy':
  case '/strategy':
  case 'strategy-pofo/':
    body.classList.add('strategy');
    console.log("✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅");
    //setBodyBackgroundAndThemeColor(getCSSVariableValue('--strategy-lightblue')); // disabled until client confirms
    console.log('strategy');
    break;
  case '/blog/category/Clinical':
  case '/clinical':
    body.classList.add('clinical');
      //setBodyBackgroundAndThemeColor(getCSSVariableValue('--clinical-purple')); // disabled until client confirms
    console.log('clinical');
    break;
  default:
    break;
}
}

// run keyVerticalSpecificEdits() as a try catch. if it fails, it will not break the rest of the code
try {
  keyVerticalSpecificEdits(); // disabled until client confirms
  } catch (error) {
  console.log(error);
}

*/

//make a function that will check if window location path contains a substring. if it does, add a class to the body. it takes 3 arguments: the substring to check for, the class to add to the body and a css variable to set as the body background color
function checkIfPathContainsSubstringAndAddClassToBody(substring, className, cssVariable) {
  var path = window.location.pathname;
  var body = document.querySelector('body');
  if (path.includes(substring)) {
    body.classList.add(className);
    setBodyBackgroundAndThemeColor(getCSSVariableValue(cssVariable));
  }
}

// TODO check final urls - run it for each vertical

checkIfPathContainsSubstringAndAddClassToBody('health-economics', 'health-economics', '--health-economics-brightpink');
checkIfPathContainsSubstringAndAddClassToBody('/strategy', 'strategy', '--strategy-lightblue');
checkIfPathContainsSubstringAndAddClassToBody('/intellectual-property', 'intellectual-property', '--ip-darkblue');
checkIfPathContainsSubstringAndAddClassToBody('/regulatory', 'regulatory', '--regulatory-mintgreen');
checkIfPathContainsSubstringAndAddClassToBody('/clinical', 'clinical', '--clinical-purple');







// for porftfolio sub-pages, make a function that will compare the title  of the page with the JSON title and  if we are on the first, second, third, etc. page of the portfolio. get that number
function getPortfolioPageNumber() {

  // get the title of the page from h1
//var pageTitle = document.querySelector("h1").innerText;
// use page title instead of h1
var pageTitle = document.title;

console.log(pageTitle);

var fetchUrl = window.location.origin + window.location.pathname.split("/").slice(0, -1).join("/") + "?format=json-pretty";
console.log("fetchUrl: " + fetchUrl);




fetch(fetchUrl, { 
   method: 'GET',
   headers: myHeaders
})
.then(function(response) { return response.json(); })
.then(function(json) {
   // use the json
   //
   console.log("json: " + json);

   // make an iterator number to keep track of the number of portfolio items we have iterated over
   var i = 0;
   // make a variable for "Pre-market" or "Post-market" 
   var preOrPost = "Pre-market";
   var numberOfThisPortfolioItem = 0;
   var totalNumberOfPortfolioItems = 0;

   // loop through the json and find the title that matches the page title
   json.items.forEach((item) => {
      //add 1 to the iterator number and log it
     // if item.title does not containt "pre-market" or "post-market" (any case, lower uppet etc), then add 1 to the iterator number
     if (!item.title.toLowerCase().includes("pre-market") && !item.title.toLowerCase().includes("post-market")) {
         i++;
     }
     // if we have iterated over "post-market" , then update preOrPost to "Post-market"
     if (item.title.toLowerCase().includes("post-market")) {
         preOrPost = "Post-market";
     }
     
   // console log preOrPost and i
     console.log("preOrPost: " + preOrPost + " i: " + i);
     totalNumberOfPortfolioItems = i;
     console.log("totalNumberOfPortfolioItems: " + totalNumberOfPortfolioItems);


     // check if the title of the page matches the title of the json item
     //if (item.title == pageTitle) {
       // compare lowercase versions of item.title and pageTitle
     //if (item.title.toLowerCase() == pageTitle.toLowerCase()) {
     //bacause we switched to page title instead of h1 we need to see if the page title contains the json title. it might  have other text in it
     if (pageTitle.toLowerCase().includes(item.title.toLowerCase())) {
         
         console.log("🎉🎉🎉🎉FOUND IT: " + item.title + " VS " + pageTitle );
         numberOfThisPortfolioItem = i;
         // get the page number of the portfolio item
          // with jQuery find a p tag with class "sqsrte-small" which contains "Pre-market"
        var preMarket = $("p.sqsrte-small:contains('Step')");
        preMarket.html(preOrPost  + " step " + numberOfThisPortfolioItem + "/" + totalNumberOfPortfolioItems );
        //  text for .item-pagination-title inside .item-pagination-link--next should be it's original text, but with the number of the next item prepended to it

// CHECK if .item-pagination-link contains "Pre-Market" (in any case, lowercase, uppercase. it should check for "pre-market" "Pre-market", "PRE-MARKET" etc) 
if($(".item-pagination-link--prev").text().toLowerCase().includes("pre-market")) {
  //remove it from dom
  $(".item-pagination-link--prev").remove();
}

//if 







     // $(".item-pagination-link--next .item-pagination-title").text( (numberOfThisPortfolioItem + 1) + ". " + $(".item-pagination-link--next .item-pagination-title").text());
      //same for item-pagination-link--prev but with the number of the previous item
     // $(".item-pagination-link--prev .item-pagination-title").text( (numberOfThisPortfolioItem - 1) + ". " + $(".item-pagination-link--prev .item-pagination-title").text());

      // if 
      
        
        // add this to .service-subpage-breadcrumbs: <p style="text-align: left;white-space:pre-wrap;" class="sqsrte-small"><a href="/clinical">Clinical</a>  &gt; <a href="">Intended use</a></p>
        // check if we are on clinical, regulatory, strategy, health economics, or intellectual property by checking the url path.
        var path = window.location.pathname;


        /*var pathArray = path.split('/');
        var vertical = pathArray[1]; */
        // we don't know if the path is /clinical or /example/clinical/ or example/clinical/blah/blah/blah. so for switch below, check if the path contains /clinical
        
        //var verticalTitle = "";
        if (path.includes("clinical")) {
          verticalTitle = "Clinical";
          vertical = "/services/clinical";
        } else if (path.includes("regulatory")) {
          verticalTitle = "Regulatory";
          vertical = "/services/regulatory";
        } else if (path.includes("strategy")) {
          verticalTitle = "Strategy";
          vertical = "/services/strategy";
        } else if (path.includes("health-economics")) {
          verticalTitle = "Health Economics";
          vertical = "/services/health-economics";
        } else if (path.includes("intellectual-property")) {
          verticalTitle = "Intellectual Property";
          vertical = "/services/intellectual-property";
        } else {
          verticalTitle = "Clinical";
          vertical = "/services/clinical";
        }


        // add the vertical title to the breadcrumbs
        $(".service-subpage-breadcrumbs").append('<p style="text-align: left;white-space:pre-wrap;" class="sqsrte-small">Services &gt; <a href="' + vertical + '">' + verticalTitle + '</a>  &gt; <a href="">' + item.title + '</a></p>');

 
     } else{
         console.log( item.title + " VS " + pageTitle + " — not a match.");
     }
   

   

 });



 /* we want to create this :
 <p style="text-align: left;white-space:pre-wrap;" class="sqsrte-small">Services &gt; <a href="/clinical">Clinical</a> &gt; <a href="#">Pre-market</a> &gt; <a href="#">Step 1/10 – Intended use</a></p>
 
 */

});
} // end of getPortfolioPageNumber() function


// run getPortfolioPageNumber() 
getPortfolioPageNumber();




// TODO fetch the title and description of the page 


function subServicePageTitleAndDescription() {


  var fetchUrl = window.location.href + "?format=json-pretty";
  fetch(fetchUrl, { 
    method: 'GET',
    headers: myHeaders
 })
 .then(function(response) { return response.json(); })
 .then(function(json) {
    // use the json
    //
    console.log("json: " + json);
    console.log("👍👍👍👍👍👍YESSS")
 
 
 });
}

subServicePageTitleAndDescription();



console.log("👍👍👍👍👍👍YESSS")





