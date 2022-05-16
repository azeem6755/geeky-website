<template>
    <div>
        <nav-bar/>
        <section name="intro" class="intro-div ">
            <div>
                <img src="@/assets/azeem-avatar.png" class=" border bg-white p1 border-light-gray circle square-150 lazyloaded change"/>
                <h1 class="titles">Azeem Shaikh</h1>
                <p class="sub-text body-font gray mt-0 h3 regular">Software Engineer, Reader, Gamer, Traveller</p>
            </div>
        </section>
        <section name="about-me" class="about-me">
            <b-container>
                <b-row>
                    <b-col md="3" offset-md="3" cols="12">
                        <div class="about-me-title mb2">
                            <h3>About Me</h3>
                        </div>
                        <div class="about-me-text">
                            Hi, I am Azeem Shaikh. I am a Full Stack Engineer working with Django and Vue.
                            I love solving problems, traveling, reading, and going on long walks. 
                            I have spent the past two years creating pipelines for report generation and a web dev project here and there.
                            I am currently learning AWS, and this will be deployed using AWS Amplify.
                        </div>
                    </b-col>
                    <b-col class="contact-div" md="4" cols="12">
                        <div class="contact-title mb2">
                            <h3>Contact</h3>
                        </div>
                        <div class="contact-items">
                            <div class="contact">
                                <b-icon-twitter class="icon"></b-icon-twitter>
                                <a href="https://twitter.com/azeemshaikh1997" target="_blank" class="contact-link">Twitter</a>
                            </div>
                            <div class="contact">
                                <b-icon-linkedin class="icon"></b-icon-linkedin>
                                <a href="https://www.linkedin.com/in/azeem-shaikh-629686118/" target="_blank" class="contact-link">LinkedIn</a>
                            </div>
                            <div class="contact">
                                <b-icon-github class="icon"></b-icon-github>
                                <a href="https://github.com/azeem6755" target="_blank" class="contact-link">Github</a>
                            </div>
                            <div class="contact">
                                <b-icon-envelope class="icon"></b-icon-envelope>
                                <a href="mailto:azeem6755@gmail.com" target="_blank" class="contact-link">Email</a>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
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
        margin-bottom: 2em;
    }

    .circle {
        border-radius: 50%;
    }

    .sub-text {
        font-family: 'Merriweather', serif !important;
        color: gray;
    }

    .square-150 {
        height: 150px;
        width: 150px;
    }

    .change {
        filter: grayscale(100);
        transition: filter 300ms ease-in;
    }
    .change:hover {
        filter: grayscale(0)
    }

    .about-me-text {
        text-align: left;
        color: rgb(46, 46, 46);
        letter-spacing: 0.16px;
        line-height: 28px;
    }

    .intro-div .titles {
        font-size: 3em;
    }

    .titles {
        font-family: 'open sans', sans-serif;
        font-weight: 700;
        line-height: 1.25em;
    }

    .about-me-title h3, .contact-title h3 {
        font-size: 1.5em;
        font-weight: 700;
    }
    

    .contact-div {
        margin-left: 5em;
    }

    .contact-items {
        display: flex;
        flex-direction: column;
    }

    .contact {
        margin-bottom: 0.5em;
    }

    .icon {
        margin-right: 0.5em;
        font-size: 1.5em;
    }

    .contact-link {
        text-decoration: none;
        color: rgb(46, 46, 46)
    }

    .contact-link:hover {
        color: #663F46;
        font-weight: 700;
    }
</style>
