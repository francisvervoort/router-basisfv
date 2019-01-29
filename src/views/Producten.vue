<template>
    <div class="producten">
        <h1>Producten</h1>
        <div class="producten-lijst">
            <div class="product-kaart"
            v-for="product of producten"
            :key="product.id" 
            >
                <header class="product-header">
                   {{product.naam}}
                </header>
                <figure class="img-container">
                    <img :src="maakAfbeeldingUrl(product)"
                         :alt="`Afbeelding van ${product.naam}`"
                    >
                    <figcaption class="product-prijs">
                        &euro;{{ product.prijs }}
                    </figcaption>
                </figure>   
            </div>
        </div>
    </div>
</template>

<script>
// @ is een alias voor de rootmap (src), zoekt zelf het pad
// Destructuring wordt gebruikt om variabelen te maken
// van de eigenschappen van het geëxporteerde object
import  { producten, categories } from '@/producten.js'
//console.log(producten, categories); te zien na vernieuwen


export default {
    data() {
        return {
            //waarde van eigenschappen komt van geimporteerde variabelen
            producten: producten,
            categories,                    /*of categories: categories */
              // process.env geeft ons toegang tot omgevingsvariabelen van het project
               // de eig. BASE_URL wordt door Vue ingevuld met het absolute adres van de webapplicatie
               baseUrl: process.env.BASE_URL            //  publicPath ipv baseUrl kan of nog andere benaming?, maar dan ook elders
        }
       
    },
    methods: {
        maakAfbeeldingUrl(product) {
            // Absoluut pad naar juiste afbeelding opbouwen
            return `${this.baseUrl}producten/${product.categorie}/${product.afbeelding}`;       //  publicPath ipv baseUrl kan, maar dan ook elders
        }
    }, 
}
</script>

<style scoped>
.producten {
  display: flex; 
  flex-direction: column; 
  align-items: center;
  padding-top: 5rem;     
}

h1 {
    font-size: 7rem;
    color: #40b782;
}

.product-kaart {
    text-align: center;
}
.producten-lijst {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: 5rem;
    row-gap: 5rem;
}

.img-container img {
    height: 250px;
}

</style>