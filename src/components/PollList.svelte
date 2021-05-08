<script>
import { flip } from "svelte/animate"
import { scale, fade } from "svelte/transition"
import PollDetails from "./PollDetails.svelte";
import { pollStore } from "../store";
</script>

<div class="poll-list">
    {#each $pollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500}}>
        <PollDetails {poll} />
    </div>
    {/each}
</div>

<style>
.poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
}
</style>
