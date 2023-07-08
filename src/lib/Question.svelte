<script lang="ts">
    import { afterUpdate } from "svelte";
    import { Question } from "../classes/Question";
    export let moveToNextQuestion = () => {}

    export let currentQuestion: Question = null;
    let userAnswer:string;
    let startTimestamp: number = new Date().getTime();
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
                currentQuestion.CompletedIn = Math.round((new Date().getTime() - startTimestamp) / 10) / 100
                userAnswer = ""
                disableInput = false;
                solved = false;
                moveToNextQuestion()
                startTimestamp = new Date().getTime()
            },delay)
        }
    }
</script>

<div>
    {#if currentQuestion}
        <div class="box is-inline-block has-text-centered 
        {solved?"solved":""}">
            <div
            class="is-size-3">
                {currentQuestion.Description}
            </div>
            
            <input 
            type="text" 
            bind:this={inputElement}
            bind:value={userAnswer} 
            on:input={checkAnswer}
            inputmode="numeric" 
            disabled={solved} 
            class="is-size-3 is-text-weight-bold answer-input">
        </div>
    {/if}
</div>

<style>
    .answer-input{
        border: none;
        outline: none;
    }

    .solved{
        color: white;
        background: rgb(14,217,157);
background: radial-gradient(circle, rgba(14,217,157,1) 0%, rgba(54,231,179,1) 100%);
        transition:ease-in-out 100ms
    }

    .box input:disabled {
    background-color: transparent;
    color: inherit;
    border: none;
    opacity: 1;
  }
</style>