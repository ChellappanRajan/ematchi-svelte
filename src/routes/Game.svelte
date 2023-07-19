<script lang="ts">
  import Grid from "./Grid.svelte";
  import { LEVELS, type Level } from "./levels";

 const level = LEVELS.at(0)!;
 let size = level?.size;
 let grid:string[] = create_grid(level);
 let found:string[]= [];
    console.log(grid);
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

</script>
<div class="game">
    <div class="info">

    </div>
    <div class="grid-container">
        <Grid on:found={(event)=>{
            found =[...found,event.detail.emoji]
        }} {grid}
        {found}
        ></Grid>
    </div>
    <div class="info">

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
        background: purple;
    }
    .grid-container{
        width: 80em;
        height: 80em;
        background: teal    ;
    }
</style>