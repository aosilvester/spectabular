import React from 'react';


// function SearchButtonClick(event) {
//     event.preventDefault();
  
//     // must add logic to check if data is in both search boxes in order to ensure successful search.
  
//     console.log("running song search")
//     // var queryURL = createURL();
//     // queryURL creates the unique URL to pull song data based on what the user puts into the search parameters.
//     scraper()
  
//   }

  function scraper() {
    // console.log("scraper")
    var queryURL = createURL();
    console.log("scraping from url: " + queryURL)
    // axios.get(queryURL).then(function(response) {
    // }),
    
    axios.get(queryURL).then(function(response){
      var $ = cheerio.load(response.data)
      console.log("axios-ing")
      var results = [];
      $("body").each(function(i,element){
  
        var scrapedContent = $(element).children("script").text();
  
        var rawContent = scrapedContent.split('revision_id')[0].split('content')[1];
  
        var relevantContent2;
        
  
        function scrape() {
          console.log("scraping.....")
          var openingOfChord = "[ch]";
          var endingOfChord = "[\\/ch";
  
          var firstString = rawContent.split(openingOfChord)
        // firstString splits the massive string into an array of string. Each individual string begins with the chord we are trying to isolate
        var newestArray = [];
  
        for (i = 0; i < firstString.length; i++){
          // this for loop is the process of isolating the chords from the lyrics.
              var modifiedString = firstString[i]
              // console.log(modifiedString)
              var strCopy = modifiedString.split(endingOfChord);
              // console.log(strCopy[0])
              newestArray.push(strCopy[0]);
      
          }
  
          relevantContent2 = newestArray
  
          console.log(relevantContent2)
  
        }
  
        scrape()
  
  
  
  
  
  
      })
    })
  }





export default scraper