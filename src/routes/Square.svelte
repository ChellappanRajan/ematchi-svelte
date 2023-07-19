<script lang="ts">
    export let emoji:string;
    export let selected:boolean;
</script>

<div class="square" class:flipped={selected}>
  <button on:click/>
  <span>
    {emoji}
  </span>
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

    span{
        font-size: 5em;
        pointer-events: none;
    }
</style>