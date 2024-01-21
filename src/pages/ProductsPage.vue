<template>
    <div class="max-w-7xl mx-auto px-4 xl:px-0 h-full">
        <h1 class="font-bold text-[3em] mb-12">Products</h1>
        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="p-4 border border-gray-100 rounded-xl shadow-xl"
            v-for="product in products"
            :key="product.id"
            >
                <img :src="product.imageName" />
                <div class="flex flex-frap mt-8">
                    <div class="w-full md:w.1/2">
                        <p>{{ product.name }}</p>
                        <p>{{ product.price }}</p>
                    </div>
                    <div class="ml-auto">
                        <button class="px-6 py-3 bg-black text-white rounded-full">Details</button>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import {products} from '../temp-data'
export default {
    name: "ProductPage",
    data() {
        return {
            products,
        }
    },
}
</script>