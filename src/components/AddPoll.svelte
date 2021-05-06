<script>
import {
    createEventDispatcher
} from "svelte"
const dispatch = createEventDispatcher();

let fields = {
    question: "",
    answerA: "",
    answerB: "",
};

const onSubmit = () => {

    console.log(fields)
    // dispatch("AddPoll", poll);
}
</script>

<form on:submit|preventDefault={onSubmit}>
    <div class="form-field">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question} />
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA} />
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB} />
    </div>
    <button class="btn"> Add </button>

</form>

<style>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.form-field {}

label {
    padding-bottom: 10px;
}
</style>
