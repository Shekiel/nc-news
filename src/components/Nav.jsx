import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <button>
        <Link to="/">Home</Link>
      </button>

      <button>
        <Link to="/articles">Articles</Link>
      </button>

      <button>
        <Link to="/topics">Topics</Link>
      </button>
    </nav>
  );
};
// link to home page
// link to single article

export default Nav;
