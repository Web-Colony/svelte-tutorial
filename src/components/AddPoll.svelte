<script>
import { createEventDispatcher } from "svelte"
import { pollStore } from "../store"
import Button from "../units/Button.svelte";

const dispatch = createEventDispatcher();

let fields = {
    question: "",
    answerA: "",
    answerB: "",
};

let valid = false;
let errors = {
    question: "",
    answerA: "",
    answerB: "",
};

const onSubmit = () => {
    valid = true;

    if (fields.question.trim().length < 5) {
        valid = false;
        errors.question = "Question Must be 5 characters long at least";
    } else errors.question = "";
    if (fields.answerA.trim().length < 1) {
        valid = false;
        errors.answerA = "Answer A can not be empty";
    } else errors.answerA = "";
    if (fields.answerB.trim().length < 1) {
        valid = false;
        errors.answerB = "Answer B can not be empty";
    } else errors.answerB = "";

    if(valid) {
        const poll = {...fields, votesA: 0, votesB: 0, id: Math.random()}
        pollStore.update(currentPolls => {
            return [poll, ...currentPolls]
        })
        dispatch("addpoll")
    }
}
</script>

<form on:submit|preventDefault={onSubmit}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question} class:error={errors.question !== ""}/>
        <div class="error-text">{errors.question}</div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA} class:error={errors.answerA !== ""}/>
        <div class="error-text">{errors.answerA}</div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB} class:error={errors.answerB !== ""}/>
        <div class="error-text">{errors.answerB}</div>
    </div>
    <Button> Add Poll </Button>

</form>

<style>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form-field {
    margin: 10px auto;
}

input {
    width: 100%;
    border-radius: 6px;
}

label {
    padding-bottom: 10px;
}

.error {
    border: 2px solid #d91b42;
}
.error-text {
    font-size: 12px;
    font-weight: bold;
    color: #d91b42;
}
</style>
