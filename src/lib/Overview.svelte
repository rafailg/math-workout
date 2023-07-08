<script lang="ts">
    import { CurrentWorkout, AmountOfQuestions, AmountOfNumbers, NumberLength } from "../stores/stores";
    import { Workout, CreateWorkout } from "../classes/Workout";
    import Stats from "./Stats.svelte";
    import Settings from "./Settings.svelte";

    function startWorkout() {
        let workout: Workout = CreateWorkout($AmountOfQuestions, $AmountOfNumbers, $NumberLength);
        CurrentWorkout.set(workout);
    }
</script>

<div>
    <div class="columns">
        <div class="column is-narrow">
            <Stats />
        </div>
        <div class="column is-narrow">
            <Settings />
        </div>
        <div class="column"></div>
    </div>
    <div class="is-flex is-justify-content-center">
        <button class="button is-primary m-5" on:click={startWorkout}>
            Start new workout
        </button>
    </div>
</div>

<style>
</style>
