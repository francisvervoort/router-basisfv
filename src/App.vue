<template>
    <div id="app">
        <app-header/>
        <router-view/>
    </div>
</template>

<script>
import AppHeader from "./layouts/AppHeader.vue";
export default {
    components: {
    AppHeader
    }
}
</script>

<style>         /*zonder scoped*/
* {
    padding: 0;
    margin: 0;                  /*margin is aan buitenkant, buiten de eventuele rand*/
    box-sizing: border-box;
}

html {
    font: 62.5% 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  /*elders is em relatief tov fontsize op html, er kan ook een lijnhoogte  62.5%/1.5*/
}
body {
    font-size: 1.6rem;  /* */
}

a {
    text-decoration: none;  /*underlining weg overal, standaard was die er wel*/
    color: inherit;         /*kleur link standaard blauw, nu inherit zorgt voor de parent-kleur, initial zou terug browserstandaard zijn*/
}
</style>
