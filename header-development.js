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
        "description": "Description for Indeded Use lorem ipsum stuff yeah cool nice great text more text."
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
    var fetchUrl = window.location.href + "?format=json-pretty";

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
                            description.innerText = item.seoData.seoDescription;
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


// check if we are on a portfolio page. if we do, run the function to add SEO descriptions
if (document.querySelector("#gridThumbs.portfolio-grid-basic")) {
    console.log("we are on a portfolio page");
    fetchAndAddDescriptions();
}


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


// 🟢🟢🟢🟢🟢


