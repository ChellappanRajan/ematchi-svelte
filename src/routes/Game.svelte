<script lang="ts">
  import { onMount } from "svelte";
  import Countdown from "./Countdown.svelte";
import Found from "./Found.svelte";
import Grid from "./Grid.svelte";
  import { LEVELS, type Level } from "./levels";

 const level = LEVELS.at(0)!;
 let size = level?.size;
 let grid:string[] = create_grid(level);
 let found:string[]= [];
 let duration = level.duration;
 let remaining = level.duration;
 let playing = false;
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
        if(playing) return;
        requestAnimationFrame(loop);
        remaining = remaining_at_start - (Date.now() - start);
        if(remaining <=0){
            playing = false;
            //Game Lost //TODO
        }
    }
    loop();
 }

 onMount(countdown);

</script>
<div class="game">
    <div class="info">
        <Countdown {remaining} duration={level.duration}  ></Countdown>
    </div>
    <div class="grid-container">
        <Grid on:found={(event)=>{
            found =[...found,event.detail.emoji]
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