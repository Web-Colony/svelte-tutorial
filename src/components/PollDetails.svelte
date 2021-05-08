<script>
import {
    pollStore
} from "../store"
import Button from "../units/Button.svelte";
import Card from "../units/Card.svelte";
import {
    tweened
} from "svelte/motion";
export let poll;

$: totalVotes = poll.votesA + poll.votesB;

$: percentA = Math.round(poll.votesA / totalVotes * 100) || 0;
$: percentB = Math.round(poll.votesB / totalVotes * 100) || 0;

let tweenedA = tweened(0);
let tweenedB = tweened(0);
$: tweenedA.set(percentA)
$: tweenedB.set(percentB)

const handleVote = (type, id) => {
    pollStore.update(currentPolls => {
        return currentPolls.map(poll => {
            if (poll.id === id)
                poll = type === "a" ? {
                    ...poll,
                    votesA: poll.votesA + 1
                } : {
                    ...poll,
                    votesB: poll.votesB + 1
                }
            return poll;
        });
    });
}

const deletePoll = (id) => {
    pollStore.update(currentPolls => {
        return currentPolls.filter(poll => poll.id !== id);
    });
}
</script>

<Card>
    <div class="poll">
        <h3>{poll.question}</h3>
        <p>Total Votes : {totalVotes}</p>
        <div class="answer" on:click={() => handleVote("a", poll.id)}>
            <div class="percent percent-a" style="width: {$tweenedA}%"></div>
            <span>{poll.answerA} ({poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote("b", poll.id)}>
            <div class="percent percent-b" style="width: {$tweenedB}%"></div>
            <span>{poll.answerB} ({poll.votesB})</span>
        </div>
        <div class="delete">
            <Button on:click={() => deletePoll(poll.id)}>delete</Button>
        </div>
    </div>
</Card>

<style>
h3 {
    margin: 0 auto;
    color: #555;
}

p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
}

.answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
}

.answer:hover {
    opacity: 0.6;
}

span {
    display: inline-block;
    padding: 10px 20px;
}

.percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
}

.percent-a {
    background: rgba(232, 117, 141, 0.3);
    border-left: 4px solid rgba(232, 117, 141);
}

.percent-b {
    background: rgba(143, 219, 191, 0.3);
    border-left: 4px solid rgb(143, 219, 191);
}

.delete {
    text-align: center;
}
</style>
