<script lang="ts">
  import Game from "./Game.svelte";
  import '../style.css';
  import Modal from "./Modal.svelte";
  import { LEVELS } from "./levels";
	import { confetti } from '@neoconfetti/svelte'

  let levels = structuredClone(LEVELS) || [];

  let state: 'waiting' | 'playing' | 'paused' | 'won' | 'lost' = 'waiting'; 
  let game:Game;
</script>
<Game 
bind:this={game} 
on:play={
  ()=>{
    state = 'playing';
  }
}
on:lose={
  ()=>{
    state = 'lost';
  }
}
on:win={
  ()=>{
    state = 'won';
  }
}
on:pause={
  ()=>{
    state = 'paused';
  }
}
/>

{#if state !== 'playing'}
  <Modal>
    <header>
      <h1>e<span>matchi</span></h1>
      <p>the emoji matching game</p>
      <p>Choose a level</p>
    </header>
      <!-- {#if state === 'waiting'} -->

      {#if state == 'won' || state == 'lost'}
      <p>You {state} the game!</p>
      {:else if state == 'paused'}
        <p>game paused</p>
      {/if}

      <div class="buttons">
          {#if state == 'paused'}
          <button>resume</button>
          <button>quit</button>
          {:else}
            {#each levels as level}
            <button
            on:click={()=>{
              game.start(level);
            }}
            >{level.label}</button>
            {/each}
          {/if}
      </div>
   
      <!-- {/if} -->
  </Modal>
{/if}

{#if state === 'won'}
<div class="confetti" use:confetti />
{/if}


<style>
  h1{
    font-size: 5em;
  }
  h1 span{
    color: purple;
  }
  p{
    font-family: Grandstander;
  }
  .confetti{
    position: fixed;
    width: 100%;
    height: 100%;
    top:30%;
    left: 50%;
pointer-events: none;

}
</style>