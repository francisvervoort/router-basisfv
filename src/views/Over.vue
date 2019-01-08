<template>
  <div class="over">                   <!-- main ipv div, geldt alleen voor Home  -->
    <h1>Over ons</h1>
    <article>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur, quod enim quis doloribus sequi, possimus fugiat, unde ex mollitia laboriosam? Autem ipsum in aut corporis minima. Doloremque laboriosam iste repudiandae praesentium iusto, totam explicabo eum ullam! Laudantium dignissimos, dolorum, assumenda dolor iste, sunt laboriosam inventore porro alias perspiciatis odit? Consequuntur veniam, libero tempore numquam deleniti aspernatur, cum quis iure repellendus nemo voluptates beatae ratione, praesentium hic non excepturi nulla suscipit? Quia pariatur in reprehenderit itaque nemo cupiditate est? Laboriosam reiciendis, quia in, fugit commodi, minus ducimus tempore obcaecati ipsa repellendus ipsum cupiditate officia unde velit iste temporibus nihil vitae.
        </p>
        <hr>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis asperiores qui quam eos dolores dicta repellat voluptate totam repellendus. Hic, asperiores? Dolorum provident illum neque explicabo. Ipsum deleniti odit, quasi labore nisi in! Porro earum tempore est blanditiis, excepturi eligendi fugit! Suscipit voluptates perspiciatis necessitatibus soluta fugit sint, incidunt exercitationem, consectetur odit illo alias. Sunt perferendis quae asperiores placeat?
        </p>
    </article>
  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
 
}
</script>

<style scoped>
.over {
    display: flex;              /*      zonder flex edm 2 blokken naast elkaar */
    flex-direction: column;
    align-items: center;
    padding: 5rem 3rem;
}

article {
    padding: 3rem;      /*zonder padding plakt het tegen de kanten*/
    text-align: justify;   /*  Tekst en hr uitvullen, zo ook hr evenlang als tekst*/
    max-width: 1152px;  /* anders onaangenaam om te lezen, zeker bij 4K */
    line-height: 1.6;   /* 1.6 van het huidige, zonder rem schaalt het mee?   meer spatie tussen de lijnen?*/
}

h1 {
  font-size: 7rem;
  color: #40B782;
}

hr {
  margin: 2rem 0;   /* marge tussen tekst en hr-lijn */
}
</style>

