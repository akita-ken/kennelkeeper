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

// Put JS that you want to run when the page is loaded in Page Callbacks
// because if you put it in the page fragments, they don't get run.
myApp.onPageInit('dog', function(page) {
	// code here gets run when 'dog' page (<div data-page="dog">) is loaded
});
