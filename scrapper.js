var file = require('file');
var args = require('argsParser');
var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

var SESSION_URL = 'https://thesession.org/tunes/';

var log = args.parseLog(casper.cli.options);
var start = args.parseStart(casper.cli.options);
var count = args.parseCount(casper.cli.options);

var currentIndex = start;
var numberOf4xxResponses = 0;

casper.start(SESSION_URL);

casper.repeat(count, function () {

    casper.thenOpen(SESSION_URL + currentIndex, function (response) {

        if (response['status'] !== 200) {
            numberOf4xxResponses++;
        } else {
            casper.waitForSelector('.notes', function(){
                var songs = casper.fetchText('.notes');            
                file.appendTo(log, songs);
            });
        }
    });

    currentIndex++;
}).then(function() {
    console.log('Thesession.org is scrapped')
    console.log('Number of 4xx responses: ', numberOf4xxResponses);
});

casper.run();
