// DEVELOPMENT STUFF. ALWAYS KEEP THIS


//rewrite the function to add the read more thing as last item in .portfolio-text. we dont need the div, just the a tag but make sure to add the class read-more to the a tag
function addReadMoreToPortfolioItems() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
    const href = item.getAttribute('href');
    const portfolioText = item.querySelector('.portfolio-text');
    portfolioText.insertAdjacentHTML('beforeend', `<a class="js-portfolio-item-read-more" href="${href}">Read More →</a>`);
    });
}

//on dom ready call the function
document.addEventListener('DOMContentLoaded', function() {
   // addReadMoreToPortfolioItems(); //we dont need this duplicate
});

   
