
console.log("Header production JS Started");
  
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


/*
  //⛔ REPLACED we want to find the first .grid-item with href containing "post-market". add a h2 element with text "Post-market" before it
  function addPreMarketAndPostMarketTitles() {
    $(".grid-item").first().before("<h2>Pre-Market</h2>");

    var $firstPostMarket = $('.grid-item[href*="post-market"]:first');
    $firstPostMarket.before('<h2 class="post-market-title">Post-market</h2>');
  }

  $( document ).ready(function() {
  //  addPreMarketAndPostMarketTitles();
  });
*/

  










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
document.addEventListener("DOMContentLoaded", function(event) {
    //fetchAndAddDescriptions();
    // check if we have this element: #gridThumbs.portfolio-grid-basic on the page. if we do, run the function
    if (document.querySelector("#gridThumbs.portfolio-grid-basic")) {
        console.log("we are on a portfolio page");
        fetchAndAddDescriptions();
    }
});
//end of document ready



// PRE-MARKET AND POST MARKET TITLES in the timeline
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
  addPreMarketAndPostMarketTitles(); // FIRST work the pre-market and post-market titles in the timeline
  addNumber(); // THEN add the number to each grid item. otherwise the number will be added to the pre-market and post-market title h2s
  //prepend <div class='tube-item-vertical-line'></div> to the first .grid-item
$( ".grid-item" ).first().prepend("<div class='tube-item-vertical-line'></div>");
});



  


/// TIMELINE VERTICAL LINE THAT ANIMATES LIKE STORETASKER

window.onscroll = function () {
  // get the distance between the first .tube-item-vertical-line and the top of the window and log it
  var distance = document.querySelector('.tube-item-vertical-line').getBoundingClientRect().top;
  console.log(distance);
  //if the distance is less than 50px. for each scrolled pixel add 1px more to the CSS height of the .tube-item-vertical-line
  // console log the distance of window top VS top of page

  var pageWindowOffset = window.pageYOffset
  console.log('window top: ' + pageWindowOffset);

  let verticalLineAnimationOffset = 400;

  if (distance < verticalLineAnimationOffset) {
      console.log("ANIMATE");
      // edit height of .tube-item-vertical-line so when distance is 50, the height is 0. when distance is 40, the height is 10. when distance is 30, the height is 20. when distance is 20, the height is 30. when distance is 10, the height is 40. when distance is 0, the height is 50. but it'll keep growing as you scroll down
      document.querySelector('.tube-item-vertical-line').style.height = (verticalLineAnimationOffset - distance) + 'px';
  }


};


