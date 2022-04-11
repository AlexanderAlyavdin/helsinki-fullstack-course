const {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
} = require('../utils/list-helper');
const { fakeBlog, fakeBlogList } = require('./mocks/blogs');

test('dummy returns one', () => {
  const blogs = [];

  const result = dummy(blogs);
  expect(result).toBe(1);
});

describe('total likes', () => {
  test('of empty list is zero', () => {
    expect(totalLikes([])).toBe(0);
  });

  test('when list has only one blog equals the likes of that', () => {
    const blogs = [fakeBlog];
    expect(totalLikes(blogs)).toBe(5);
  });

  test('of bigger list is calculated right', () => {
    expect(totalLikes(fakeBlogList)).toBe(36);
  });
});

describe('favourite blog', () => {
  test('of empty list is undefined', () => {
    expect(favoriteBlog([])).toBe(undefined);
  });

  test('when list has only one blog is that blog', () => {
    const blogs = [fakeBlog];
    expect(favoriteBlog(blogs)).toEqual({
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      likes: 5,
    });
  });

  test('of bigger list is calculated right', () => {
    expect(favoriteBlog(fakeBlogList)).toEqual({
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      likes: 12,
    });
  });
});

describe('author with most blogs', () => {
  test('of empty list is undefined', () => {
    expect(mostBlogs([])).toBe(undefined);
  });

  test('when list has only one blog is the author of that blog', () => {
    const blogs = [fakeBlog];
    expect(mostBlogs(blogs)).toEqual({
      author: 'Edsger W. Dijkstra',
      blogs: 1,
    });
  });

  test('of bigger list is calculated right', () => {
    expect(mostBlogs(fakeBlogList)).toEqual({
      author: 'Robert C. Martin',
      blogs: 3,
    });
  });
});

describe('author with most likes', () => {
  test('of empty list is undefined', () => {
    expect(mostLikes([])).toBe(undefined);
  });

  test('when list has only one blog is the author of that blog', () => {
    const blogs = [fakeBlog];
    expect(mostLikes(blogs)).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 5,
    });
  });

  test('of bigger list is calculated right', () => {
    expect(mostLikes(fakeBlogList)).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17,
    });
  });
});
