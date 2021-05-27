import React, { Fragment, useEffect, useState } from 'react';
import { getComments } from '../utils/api.js';

const Comment = (props) => {
  console.log(props.comment);
  const [voteCount, setVoteCount] = useState(0);
  const [err, setErr] = useState(null);

  // button handle click
  // function similar

  // const handleCommentCountClick = () => {
  //   setVoteCount((currCount) => currCount + 1);
  //   setErr(null);
  //   articlesApi.changeCount().catch((err) => {
  //     setVoteCount((currCount) => currCount - 1);
  //     setErr('Something went wrong, please try again. ');
  //   });
  // };
  return (
    <>
      <p> {props.comment.body}</p>
      <p>{Date(props.comment.created_at)}</p>

      <p>Votes: {voteCount + props.comment.votes}</p>
    </>
  );
};

export default Comment;

// optm rendering
