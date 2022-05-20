<template>
    <div class="navigation-div">
        <div class="go-home-div button-transparent">
            <a href="/" class="home-text">Azeem Shaikh</a>
        </div>
        <b-nav class="navigation">
            <b-nav-item to="/projects" class="navigation-item">Projects</b-nav-item>
            <b-nav-item to="/contact-me" class="navigation-item">Contact Me</b-nav-item>
        </b-nav>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
    .navigation-div{
        display: flex;
        border-bottom: 1px solid gray;
        justify-content: space-between;
    }

    .navigation-item {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 0.75rem;
        text-transform: uppercase;
        padding: 1em 0;
        color: rgb(46, 46, 46) !important;
    }

    .navigation-item .nav-link {
        color: rgb(46, 46, 46)
    }

    .home-text {
        text-transform: uppercase;
        font-family: 'Montserrat';
        font-weight: 700;
        text-decoration: none;
        font-size: 1.5rem;
        color: rgb(46, 46, 46);
        padding: 1em 0.5em;
        transition: color 300ms ease-in-out;
    }

    .home-text:hover {
        color: rgb(4, 138, 161)
    }

    .go-home-div {
        padding: 0.75em 0;
    }

    .button-transparent {
        background-color: transparent;
        border: 1px solid transparent;
        transition: box-shadow,background-color 300ms ease-in-out;
        border-radius: 0px;
    }

    .button-transparent:hover {
        color: rgb(15, 101, 230);
        background-color: #abd3f5;
        border-radius: 3px;
        cursor: pointer
    }

    .hamburger {
        display: none;
    }

    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: #101010;
    }

    @media screen and (max-width: 586px) {
        .navigation {
            display: none;
        }

        .hamburger {
            display: block;
            
        }
    }
</style>
