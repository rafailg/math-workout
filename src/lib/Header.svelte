<script lang="ts">
    import { CurrentWorkout } from "../stores/stores";

    function toMainScreen(){
        CurrentWorkout.set(null);
    }
</script>

<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <div class="navbar-item brand-name">
            Math Workout
        </div>
    </div>

    <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
                {#if $CurrentWorkout}
                    <button on:click={toMainScreen} class="button 
                    {$CurrentWorkout.Completed?"is-primary":"is-danger"}">
                        {$CurrentWorkout.Completed?"Continue":"Cancel workout"}
                    </button>
                {/if}
            </div>
        </div>
    </div>
</nav>

<style>
.brand-name{
    font-size: larger;
    font-weight: bold;
    user-select: none;
}
</style>