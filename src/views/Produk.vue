<template>

    <br>
        <br>
    
        
    
    <div class="my-20 mx-auto flex w-screen max-w-screen-lg flex-col rounded-3xl bg-green-50 px-4">
      <p class="mt-20 text-center sm:text-lg font-semibold text-lime-500">Our Blog</p>
      <h1 class="mx-auto mt-2 max-w-3xl text-center text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">Tampilan produk dari situs web penjualan</h1>
      <p class="mx-auto hidden sm:block mt-4 max-w-5xl text-center text-gray-500 sm:mt-8 sm:text-lg">Dapatkan Diskon Setiap Harinya Hingga 80%</p>
    
      <div class="mx-auto mt-8 mb-20 flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-6">
        <button class="rounded-full bg-black px-10 py-3 font-medium text-white hover:opacity-80 sm:w-auto">Get Started</button>
     <a href="#produk">   <button class="rounded-full border-2 border-black px-10 py-3 font-medium text-black transition hover:bg-black hover:text-white sm:w-auto">Mulai Melihat</button></a>
      </div>
    </div>
    
      <div v-if="getProduk == undefined">Loading....</div>
    <div v-else>
    <div class="grid md:grid-cols-3 gap-8  mt-10 pl-5" id="produk">
       <div  v-for="product in getProduk.slice(1,7)" :key="product.slug">
           
       <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
           <a href="#">
               <img class="h-60 rounded-t-lg object-cover"
                   src="https://ecommerce.olipiskandar.com/public/uploads/all/UpUx213sXC5XBW07vbXn1vkWMWxTu95CDDbMzwkF.jpg"
                   alt="product image" />
           </a>
           <span
               class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
           <div class="mt-4 px-5 pb-5">
               <a href="#">
                   <h5 class="text-xl font-semibold tracking-tight text-slate-900">{{ product.name }}</h5>
               </a>
               <div class="mt-2.5 mb-5 flex items-center">
                   <span class="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                   <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                       <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                       </path>
                   </svg>
                   <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                       <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                       </path>
                   </svg>
                   <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                       <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                       </path>
                   </svg>
                   <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                       <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                       </path>
                   </svg>
                   <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                       <path
                           d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                       </path>
                   </svg>
               </div>
               <div class="flex items-center justify-between">
                   <p>
                       <span class="text-3xl font-bold text-slate-900">Rp.{{ product.base_price }}</span>
                   
                   </p>
               </div>
               <div>
                   <router-link :to="{ name: 'SingleProduct', params: { slug: product.slug } }" class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5">
                       <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round"
                               d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                       </svg>
                     Detail Product
                   </router-link>
               </div>
           </div>
       </div>
       
    </div>
    </div>
    
    </div>
    </template>
    <script>
    import { mapGetters, mapActions } from 'vuex';
    
    export default {
       computed: {
           ...mapGetters('product', ['getProduk']),
       },
       methods: {
           ...mapActions('product', ['fetchProduk']),
    },
    created(){
       this.fetchProduk();
      }
    }
    </script>