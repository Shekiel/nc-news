import React, { useEffect, useState } from 'react';
import { getArticleById, getArticles, getComments } from '../utils/api';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const Article = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState([]);
  const { article_id } = useParams();
  console.log(comments);

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      console.log(article);
      setArticle(article);
    });
  }, [article_id]);

  useEffect(() => {
    getComments(article_id).then((commentFromApi) => {
      console.log(commentFromApi.comments);

      setComments(commentFromApi.comments);
    });
  }, [article_id]);

  return (
    <article>
      <h2>{article.title}</h2>
      <br></br>

      <p>{article.body}</p>
      <p>By: {article.author}</p>
      <ul>
        <h3>Comments</h3>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <Comment comment={comment} article={article} />{' '}
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default Article;
