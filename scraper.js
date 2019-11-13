var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

//go to quotes.toscrape.com
//click on anchor for the humor tag
//find text quotes by class
//get text from text class with quote

nightmare
  .goto('http://quotes.toscrape.com/')
  .click('a[href="/tag/humor/"]')
  .wait('span')
  .evaluate(() => {
    return document.querySelectorAll('text');
    
  })
  .end()
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.error('Search failed:', error)
  })