/* eslint-disable */
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

window.onload = function () {
  const getWho = who[Math.round(Math.random() * (who.length - 1))];
  const getAction = action[Math.floor(Math.random() * (action.length - 1))];
  const getWhat = what[Math.floor(Math.random() * (what.length - 1))];
  const getWhen = when[Math.floor(Math.random() * (when.length - 1))];

  const result = (document.getElementById("excusas").innerHTML =
    getWho + " " + getAction + " " + getWhat + " " + getWhen);
  //write your code here
  return result;
};
