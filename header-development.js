// DEVELOPMENT STUFF. ALWAYS KEEP THIS






/*
TUBE MAP DESCRIPTIONS

*/


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


// 3. FUNCTION TO ADD DESCRIPTIONS TO THE TUBE MAP LINKS
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
    //addDescriptions();
});
addDescriptions();




