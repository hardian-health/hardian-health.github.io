
  
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
    $(".portfolio-title").each(function(i){
    var number = i++;
$(this).html(i + ". " + $(this).html() );
    
});
});



// write  a function that will loop each .grid-item, add an element div.number and add number of nth item as html
