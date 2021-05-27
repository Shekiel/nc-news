import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Articles from './components/Articles';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import Article from './components/Article';
import Topics from './components/Topics';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Nav />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/articles" exact>
            <Articles />
          </Route>
          <Route path="/topics" exact>
            <Topics />
          </Route>
          <Route path="/topics/:topic" exact>
            <Articles />
          </Route>
        </Switch>
        <Route path="/articles/:article_id" exact>
          <Article />
        </Route>
        <Route path="/articles/:aricle_id/:comment_id" exact>
          <Articles />
        </Route>
      </Router>
    </div>
  );
}

export default App;
