# thesession-webscrapper

## Description

Downloads all tunes from thesession.org in abc format

## To use

To clone and run you'll need [CasperJS](http://casperjs.org/)From your command line:
```bash
# Clone this repository
git clone https://github.com/BartoszBaczek/thesession-webscrapper.git
# Go into the repository
cd /thesession-webscrapper
# Install dependencies and run the scrapper
npm install && casperjs scrapper.js
```

## Optional parameters
```bash
--log=logFile.txt     // output file path
```
```bash
--first=10            // page to start from (https://thesession.org/tunes/{first}
```

```bash
--count=100           // number of pages to download from first
```

#### License [MIT](LICENSE.md)
