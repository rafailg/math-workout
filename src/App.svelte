<script lang="ts">
import Header from "./lib/Header.svelte";
import Overview from "./lib/Overview.svelte";
import {CurrentWorkout} from './stores/stores'
import Workout from "./lib/Workout.svelte";
import Results from "./lib/Results.svelte";

</script>

<main>

<Header></Header>

{#if $CurrentWorkout?.Comleted}
    <Workout></Workout>
{:else if $CurrentWorkout}
    <Results></Results>
{:else}
    <Overview></Overview>
{/if}

</main>

<style>

</style>
