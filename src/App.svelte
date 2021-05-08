<script>
import Header from "./components/Header.svelte"
import Footer from "./components/Footer.svelte"
import Tabs from "./units/Tabs.svelte"
import AddPoll from "./components/AddPoll.svelte"
import PollList from "./components/PollList.svelte";

let tabs = ["Current Polls", "Add New Poll"];
let activeTab = "Current Polls";

let polls = [{
    id: 1,
    question: "How Are you Today ?",
    answerA: "Fine Thanks",
    answerB: "Not very well",
    votesA: 5,
    votesB: 10 

}];
const addPoll = (e) => {
	polls = [e.detail, ...polls];
	activeTab = "Current Polls";
}

const handleVote = (e)  => {
	const { type, id } = e.detail;
	polls = polls.map(poll => {
		if(poll.id === id) 
			poll = type === "a" ? {...poll, votesA: poll.votesA+1 } : {...poll, votesB: poll.votesB+1 }
		return poll;
	})
}

</script>

<Header />
<main>
    <Tabs {activeTab} {tabs} on:tabChange={(e) => activeTab = e.detail}/>
	{#if activeTab === "Current Polls"}
	 <PollList {polls} on:vote={handleVote}/>
	{:else}
	<AddPoll on:addpoll={addPoll}/>
	{/if}
</main>
<Footer />

<style>
main {
    width: 100%;
    max-width: 960px;
    margin: 40px auto;	
}
</style>
