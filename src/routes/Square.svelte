<script lang="ts">
  import { get_twemoji } from "./util";

    export let emoji:string;
    export let selected:boolean;
    export let found:boolean;
</script>

<div class="square" class:flipped={selected}>
  <button on:click/>
  {#if !found}
    <img src="   {get_twemoji(emoji)}" alt="   {get_twemoji(emoji)}">
  {/if}

</div>

<style>
    .square{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button{
      position: absolute;
      width:100%;
      height: 100%;
    }
    .flipped button{
      background-color: rebeccapurple;
    }

    img{
        width: 5em;
        height: 5em;
        pointer-events: none;
    }
</style>