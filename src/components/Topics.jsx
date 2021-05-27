import { useState, useEffect } from 'react';
import React from 'react';
import { getTopics } from '../utils/api';
import { Link } from 'react-router-dom';

const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);
  console.log(topics);
  return (
    <div className="Home">
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              <h3>
                <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
