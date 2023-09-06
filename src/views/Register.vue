<template>
    <br>
    <br>
    <br>
    <br>
    <div
        class="flex min-h-screen w-screen w-full items-center justify-center text-gray-600 bg-gray-50"
      >
        <div class="relative">
          <div
            class="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20"
          >
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="a"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.6) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    stroke-width="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#a)"
              />
            </svg>
          </div>
          <div
            class="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20"
          >
            <svg
              id="patternId"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="b"
                  patternUnits="userSpaceOnUse"
                  width="40"
                  height="40"
                  patternTransform="scale(0.5) rotate(0)"
                >
                  <rect x="0" y="0" width="100%" height="100%" fill="none" />
                  <path
                    d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                    stroke-width="1"
                    stroke="none"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="800%"
                height="800%"
                transform="translate(0,0)"
                fill="url(#b)"
              />
            </svg>
          </div>
  <!-- Register -->
          <div
            class="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4"
          >
            <div class="flex-auto p-6">
              <!-- Logo -->
              <div
                class="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden"
              >
                <a
                  href="#"
                  class="flex cursor-pointer items-center gap-2 text-indigo-500 no-underline hover:text-indigo-500"
                >
                  <span
                    class="flex-shrink-0 text-3xl font-black highcase tracking-tight opacity-100"
                    >Register</span
                  >
                </a>
              </div>
              <!-- /Logo -->
              <h4 class="mb-2 font-medium text-gray-700 xl:text-xl">
                Welcome !
              </h4>
              <p class="mb-6 text-gray-500">
                Please sign-up to access your account
              </p>
    
              <form @submit.prevent="performRegister">
                <div class="mb-4">
                  <label
                    for="name"
                    class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >Name</label
                  >
                  <input
                    v-model="name"
                    type="text"
                    class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    id="email"
                    name="email-email"
                    placeholder="Enter your name "
                    autofocus=""
                    required
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >Email</label
                  >
                  <input
                    v-model="email"
                    type="text"
                    class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    id="email"
                    name="email-email"
                    placeholder="Enter your email "
                    autofocus=""
                    required
                  />
                </div>
                <div class="mb-4">
                  <div class="flex justify-between">
                    <label
                      class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      for="password"
                      >Password</label
                    >
                    
                  </div>
                  <div class="relative flex w-full flex-wrap items-stretch">
                    <input
                      v-model="password"
                      type="password"
                      id="password"
                      class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="············"
                      required
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <div class="flex justify-between">
                    <label
                      class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                      for="password"
                      >Confirm Password</label
                    >
                    
                  </div>
                  <div class="relative flex w-full flex-wrap items-stretch">
                    <input
                      v-model="confirm_password"
                      type="password"
                      id="password"
                      class="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                      name="password"
                      placeholder="············"
                      required
                    />
                  </div>
                  </div>
                  <div class="mb-4">
                  <label
                    for="email"
                    class="mb-2 inline-block text-xs font-medium uppercase text-gray-700"
                    >Phone</label
                  >
                  <input
                    v-model="phone"
                    type="number"
                    class="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    id="number"
                    name="number"
                    placeholder="+62 889 6742 2491" 
                    autofocus=""
                    required
                  />
                </div>
                <br>
                <div class="mb-4">
                  <button
                    class="grid w-full cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:bg-indigo-600 focus:text-white focus:shadow-none"
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  <!-- /Register -->
  </template>
  
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
      auth() {
          return {
              name: '',
              email: '',
              phone: '',
              password: '',
              confirm_password:'',
          };
      },
      methods: {
          ...mapActions('auth', ['register']),
          async performRegister() {
              const credentials = {
              name : this.name,
               email: this.email,
                  phone: this.phone,
                  password: this.password,
                  confirm_password: this.confirm_password,
              };
              const success = await this.register(credentials);
              
              if(success) {
                  this.$router.push('/login');
              } else {
                  alert("Register Failed!")
              }
          },
      },
  };
  </script>
  
  <style>
  .logo {
      position: absolute;
      top: 30px;
      right: 30px;
      display: block;
      z-index: 100;
      transition: all 250ms linear;
  }
  
  .logo img {
      height: 30px;
      width: auto;
      display: block;
  }
  </style>