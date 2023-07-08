<script lang="ts">
import { AmountOfNumbers, NumberLength } from "../stores/stores";
</script>

<div class="m-5 box is-inline-block">
    <div class="is-size-5 mb-2">Settings</div>
    <label for="amountofnumbers">Parts</label>
    <input bind:value={$AmountOfNumbers} id="amountofnumbers" class="input" type="number" placeholder="Numbers" min="1" max="3">
    <label for="numberlength">Number length</label>
    <input bind:value={$NumberLength} id="numberlength" class="input" type="number" placeholder="Max Number Length" min="1" max="6">

</div>