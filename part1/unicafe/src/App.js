import { useState } from "react";

const Button = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => (
  <table>
    <tbody>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={good + neutral + bad} />
      <StatisticLine
        text={"average"}
        value={(good - bad) / (good + neutral + bad)}
      />
      <StatisticLine
        text={"positive"}
        value={`${(good * 100) / (good + neutral + bad)} %`}
      />
    </tbody>
  </table>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const isFeedbackGiven = good !== 0 || neutral !== 0 || bad !== 0;

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)}>good</Button>
      <Button onClick={() => setNeutral(neutral + 1)}>neutral</Button>
      <Button onClick={() => setBad(bad + 1)}>bad</Button>
      <h1>statistics</h1>
      {isFeedbackGiven ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        "No feedback given"
      )}
    </div>
  );
};

export default App;
