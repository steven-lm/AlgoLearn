import React from 'react';
import {
  BrowserRouter, Route, Switch,
} from 'react-router-dom';
import bfsPage from './pages/bfsPage';
import dfsPage from './pages/dfsPage';
import dijkstraPage from './pages/dijkstraPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={bfsPage} />
            <Route path="/bfs" component={bfsPage} />
            <Route path="/dfs" component={dfsPage} />
            <Route path="/dijkstra" component={dijkstraPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
