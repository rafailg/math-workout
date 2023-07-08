<script lang="ts">
    import { Workouts, CurrentWorkout } from "../stores/stores";
    import { Workout, CreateWorkout } from "../classes/Workout";
    import Stats from "./Stats.svelte";

    function startWorkout() {
        let workout: Workout = CreateWorkout(10);
        CurrentWorkout.set(workout);
    }
</script>

<div>
    <Stats />
    <div class="is-flex is-justify-content-center">
        <button class="button is-primary m-5" on:click={startWorkout}>
            Start new workout
        </button>
    </div>
</div>

<style>
</style>
