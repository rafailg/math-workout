<script lang="ts">
    import { Workouts, CurrentWorkout } from "../stores/stores";
    import { Workout, CreateWorkout } from "../classes/Workout";
    let totalWorkouts = 0;
    let totalSets = 0;
    let totalQuestions = 0;
    let averageSpeed = 0;
    let completionRate = 0;

    Workouts.subscribe((workouts)=>{
        totalWorkouts = workouts.length;
        let totalSpeed = 0;
        let completed = 0;
        workouts.forEach((workout)=>{
            totalQuestions += workout.Questions.length
            workout.Questions.forEach((question)=>{
                totalSpeed += question.CompletedIn;
                if(question.Solved){
                    completed++;
                }
            })
        })
        averageSpeed = totalSpeed/totalQuestions;
        completionRate = (completed/totalQuestions)*100
    })

    function startWorkout(){
        let workout: Workout = CreateWorkout(10)
        CurrentWorkout.set(workout)
    }

</script>

<div>
    <div>
        <h4>Workouts: {totalWorkouts}</h4>
        <h4>Sets: {totalSets}</h4>
        <h4>Questions: {totalQuestions}</h4>
        <h4>Average Speed: {averageSpeed || 0}</h4>
        <h4>Completion Rate: {completionRate || 0}%</h4>

        <button on:click={startWorkout}>Start new workout</button>
    </div>
</div>

<style>

</style>