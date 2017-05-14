var file = require('file');
var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});


var SESSION_URL = 'https://thesession.org/tunes/';
var FIRST_PAGE_INDEX = 1;
var NUMBER_OF_PAGES = 16000;

var currentPageIndex = FIRST_PAGE_INDEX;
var numberOf4xxResponses = 0;


casper.start(SESSION_URL);

casper.repeat(NUMBER_OF_PAGES, function () {

    casper.thenOpen(SESSION_URL + currentPageIndex, function (response) {

        if (response['status'] !== 200) {
            numberOf4xxResponses++;
        } else {
            casper.waitForSelector('.notes', function(){
                var songs = casper.fetchText('.notes');            
                file.appendTo('log.txt', songs);
            });
        }
    });

    currentPageIndex++;
}).then(function() {
    console.log('Thesession.org is scrapped')
    console.log('Number of 4xx responses: ', numberOf4xxResponses);
});

casper.run();
