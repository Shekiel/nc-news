import React, { useState, useEffect } from 'react';
import { getArticles } from '../utils/api';
import { Link, useParams } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [topic]);
  console.log();
  return (
    <div className="articles">
      <h2>ALL Articles</h2>
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="borderlist">
              <h3>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;

// 21-27 new component
// pass info using article.article id    art.title
