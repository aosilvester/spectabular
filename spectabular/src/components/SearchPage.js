import React from "react";
// import "./style.css";

function SearchPage(){
  return(
    <div className="SearchPage">
        <div class="container">
        <div class="jumbotron">            
        <h1 class="text-center">
              <strong>
                <i class="fa fa-newspaper-o"></i> Spectabular Search</strong>
            </h1>
        </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <strong><i class="fa fa-list-alt"></i> Search Parameters</strong>
          </div>
          <div class="card-body">
            <form role="form">
              <div class="form-group">
                <label for="search">Search Artist:</label>
                  <input type="text" class="form-control" id="search-artist" placeholder="You must submit both and Artist and Song Title"></input>
              </div>
              
              <div class="form-group">
                <label for="search">Search Song:</label>
                  <input type="text" class="form-control" id="search-song" placeholder="You must submit both and Artist and Song Title"></input>
              </div>

              <button type="submit" class="btn btn-default" id="run-search">
                      <i class="fa fa-search"></i> Search</button>
              <button class="btn btn-default" id="clear-all">
                      <i class="fa fa-trash"></i> Clear Results</button>              
            </form>
          </div>
        </div>
      </div>
    </div>























    </div>  
    
  )
}

export default SearchPage;