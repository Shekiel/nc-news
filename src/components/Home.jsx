import React from 'react';
import { useState } from 'react';

const Home = () => {
  return (
    <div>
      <h2 className="Home">Welcome To NC News!</h2>
      <img
        src="/img/breakingNews.jpg"
        alt="Breaking News"
        className="breakingNews"
      />

      <h3 className="Home">Bitcoin Collaped!</h3>
      <img
        src="/img/bitcoin.webp"
        alt="Breaking News"
        className="breakingNews"
      />
      <p>
        <br></br>
        The price of Bitcoin has collapsed, yet again, just like this time last
        year. Those who got in on the ground floor years ago have made a
        killing. Those who got in last year after the crash and exited shortly
        after Elon Musk took the plunge in February have joined the ranks of the
        uber-rich. And for all the criticism about its volatility, instability
        and environmental irresponsibility, we probably haven't seen the last
        Bitcoin rally. But before we get around to considering that question,
        let's just back-track a little. Well, maybe just a little more than a
        little. Let's go all the way back to 1637 to Holland, then one of the
        most powerful nations in Europe.
      </p>
    </div>
  );
};

export default Home;
