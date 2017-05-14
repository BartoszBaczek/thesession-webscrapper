var file = require('file');
var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

var SESSION_URL = 'https://thesession.org/tunes/';
var FIRST_PAGE_INDEX = 1;
var NUMBER_OF_PAGES = 16000;

casper.start(SESSION_URL);

var currentPageIndex = FIRST_PAGE_INDEX;

casper.repeat(NUMBER_OF_PAGES, function() {
    
    casper.thenOpen(SESSION_URL + currentPageIndex, function() {
        
        casper.waitForSelector('.notes', function(){

            var songs = casper.fetchText('.notes');            
            file.appendTo('log.txt', songs);

        });

    });

    currentPageIndex++;
});

casper.run();
