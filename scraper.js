var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

//go to quotes.toscrape.com
//click on anchor for the humor tag
//find text quotes by class querySelectAll
//forEach the qSA and get the inner text push it into an array


nightmare
  .goto('http://quotes.toscrape.com/')
  .click('a[href="/tag/humor/"]')
  .wait(250)
  .evaluate(() => {
    let results = []
    let nodes = document.querySelectorAll('.text');
    nodes.forEach((node, i) => results.push(document.querySelectorAll('.text')[i].innerText) )
    return results
  })
  .end()
  .then(result => {console.log('result: ', result) })
  .catch(error => {
    console.error('Search failed:', error)
  })


//Gets onlt the first quote
  // nightmare
  // .goto('http://quotes.toscrape.com/')
  // .click('a[href="/tag/humor/"]')
  // .wait(500)
  // .evaluate(() => {
  //   return document.querySelector('span.text').innerText;
  // })
  // .end()
  // .then(result => {
  //   console.log('result: ', result)
  // })
  // .catch(error => {
  //   console.error('Search failed:', error)
  // })