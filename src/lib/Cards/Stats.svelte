<script lang="ts">
    import { Workouts } from "../../stores/stores";

    let totalWorkouts = 0;
    let totalQuestions = 0;
    let averageSpeed = 0;
    let completionRate = 0;

    Workouts.subscribe((workouts) => {
        totalWorkouts = workouts.length;
        let totalSpeed = 0;
        let completed = 0;
        workouts.forEach((workout) => {
            totalQuestions += workout.Questions.length;
            workout.Questions.forEach((question) => {
                totalSpeed += question.CompletedIn;
                if (question.Solved) {
                    completed++;
                }
            });
        });
        averageSpeed = Math.round(totalSpeed / totalQuestions);
        completionRate = (completed / totalQuestions) * 100;
    });
</script>

<div class="m-5 box is-inline-block">
    <div class="is-size-5 mb-2">Performance 📊</div>
    <h4>Workouts: {totalWorkouts}</h4>
    <h4>Questions: {totalQuestions}</h4>
    <h4>Average Speed: {averageSpeed || 0}</h4>
    <h4>Completion Rate: {completionRate || 0}%</h4>
</div>
