const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

let team = players;
let team1 = [...team];
let cap1 = { ...person };

console.log(team, team1, cap1);
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

export { players, person, team, team1, cap1 };
