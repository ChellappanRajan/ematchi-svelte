<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import Countdown from "./Countdown.svelte";
import Found from "./Found.svelte";
import Grid from "./Grid.svelte";
import type {Level} from "./levels";

 let size:number;
 let grid:string[] = [];
 let found:string[]= [];
 let duration:number = 0;
 let remaining:number = 0;

 let playing = false;
 const dispatch = createEventDispatcher();
 function create_grid(level:Level){
    const copy = structuredClone(level.emojis);
    const pairs:string[] = [];
    for(let i =0;i<level.size ** 2/2;i+=1){
        const index = Math.floor(Math.random() * pairs.length);
        const emoji = copy[index];
        //Remove already selected emoji from copy
        copy.splice(index,1);
        pairs.push(emoji);
    }
    pairs.push(...pairs);
    return pairs;
 }

 function countdown(){
    const start = Date.now();
    let remaining_at_start = remaining;
    function loop() {
        if(!playing) return;
        requestAnimationFrame(loop);
        remaining = remaining_at_start - (Date.now() - start);
        if(remaining <=0){
            playing = false;
            dispatch('lose');
        }
    }
    loop();
 }

 export function start(level:Level){
    size = level.size;
    grid =  create_grid(level);
    remaining = duration = level.duration;
    
    resume();
 }


 function resume(){
    playing = true;
    countdown();
    dispatch('play');
 }



</script>
<div class="game" style="--size:{size}">
    <div class="info">
        {#if playing}
        <Countdown on:click={()=>{
            playing = false;
            dispatch('pause');
        }} {remaining} {duration}  ></Countdown>
        {/if}
    </div>
    <div class="grid-container">
        <Grid on:found={(event)=>{
            found =[...found,event.detail.emoji];
            if(found.length === (size * size) / 2){
                dispatch('win');
            }
        }} {grid}
        {found}
        ></Grid>
    </div>
    <div class="info">
        <Found {found}></Found>
    </div>
</div>

<style>
    .game{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-size: min(1vmin,0.5rem);
    }
    .info{
        width: 80em;
        height: 10em;

    }
    .grid-container{
        width: 80em;
        height: 80em;   
    }
</style>