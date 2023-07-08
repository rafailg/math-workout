<script lang="ts">
    import { CurrentWorkout } from "../stores/stores";
</script>

<div>
    {#if $CurrentWorkout}
        <div class="box is-inline-block m-5">
            <div class="is-size-3 mb-5">Results 💯</div>

            <table class="table is-bordered is-striped is-narrow is-hoverable">
                <thead>
                    <th>Question</th>
                    <th>Status</th>
                    <th>Prompt</th>
                    <th>Response</th>
                    <th>Time(seconds)</th>
                </thead>
                <tbody>
                    {#each $CurrentWorkout.Questions as question, i}
                    <tr>
                        <td>{i+1}</td>
                        <td>{question.Solved?"Solved":"Failed"}</td>
                        <td>{question.Description}</td>
                        <td>{question.Answer}</td>
                        <td>{question.CompletedIn}</td>
                    </tr>
                    {/each} 
                </tbody>
            </table>
        </div>
    {/if}
</div>