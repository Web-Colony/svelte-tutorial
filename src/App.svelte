<script>
import Header from "./components/Header.svelte"
import Footer from "./components/Footer.svelte"
import Tabs from "./units/Tabs.svelte"
import AddPoll from "./components/AddPoll.svelte"

let tabs = ["Current Polls", "Add New Poll"];
let activeTab = "Current Polls";
</script>

<Header />
<main>
    <Tabs {activeTab} {tabs} on:tabChange={(e) => activeTab = e.detail}/>
	{#if activeTab === "Current Polls"}
	<p> Polls list </p>
	{:else}
	<AddPoll />
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
