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
                     :alt="`Afbeelding van ${product.naam}`">
                </figure>
                <footer class="product-prijs">
                   &euro;{{product.prijs}}
                </footer>
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
            categories                     /*of categories: categories */
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
    color: #40b782;
}

hr {
    margin: 2rem 0;
}
</style>