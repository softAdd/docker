<template>
    <div class="wrap">
        <button type="button">Press to Get DATA</button>
        <p>Some Data:</p>
    </div>
</template>

<script>
    export default {
        name: 'Example'
    }
</script>

<style scoped>
.wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
}
.wrap button {
    background-color: green;
    color: white;
    height: 100px;
}
</style>