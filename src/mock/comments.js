const comments = [
  {
    id: 1,
    author: 'Ilya O"Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2023-01-11T16:12:32.554Z',
    emotion: 'smile'
  },
  {
    id: 2,
    author: 'Ilya O"Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2019-05-11T16:15:30.554Z',
    emotion: 'sleeping'
  },
  {
    id: 3,
    author: 'Ilya O"Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2019-05-11T16:12:32.554Z',
    emotion: 'puke'
  },
  {
    id: 4,
    author: 'Ilya O"Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2020-07-11T16:12:32.554Z',
    emotion: 'angry'
  },
  {
    id: 5,
    author: 'Ilya O"Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2019-01-11T16:12:32.554Z',
    emotion: 'smile'
  },
];


const createsCommentsMap = (commentsArray) => {
  const commentsMap = new Map();

  commentsArray.forEach((comment) => {
    commentsMap.set(comment.id, comment);
  });

  return commentsMap;
};

const commentsById = createsCommentsMap(comments);

export {commentsById};
