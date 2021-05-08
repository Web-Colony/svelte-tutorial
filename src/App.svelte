<script>
  import Tabs from "./units/Tabs.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import AddPoll from "./components/AddPoll.svelte";
  import PollList from "./components/PollList.svelte";

  let tabs = ["Current Polls", "Add New Poll"];
  let activeTab = "Current Polls";

  const addPoll = () => (activeTab = "Current Polls");
</script>

<Header />
<main>
  <Tabs {activeTab} {tabs} on:tabChange={(e) => (activeTab = e.detail)} />
  {#if activeTab === "Current Polls"}
    <PollList />
  {:else}
    <AddPoll on:addpoll={addPoll} />
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
