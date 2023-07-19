<script lang="ts">
  import Square from "./Square.svelte";
  export let grid:string[];
  let a = -1;
  let b = -1;
  let clearTimeOutID:number;
  const onSelect = ()=>{
    // console.log(e);
  }
</script>
<div class="grid">
    {#each grid  as emoji,i}
    <Square on:click={(evt)=>{
        clearTimeout(clearTimeOutID);
        if(a === -1 && b === -1){
            a = i;
        }else if(b === -1){
            b = i;
            if(grid[a] === grid[b]){
                //correct
            }else{
                //incorrect reset
                clearTimeOutID = setTimeout(() => {
                    a = b = -1;
                },1000);
            }
        }else{
            b = -1;
            a = i;
        }
    }} {emoji}
    selected={a === i || b === i}
    ></Square>
    {/each}
</div>

<style>
    .grid{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-template-rows: repeat(4,1fr);
        height: 100%;
        grid-gap: 0.5em;
    }
</style>