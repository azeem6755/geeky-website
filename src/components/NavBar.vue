<template>
    <div class="navigation-div">
        <b-nav>
            <b-nav-item to="/" style="float: left;">Azeem Shaikh</b-nav-item>
            <b-nav-item to="/about" class="navigation-item" style="float: right;">About me</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .navigation-div{
      border-bottom: 1px solid gray;
      padding: 0.75em;
    }

    .navigation-item {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 0.75rem;
        text-transform: uppercase;
        padding: 1em 0;
    }
</style>
