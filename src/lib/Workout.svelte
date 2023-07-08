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
            currentQuestion = workout.Questions[questionIndex]
        }
    })

    function moveToNextQuestion(){
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
    <div class="is-flex is-justify-content-center">
        <div>
            <div class="has-text-centered m-5">
                <h3 class="is-size-4">Workout</h3>
                <h4 class="has-text-weight-bold">Question {questionIndex + 1} out of {workout.Questions.length}</h4>            
            </div>

            <QuestionComponent bind:currentQuestion={currentQuestion} moveToNextQuestion={moveToNextQuestion} ></QuestionComponent>
        </div>
    </div>
</div>

<style>

</style>