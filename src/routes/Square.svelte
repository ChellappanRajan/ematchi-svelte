<script lang="ts">
    export let emoji:string;
</script>

<div class="square">
  <span>
    {emoji}
  </span>
</div>

<style>
    .square{
        display: flex;
        align-items: center;
        justify-self: center;
    }
    span{
        font-size: 5em;
    }
</style>