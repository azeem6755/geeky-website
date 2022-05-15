<template>
    <div>
        <nav-bar/>
        <section name="intro" class="intro-div ">
            <div>
                <img src="@/assets/logo.png" class=" border bg-white p1 border-light-gray circle square-100 lazyloaded"/>
                <h1>Azeem Shaikh</h1>
                <p class="sub-text body-font gray mt-0 h3 regular">Software Engineer, Reader, Gamer, Mujhe kaam do kaam do</p>
            </div>
        </section>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'

export default {
    name: 'HomePage',
    components: {
        NavBar
    }

}
</script>

<style scoped>
    .intro-div {
        background-color: #f5f8fa;
        border-bottom: 1px solid rgba(0, 0, 0, .125);
        padding: 2rem;
        text-align: center;
    }

    .circle {
        border-radius: 50%;
    }

    .sub-text {
        font-family: 'Merriweather', serif !important;
        color: gray;
    }
</style>
