import React from "react";
import axios from 'axios';
import scraper from './Scrapetest'
const cheerio = require('react-native-cheerio')

// import "./style.css";

function SearchButtonClick(event) {
  event.preventDefault();

  // must add logic to check if data is in both search boxes in order to ensure successful search.

  console.log("running song search")
  // var queryURL = createURL();
  // queryURL creates the unique URL to pull song data based on what the user puts into the search parameters.
  scraper()

}
 
function createURL(){

  String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
  }

    const queryArtist = document.getElementById('search-artist').value
    // console.log(queryArtist)

    const artist = queryArtist.allReplace({' ': '_'})
    console.log(artist)

    const artistsInitial = artist[0]
    // console.log(artistsInitial)


    const querySong = document.getElementById('search-song').value
    // console.log(querySong)

    var songName = querySong.allReplace({' ': '_'})
    console.log(songName)


    const url = "https://tabs.ultimate-guitar.com/" + artistsInitial + "/" + artist + "/" + songName + "_crd.htm";



    // console.log("searching for the artist: " + queryArtist);
    // console.log("and their song: " + querySong);
    // console.log("url: " + url);

    return url
}


// function scraper() {
//   // console.log("scraper")
//   var queryURL = createURL();
//   console.log("scraping from url: " + queryURL)
//   // axios.get(queryURL).then(function(response) {
//   // }),
  
//   axios.get(queryURL).then(function(response){
//     var $ = cheerio.load(response.data)
//     console.log("axios-ing")
//     var results = [];
//     $("body").each(function(i,element){

//       var scrapedContent = $(element).children("script").text();

//       var rawContent = scrapedContent.split('revision_id')[0].split('content')[1];

//       var relevantContent2;
      

//       function scrape() {
//         console.log("scraping.....")
//         var openingOfChord = "[ch]";
//         var endingOfChord = "[\\/ch";

//         var firstString = rawContent.split(openingOfChord)
//       // firstString splits the massive string into an array of string. Each individual string begins with the chord we are trying to isolate
//       var newestArray = [];

//       for (i = 0; i < firstString.length; i++){
//         // this for loop is the process of isolating the chords from the lyrics.
//             var modifiedString = firstString[i]
//             // console.log(modifiedString)
//             var strCopy = modifiedString.split(endingOfChord);
//             // console.log(strCopy[0])
//             newestArray.push(strCopy[0]);
    
//         }

//         relevantContent2 = newestArray

//         console.log(relevantContent2)

//       }

//       scrape()






//     })
//   })
// }



function SearchPage(){
  return(
    <div className="SearchPage">
        <div className="container">
        <div className="jumbotron">            
        <h1 className="text-center">
              <strong>
                <i className="fa fa-newspaper-o"></i> Spectabular Search</strong>
            </h1>
        </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-header">
            <strong><i className="fa fa-list-alt"></i> Search Parameters</strong>
          </div>
          <div className="card-body">
            <form role="form">
              <div className="form-group">
                <label htmlFor="search">Search Artist:</label>
                  <input type="text" className="form-control" id="search-artist" placeholder="You must submit both and Artist and Song Title"></input>
              </div>
              
              <div className="form-group">
                <label htmlFor="search">Search Song:</label>
                  <input type="text" className="form-control" id="search-song" placeholder="You must submit both and Artist and Song Title"></input>
              </div>

              <button type="submit" className="btn btn-default" id="run-search" onClick={SearchButtonClick}>
                      <i className="fa fa-search"></i> Search</button>
              <button className="btn btn-default" id="clear-all">
                      <i className="fa fa-trash"></i> Clear Results</button>              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>  
    
  )
}

export default SearchPage;