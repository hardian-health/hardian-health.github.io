console.log("finally a real setup");

  
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


$( document ).ready(function() {  
  
  /*
      $(".portfolio-title").each(function(i){
      var number = i++;
    $(this).html(i + ". " + $(this).html() );



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
    addNumber();




    
    /*
    we have this html
    <div id="gridThumbs" class="portfolio-grid-basic grid-wrapper collection-content-wrapper" data-controller="GridImages" data-animation-role="section" data-controllers-bound="GridImages">
  
    <h2>Pre-Market</h2><a class="grid-item" href="/services/clinical/inteded-use-pre-market"><div class="number">1</div>
      <div class="grid-image">
        <div class="grid-image-inner-wrapper">
          
            <img data-src="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799524357-HYLV7MQGKTCIJDVOF6FK/%7C%7CDescription+for+general+service+page+pre-market+copy.png" data-image="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799524357-HYLV7MQGKTCIJDVOF6FK/%7C%7CDescription+for+general+service+page+pre-market+copy.png" data-image-dimensions="1x1" data-image-focal-point="0.5,0.5" alt="Indeded Use" data-load="false">
          
        </div>
      </div>
      <div class="portfolio-text">
        <h3 class="portfolio-title">Indeded Use</h3><p class="description-hack">Description for general service page pre-market copy</p>
      </div>
    </a>
  
    <a class="grid-item" href="/services/clinical/risk-classification-pre-market"><div class="number">2</div>
      <div class="grid-image">
        <div class="grid-image-inner-wrapper">
          
            <img data-src="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799538611-C5XZ2S9JIBMIDPR8NYPZ/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799538611-C5XZ2S9JIBMIDPR8NYPZ/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image-dimensions="1x1" data-image-focal-point="0.5,0.5" alt="Risk Classification" data-load="false">
          
        </div>
      </div>
      <div class="portfolio-text">
        <h3 class="portfolio-title">Risk Classification</h3><p class="description-hack">Description for clinical intended use pre-market</p>
      </div>
    </a>
  
    <a class="grid-item" href="/services/clinical/pico-pre-market"><div class="number">3</div>
      <div class="grid-image">
        <div class="grid-image-inner-wrapper">
          
            <img data-src="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799553267-QO90TMUTHERISZ9YQ5XB/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799553267-QO90TMUTHERISZ9YQ5XB/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image-dimensions="1x1" data-image-focal-point="0.5,0.5" alt="PICO" data-load="false">
          
        </div>
      </div>
      <div class="portfolio-text">
        <h3 class="portfolio-title">PICO</h3><p class="description-hack">Description for clinical intended use pre-market</p>
      </div>
    </a>
  
    <a class="grid-item" href="/services/clinical/pathwayvalidation-pre-market"><div class="number">4</div>
      <div class="grid-image">
        <div class="grid-image-inner-wrapper">
          
            <img data-src="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799571295-KJUAILB85RWADK2V5H7S/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799571295-KJUAILB85RWADK2V5H7S/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image-dimensions="1x1" data-image-focal-point="0.5,0.5" alt="Pathway validation" data-load="false">
          
        </div>
      </div>
      <div class="portfolio-text">
        <h3 class="portfolio-title">Pathway validation</h3><p class="description-hack">Description for clinical intended use pre-market</p>
      </div>
    </a>
  
    <a class="grid-item" href="/services/clinical/ukrp-post-market"><div class="number">5</div>
      <div class="grid-image">
        <div class="grid-image-inner-wrapper">
          
            <img data-src="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799596864-PC90DPT8HEQKYHRNG1S9/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799596864-PC90DPT8HEQKYHRNG1S9/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image-dimensions="1x1" data-image-focal-point="0.5,0.5" alt="UKRP" data-load="false">
          
        </div>
      </div>
      <div class="portfolio-text">
        <h3 class="portfolio-title">UKRP</h3><p class="description-hack">Description for clinical intended use pre-market</p>
      </div>
    </a>
  
    <a class="grid-item" href="/services/clinical/prrc-post-market"><div class="number">6</div>
      <div class="grid-image">
        <div class="grid-image-inner-wrapper">
          
            <img data-src="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799596864-PC90DPT8HEQKYHRNG1S9/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799596864-PC90DPT8HEQKYHRNG1S9/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image-dimensions="1x1" data-image-focal-point="0.5,0.5" alt="PRRC" data-load="false">
          
        </div>
      </div>
      <div class="portfolio-text">
        <h3 class="portfolio-title">PRRC</h3><p class="description-hack">Description for clinical intended use pre-market</p>
      </div>
    </a>
  
    <a class="grid-item" href="/services/clinical/ce-mark-post-market"><div class="number">7</div>
      <div class="grid-image">
        <div class="grid-image-inner-wrapper">
          
            <img data-src="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799619073-9RI8DMN5PE4PM52MA20G/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image="https://images.squarespace-cdn.com/content/v1/62f5262a0b58c94a255a69ba/1668799619073-9RI8DMN5PE4PM52MA20G/%7C%7CDescription+for+clinical+intended+use+pre-market.png" data-image-dimensions="1x1" data-image-focal-point="0.5,0.5" alt="Getting your CE Mark" data-load="false">
          
        </div>
      </div>
      <div class="portfolio-text">
        <h3 class="portfolio-title">Getting your CE Mark</h3><p class="description-hack">Description for clinical intended use pre-market</p>
      </div>
    </a>
  
</div>

we want to find the first .grid-item with href containing "post-market". add a class "firts-post-market" to it.

    */ 





  //we want to find the first .grid-item with href containing "post-market". add a h2 element with text "Post-market" before it
  function addPreMarketAndPostMarketTitles() {
    $(".grid-item").first().before("<h2>Pre-Market</h2>");

    var $firstPostMarket = $('.grid-item[href*="post-market"]:first');
    $firstPostMarket.before('<h2 class="post-market-title">Post-market</h2>');
  }
  addPreMarketAndPostMarketTitles();



    
    



}); //domready end