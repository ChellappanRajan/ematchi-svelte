<script lang="ts">
  import { get_twemoji } from "./util";


export let found:string[];
</script>

<div class="found">
    {#each  found as emoji (emoji) }
        <span>
            <img src="   {get_twemoji(emoji)}" alt="{get_twemoji(emoji)}">
        </span>
    {/each}
</div>

<style>
    .found{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
       width: 4em;
       height: 4em;
    }
</style>