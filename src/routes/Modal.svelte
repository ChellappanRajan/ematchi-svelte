<script lang="ts">

</script>

<div class="overlay">
<slot>
</slot>
</div>


<style>
.overlay{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backdrop-filter: blur(10px);
    display: grid;
    place-items: center;
    z-index: 999;
}
</style>