<template>
    <nav class="app-header">
        <h1>
            Beau-tique     <!--  Nadenken over naam, want op elke pagina. -->
        </h1>
        <div class="nav-groep">
            <router-link to="/" exact>Home</router-link>
            <router-link to="/producten" >Producten</router-link>
            <router-link to="/over" >over</router-link>
            <router-link to="/contact" >Contacteren</router-link>
        </div>

    </nav>
</template>

<script>
export default {

}
</script>

<style>
.app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #40B782;
    height: 6rem;
    padding: 0 3rem;
    color: #fff;
}
.nav-groep a {
    margin: 0 3rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #8FD5B5;
    transition: color 0.3s;
}

.nav-groep a:hover {
    columns: #fff;;
}

.nav-groep a.router-link-active {           /*router-link-active is een creatie van vue, dus geen a:active*/
    color: #fff;
}
</style>
