// Initialize your app
var myApp = new Framework7({
    material: true, // enable Material theme
    cache: false, // disable page cache
    pushState: true, // web app so add hash navigation e.g. /#/about.html
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {

});
