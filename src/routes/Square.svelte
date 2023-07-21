<script lang="ts">
  import { send } from "./transition";
  import { get_twemoji } from "./util";

    export let emoji:string;
    export let selected:boolean;
    export let found:boolean;
    export let group:'a' | 'b';
</script>

<div class="square" class:flipped={selected || found}>
  <button on:click/>
  <div class="background" />
  {#if !found}
    <img 
    src="{get_twemoji(emoji)}" 
    alt="{emoji}" 
    out:send={{ key: `${emoji}:${group}` }}
    />
  {/if}

</div>

<style>
    .square{
        display: flex;
        align-items: center;
        justify-content: center;
        transform-style: preserve-3d;
        transition: transform 0.4s;
    }
    .background{
      background-color: white;
      border:0.5em solid #eee;
      transform: rotateY(180deg);
      backface-visibility: hidden;
      position: absolute;
      width:100%;
      height: 100%;
      border-radius: 1em;
    }
    button{
      position: absolute;
      width:100%;
      height: 100%;
      backface-visibility: hidden;
      border: 0;
      border-radius: 1em;
      background: #eee;
    }
    .flipped{
     
      transform: rotateY(180deg);
    }

    img{
        width: 5em;
        height: 5em;
        pointer-events: none;
        transform: rotateY(180deg);
        backface-visibility: hidden;
    }
</style>