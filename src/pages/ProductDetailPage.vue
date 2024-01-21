<template>
    <div class="max-w-4xl mx-auto px-4 xl:px-0 h-full">
        <div class="">
            <img :src="product.imageName" class="h-[44vh] mx-auto mb-12" />
            <div class="w-1/2 mx-auto text-center">
                <div class="w-full md:w.1/2">
                    <h2 class="font-bold text-3xl">{{ product.name }}</h2>
                    <p>{{ product.price }}</p>
                </div>
                <div class="mt-8">
                    <button class="px-6 py-3 bg-black text-white rounded-full">Add to Cart</button>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import { products } from '../temp-data'
export default {
    name: "ProducDetailtPage",
    data() {
        return {
            // catch product id from
            product: products.find(product => product.id === this.$route.params.productId),
        }
    }
}
</script>