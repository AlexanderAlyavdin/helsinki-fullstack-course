const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((acc, { likes }) => {
    return acc + likes;
  }, 0);
};

const favoriteBlog = (blogs) => {
  const favourite = blogs.reduce((bestBlog, blog) => {
    if (blog.likes > bestBlog.likes) {
      return blog;
    }

    return bestBlog;
  }, blogs[0]);

  if (favourite) {
    const { title, author, likes } = favourite;
    return { title, author, likes };
  }
};

const findBest = (keyValueMap) => {
  const entries = Object.entries(keyValueMap);

  if (entries.length > 0) {
    const bestEntry = entries.reduce(([maxKey, maxValue], [key, value]) => {
      if (value > maxValue) {
        return [key, value];
      }
      return [maxKey, maxValue];
    }, entries[0]);
    return { key: bestEntry[0], value: bestEntry[1] };
  }
};

const mostBlogs = (blogs) => {
  const authorsMap = blogs.reduce((authors, { author }) => {
    return {
      ...authors,
      [author]: (authors[author] || 0) + 1,
    };
  }, {});

  const result = findBest(authorsMap);

  if (result) {
    return {
      author: result.key,
      blogs: result.value,
    };
  }
};

const mostLikes = (blogs) => {
  const authorsMap = blogs.reduce((authors, { author, likes }) => {
    return {
      ...authors,
      [author]: (authors[author] || 0) + likes,
    };
  }, {});

  const result = findBest(authorsMap);

  if (result) {
    return {
      author: result.key,
      likes: result.value,
    };
  }
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
