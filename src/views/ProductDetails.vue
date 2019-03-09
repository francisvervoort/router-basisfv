<template>
    <div class="product-details">
       <h4 class="terug">
            <a @click.prevent="$router.go(-1)">&lt; Terug</a> <!-- Router(geschiedenis) aanspreken en 1 X terug.
                                                                 // $router: globaal beschikbaar  -->
        </h4>
        <div class="product-container">
            <div class="product-afbeelding">
                <img :src="maakAfbeeldingUrl(huidigProduct)" :alt="huidigProduct.naam">
            </div>
            <div class="product-gegevens-container">
                <div class="product-gegevens">
                    <h2>{{ huidigProduct.naam }}</h2>
                    <p class="product-beschrijving">{{ huidigProduct.beschrijving }}</p>
                    <p class="product-prijs">€ {{ huidigProduct.prijs }}</p>
                    <button>Leg in winkelmand</button>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import { producten } from '@/producten.js'
export default {
   data() {
        return {
            huidigProduct: {},  //zie created()
            producten,          // producten: producten,
            baseUrl: process.env.BASE_URL
        }
    },
    props: {
        productAId: String, // Props vanuit een dynamische route zijn altijd strings //zie ook router.js
    },
    methods: {
        maakAfbeeldingUrl(product1) {
            // Absoluut pad naar juiste afbeelding opbouwen
            return `${this.baseUrl}producten/${product1.categorie}/${product1.afbeelding}`; 
        //binnen `` worden expressions of the form ${...} parsed and evaluated inline immediatly
        //    return `/producten/${product1.categorie}/${product1.afbeelding}`;  
        //  ${this.baseUrl} kan vervangen door / als we rechtstreeks onder route-domein werken.
        }
    },
        // Lifecycle hook created() is de eerste keer dat het data-object beschikbaar wordt gesteld.
        // data en  computed moeten al beschikbaar zijn.
    created() {
        // this.huidigProduct = this.producten.find(product => Number(this.productId) === product.id);
        //vereenvoudigde voorstelling; == zou none geven bij fout, niet goed
        //Created () hier gebruiken: data zijn er al, hier manipuleren.  find() geeft true of false
        // String naar getal omzetten kan via de unary operator +
        // Gebruik de operator net voor een string
        // Is hetzelfde als de functie Number()
        this.huidigProduct = this.producten.find(product1 => +this.productAId === product1.id);
    }  
    
    
}
</script>

<style scoped>
.terug {
    color: #8FD5B5;
    font-size: 2rem;
    margin: 3rem 0;
    text-align: center;
}

.terug a {
    cursor: pointer;
}

.product-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 450px));
    grid-column-gap: 40px;
    justify-content: center;
}

@media screen and (max-width: 640px) {
    .product-container {
        display: block;
    }
}

.product-afbeelding img {
    max-width: 100%;
}

.product-gegevens {
    background-color: #8FD5B5;
    color: white;
    padding: 2.5rem;
}

.product-gegevens h2 {
    font-size: 2.5rem;
}

.product-prijs {
    font-weight: bold;
}

.product-gegevens button {
    display: block;
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 80%;
    padding: 1.5rem;
    background-color: #41B883;
    color: white;
    border: none;
    cursor: pointer;
}


</style>
