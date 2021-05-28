import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        {' '}
        <button class="btn btn-primary">Home</button>
      </Link>{' '}
      <Link to="/articles">
        <button class="btn btn-primary">Articles</button>
      </Link>
      {'  '}
      <Link to="/topics">
        <button class="btn btn-primary">Topics</button>
      </Link>
    </nav>
  );
};
// link to home page
// link to single article

export default Nav;
