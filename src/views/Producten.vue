<template>
    <div class="producten">
        <h1>Producten</h1>
        <div class="producten-lijst">
            <!-- het directive tag bij router-link verandert het gegenereerde 
                 element naar het gekozen element (ipv standaard een a-element te worden) -->
            <router-link class="product-kaart"
            v-for="product1 of producten"
            :key="product1.id" 
            :to="`producten/${product1.id}`"
            tag="div"
            >             <!-- router-link is een soort a href-ankerelem, 
                        // hier een div van gemaakt, niet in-line -->
                        <!-- doorgeven van route van detail al klaargemaakt, in router.js? 
                // via :productAId  prop die wijzigingen doorgeeft van ouder naar component-->
                        <!-- route met pad, dat adresbalk gaat veranderen    :to="..." -->
                <header class="product-header">
                   {{product1.naam}}
                </header>
                <figure class="img-container">
                    <img :src="maakAfbeeldingUrl(product1)"
                         :alt="`Afbeelding van ${product1.naam}`"
                    >
                    <figcaption class="product-prijs">
                        &euro;{{ product1.prijs }}
                    </figcaption>
                </figure>   
            </router-link>
        </div>
    </div>
</template>

<script>
// @ is een alias voor de rootmap (src), zoekt zelf het pad
// Destructuring wordt gebruikt om variabelen te maken
// van de eigenschappen van het geëxporteerde object
//      import  { producten, categories } from '@/producten.js'  // weg 28022019, prod valt weg door axios 39
//console.log(producten, categories); //te zien na vernieuwen
import { categories } from '@/producten.js'  // 2 regels bij 39 + 40 ipv 37 door toevoegen axios, geen prod meer
import axios from 'axios'

export default {
    data() {
        return {
            //waarde van eigenschappen komt van geimporteerde variabelen
 //           producten: producten, //28022019 wordt vervangen door regel 47, na axios 40
            producten: [],
            categories,                    /*of categories: categories */
              // process.env geeft ons toegang tot omgevingsvariabelen van het project
            // de eig. BASE_URL wordt door Vue ingevuld met het absolute adres van de webapplicatie
            
            baseUrl: process.env.BASE_URL  //  publicPath ipv baseUrl kan of nog andere benaming?, maar dan ook elders aanpassen
        }      
    },
    methods: {
        maakAfbeeldingUrl(product1) {
            // Absoluut pad naar juiste afbeelding opbouwen
            return `${this.baseUrl}producten/${product1.categorie}/${product1.afbeelding}`;       
            //  publicPath ipv baseUrl kan, maar dan ook elders
        }
    },
     async created() {                         //  (in vervanging van vorige created() 47 en 54 tgv axios)?????
        try {
            const { data } = await axios.get("http://localhost:3333/producten");
            this.producten = data;
        } catch (ex) {
            console.log(ex);            
        }
     } 
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
    color: #40B782;
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