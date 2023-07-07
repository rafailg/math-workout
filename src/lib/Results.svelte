<script lang="ts">
    import { CurrentWorkout } from "../stores/stores";
    
    function completeWorkout(){
        CurrentWorkout.set(null)
    }
</script>

<div>
    {#if $CurrentWorkout}
        {#each $CurrentWorkout.Questions as question, i}
            <div>{i+1} {question.Solved?"Solved":"Failed"} - {question.Description} = {question.Answer}</div>
        {/each}        
    {/if}
    <button on:click={completeWorkout}>Back to menu</button>
</div>