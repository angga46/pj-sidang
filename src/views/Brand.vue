<template>
    <div class="mt-20 text-center">
        <span class="font-bold text-4xl">All Brands</span>
    </div>
    <div class="grid grid-cols-4 gap-3 mt-5">

        <div v-for="brand in getBrand.data.slice(0, 8)" :key="brand.id">
            <a href="#"
                class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    :src="brand.logo" alt="">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ brand.name }}</h5>
                </div>
            </a>
        </div>

    </div>
</template>
    
<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('brand', ['getBrand']),
    },
    methods: {
        ...mapActions('brand', ['fetchBrand'])
    },
    created() {
        this.fetchBrand();
    },
}
</script>