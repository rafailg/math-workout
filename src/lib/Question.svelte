<script lang="ts">
    import { Question } from "../classes/Question";
    export let moveToNextQuestion = () => {}

    export let currentQuestion: Question = null;
    let userAnswer:string;
    let startTime: Date = new Date();

    function checkAnswer(){
        if(!currentQuestion) return;

        if(userAnswer == currentQuestion.Answer.toString()){
            alert("Correct answer!")
            currentQuestion.Solved = true;
            currentQuestion.CompletedIn = new Date().getSeconds() - startTime.getSeconds()
            userAnswer = ""
            moveToNextQuestion()
        }
    }

</script>

<div>
    {#if currentQuestion}
        <h2>{currentQuestion.Description}</h2>
        <input type="text" bind:value={userAnswer} on:input={checkAnswer} inputmode="numeric">
    {/if}
</div>