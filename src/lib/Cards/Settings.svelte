<script lang="ts">
import { AmountOfQuestions, AmountOfNumbers, NumberLength, UseMultiply, UsePlus, UseMinus } from "../../stores";

</script>

<div class="m-5 box is-inline-block" style="max-width: 20rem;">
    <div class="is-size-5 mb-2">Settings ⚙️</div>
    <label for="amountofquestions">Questions per workout</label>
    <input  bind:value={$AmountOfQuestions} id="amountofquestions" class="input" type="number" placeholder="Questions per workout" min="5" max="100">
    <label for="amountofnumbers">Parts</label>
    <input bind:value={$AmountOfNumbers} id="amountofnumbers" class="input" type="number" placeholder="Numbers" min="2" max="3">
    <label for="numberlength">Number length</label>
    <input bind:value={$NumberLength} id="numberlength" class="input" type="number" placeholder="Max Number Length" min="1" max="6">
    <div class="is-size-6 mt-2 mb-2">Operations</div>
    <div>
        <button class="button {$UsePlus ? "is-primary" : ""}" on:click={() => UsePlus.set(!$UsePlus)}>➕</button>

        <button class="button {$UseMinus ? "is-primary" : "" }" on:click={() => UseMinus.set(!$UseMinus)}>➖</button>
        
        <button class="button {$UseMultiply ? "is-primary" : ""}" on:click={() => UseMultiply.set(!$UseMultiply) }>✖️</button>
    </div>
</div>