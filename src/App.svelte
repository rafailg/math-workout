<script lang="ts">
import Header from "./lib/Header.svelte";
import Overview from "./lib/Overview.svelte";
import {CurrentWorkout} from './stores/stores'
import Workout from "./lib/Workout.svelte";
import Results from "./lib/Results.svelte";

</script>

<main>

<Header></Header>
{#if $CurrentWorkout?.Completed}
    <Results></Results>
{:else if $CurrentWorkout}
    <Workout></Workout>
{:else}
    <Overview></Overview>
{/if}

</main>

<style>  
  main {
    height: 100%;
  }
</style>