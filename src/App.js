import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import SearchPage from './components/SearchPage'
import TopicsPage from './components/TopicsPage'

// class App extends Component {
//   render() {
//     return (
//       <SearchPage />
//     );
//   }
// }



function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/search" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Spectabular</h2>

      

    </div>
  );
}

function About() {
  return(
      <SearchPage />
  )
}

function Topics({ match }) {
  return (
    // <div>
    //   <h2>Topics</h2>
      // <ul>
    //     <li>
    //       <Link to={`${match.url}/rendering`}>Rendering with React</Link>
    //     </li>
    //     <li>
    //       <Link to={`${match.url}/components`}>Components</Link>
    //     </li>
    //     <li>
    //       <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
    //     </li>
    //   </ul>

    //   <Route path={`${match.path}/:topicId`} component={Topic} />
    //   <Route
    //     exact
    //     path={match.path}
    //     render={() => <h3>Please select a topic.</h3>}
    //   />
    // </div>
    <TopicsPage />
  // <div>asdf</div>
  );
}

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

export default BasicExample;

// export default App;
