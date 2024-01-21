<template>
    <div class="max-w-4xl mx-auto px-4 xl:px-0 h-full">
        <h1 class="font-bold text-[3em] mb-12">Products in Cart</h1>
        <div class="flex flex-col">
            <div class="grid grid-cols-2 p-4 border border-gray-100 rounded-xl shadow-xl"
            v-for="item in cartItems"
            :key="item.id"
            >
                <img :src="item.imageName" class="h-[20vh]" />
                <div class="flex flex-frap mt-8">
                    <div class="w-full md:w.1/2">
                        <p>{{ item.name }}</p>
                        <p>{{ item.price }}</p>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</template>
<script>
import {cartItems} from '../temp-data'
export default {
    name: "ShoppingCart",
    data() {
        return {
            cartItems,
        }
    },
}
</script>