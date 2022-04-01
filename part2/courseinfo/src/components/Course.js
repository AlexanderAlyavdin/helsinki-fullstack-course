const Header = ({ course }) => <h2>{course}</h2>;

const Part = ({ part, exercises }) => (
  <p>
    {part} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part.name} exercises={part.exercises} />
    ))}
  </>
);

const Total = ({ parts }) => (
  <div>
    <b>
      total of {parts.reduce((acc, part) => acc + part.exercises, 0)} exercises
    </b>
  </div>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
