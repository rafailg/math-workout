<script lang="ts">
    import { onMount, afterUpdate } from "svelte";
    import { Question } from "../classes/Question";
    export let moveToNextQuestion = () => {}

    export let currentQuestion: Question = null;
    let userAnswer:string;
    let startTime: Date = new Date();
    const delay = 1000
    let inputElement: HTMLInputElement;
    let disableInput = false
    let solved = false;

    afterUpdate(()=>{
        inputElement?.focus()
    })

    function checkAnswer(){
        if(!currentQuestion) return;

        if(userAnswer == currentQuestion.Answer.toString()){
            solved = true;
            disableInput = true;

            //Move to next question or end workout after a period of time.
            setTimeout(()=>{
                currentQuestion.Solved = true;
                currentQuestion.CompletedIn = new Date().getSeconds() - startTime.getSeconds()
                userAnswer = ""
                disableInput = false;
                solved = false;
                moveToNextQuestion()
            },delay)
        }
    }
</script>

<div>
    {#if currentQuestion}
        <h2
        class={solved?"solved":""}>
            {currentQuestion.Description}
        </h2>
        
        <input 
        type="text" 
        bind:this={inputElement}
        bind:value={userAnswer} 
        on:input={checkAnswer}
        inputmode="numeric" 
        disabled={solved} 
        class={solved?"solved":""}>
    {/if}
</div>

<style>
    .solved{
        color: green;
    }
</style>