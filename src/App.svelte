<script lang="ts">
import Header from "./lib/Header.svelte";
import Overview from "./lib/Overview.svelte";
import {CurrentWorkout} from './stores'
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
    background: rgb(192,255,255);
    background: linear-gradient(127deg, rgba(192,255,255,1) 0%, rgba(211,169,255,1) 100%);
  }
</style>