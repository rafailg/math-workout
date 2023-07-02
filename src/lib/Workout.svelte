<script lang="ts">
    import { CurrentWorkout, Workouts } from "../stores/stores";
    import { Workout } from "../classes/Workout";
    import QuestionComponent from "./Question.svelte";
    let workout: Workout;
    let questionIndex = 0;
    let currentQuestion;

    CurrentWorkout.subscribe(currentWorkout =>{
        if(currentWorkout){
            workout = currentWorkout;
            questionIndex = 0;
            console.log("Setting current workout question")
            currentQuestion = workout.Questions[questionIndex]
        }
    })

    function moveToNextQuestion(){
        console.log("Moving to next question")
        if(questionIndex < workout.Questions.length - 1){
            questionIndex++;
            currentQuestion = workout.Questions[questionIndex]
        }else{
            $Workouts.push(workout)
            $CurrentWorkout.Completed = true
        }
    }
</script>

<div>
    <h3>Workout</h3>
    <h4>Question {questionIndex} out of {workout.Questions.length}</h4>
    <QuestionComponent bind:currentQuestion={currentQuestion} moveToNextQuestion={moveToNextQuestion} ></QuestionComponent>
</div>