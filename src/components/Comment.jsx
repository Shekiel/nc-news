import React, {
  Fragment,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import { getComments, updateVotes } from '../utils/api.js';

const Comment = (props) => {
  console.log(props.comment);
  const [voteCount, setVoteCount] = useState(props.comment.votes);
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
      <div className="comment_section">
        <p> {props.comment.body}</p>
        <p>{Date(props.comment.created_at)}</p>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          onClick={() => {
            setVoteCount(voteCount + 1);
            updateVotes(props.comment.comment_id, 1);
            // .catch((err) => {
            //   setVoteCount((currCount) => {})
            // }) ;
          }}
        >
          vote up
        </button>{' '}
        <button
          type="button"
          class="btn btn-primary btn-sm"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          onClick={() => {
            setVoteCount(voteCount - 1);
            updateVotes(props.comment.comment_id, -1);
          }}
        >
          vote down
        </button>
        {'  '}
        {voteCount}
        {/* <p>Votes: {voteCount + props.comment.votes}</p> */}
      </div>
    </>
  );
};

export default Comment;

// optm rendering
