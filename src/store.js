import { writable } from "svelte/store";

export const pollStore = writable([
  {
    id: 1,
    question: "How Are you Today ?",
    answerA: "Fine Thanks",
    answerB: "Not very well",
    votesA: 3,
    votesB: 7,
  },
]);
