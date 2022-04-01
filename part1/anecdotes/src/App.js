import { useState } from "react";

function getIndex(from, to) {
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Math.floor(Math.random() * (max - min) + min);
}

function findMostVoteIndex(votes) {
  let maxIndex = 0;
  let max = votes[maxIndex];

  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max) {
      maxIndex = i;
      max = votes[i];
    }
  }

  return maxIndex;
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const [selected, setSelected] = useState(0);

  const mostVotedIndex = findMostVoteIndex(points);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <div>
        <button
          onClick={() => {
            const newPoints = [...points];
            newPoints[selected] += 1;
            setPoints(newPoints);
          }}
        >
          vote
        </button>
        <button onClick={() => setSelected(getIndex(0, anecdotes.length))}>
          next anecdote
        </button>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[mostVotedIndex]}</div>
        <div>has {points[mostVotedIndex]} votes</div>
      </div>
    </div>
  );
};

export default App;
