import axios from 'axios';

const articlesApi = axios.create({
  baseURL: 'https://nc-news-example.herokuapp.com/api',
});

export const getArticles = async (topic, article_id) => {
  console.log(topic, article_id);
  const { data } = await articlesApi.get(
    `/articles`,

    {
      params: {
        topic,
        article_id,
      },
    }
  );

  return data.articles;
};

export const getTopics = async () => {
  const { data } = await articlesApi.get('/topics');
  return data.topics;
};
export const getArticleById = async (article_id) => {
  const { data } = await articlesApi.get(`/articles/${article_id}`);

  return data.article;
};

export const getComments = async (article_id) => {
  const { data } = await articlesApi.get(`/articles/${article_id}/comments`);

  return data;
};

export const updateVotes = async (comment_id, inc_votes) => {
  const { data } = await articlesApi.patch(`/comments/${comment_id}`, {
    inc_votes,
  });
};

export const commentAdder = async (body, username, article_id) => {
  const { data } = await articlesApi.post(`articles/${article_id}/comments`, {
    body,
    username,
  });
};
