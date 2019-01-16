import React, { Component } from 'react';
import express from 'express';
// import './App.css';
const scraper = require("../server");


//my imports
// import Scraper from './Webscraper/scraper';
function SearchButtonClick(event) {
    event.preventDefault();
  
    // must add logic to check if data is in both search boxes in order to ensure successful search.
  


    console.log("search button clicked")
    // var queryURL = createURL();
    // queryURL creates the unique URL to pull song data based on what the user puts into the search parameters.
    // scraper()
    createURL();
  
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
    console.log("url: " + url); 
    // scraper(url)

    return url
}



class App extends Component {
  render() {
    const navbar = (
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand" href="#">Web Scraper</a>
      </nav>
    );
    return (
        <div className="SearchPage">
        <div className="container">
        <div className="jumbotron">            
        <h1 className="text-center">
              <strong>
                <i className="fa fa-newspaper-o"></i> topics page Search</strong>
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
    );
  }
}

export default App;