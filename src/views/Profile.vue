<template>
    <br>
    <br>
   <div class="mx-2 my-10 rounded-xl border bg-white px-4 shadow-md sm:mx-auto sm:max-w-xl sm:px-8">
  <div class="mb-2 flex flex-col gap-y-6 border-b py-8 sm:flex-row sm:items-center sm:justify-between">
    <div class="flex items-center">
      <img class="h-14 w-14 rounded-full object-cover" src="https://img.freepik.com/free-vector/businessman-working-laptop-computer-office-3d-character-isolated-white-background_40876-3756.jpg?size=626&ext=jpg&ga=GA1.2.1081581823.1690350210&semt=sph" alt="Simon Lewis" />
     
      <div class="ml-4 w-56">
        <p class="text-slate-700 text-xl font-bold ">{{ getUser.name }}</p>
        <p class="text-slate-500">{{ getUser.email }}</p>
      </div>
    </div>
   
  </div>
 
  <div class="flex justify-between py-8">

  
  </div>
  </div>
  
  </template>
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
        ... mapGetters('user', ['getUser']),
    },
    methods: {
        ...mapActions('user', ["fetchUser"]),
    },
    created() {
        this.fetchUser();
    },
  }
  </script>