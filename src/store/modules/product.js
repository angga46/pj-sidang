import axios from "axios";

const produk = {
  namespaced: true,
  state: {
    produkData: [],
    singleProduk:[],
    cart:[],
  },
  getters: {
    getProduk: (state) => state.produkData,
    //
    getProdukBySlug: (state) => (produkSlug) => {
        console.log("ProdukSlug:", produkSlug);
        console.log("ProdukData:", state.produkData);
        const produk = state.produkData.find((p) => p.slug == produkSlug);
        console.log("Produk:", produk);
        return produk;
  },
},
  actions: {
    async fetchProduk({ commit }) {
      try {
        const data = await axios.get("https://ecommerce.olipiskandar.com/api/v1/product/search");
        commit("SET_PRODUK", data.data['products']['data']);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    //
    async fetchSingleProduk({ commit }, produkSlug){
        try{
            const response = await axios.get(
                `https://ecommerce.olipiskandar.com/api/v1/product/details/${produkSlug}`
            );
            commit("SET_SINGLE_PRODUK", response.data['products']);
        }catch (error) {
            alert(error);
            console.log(error);
        }
    },
    async addToCart({ commit }, productId) {
      try {
        const response = await axios.post(
          "https://ecommerce.olipiskandar.com/api/v1/carts/add",
          {
              "variation_id": productId,
              "qty":  1,
              "temp_user_id": null,
          }, {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem("token")}`
          }
          });
          commit("ADD_TO_CART", response.data)
          console.log(response.data)
      } catch (error) {
        console.error(error);

      }
    },
  },
  mutations: {
    SET_PRODUK(state, produk) {
      state.produkData = produk;
    },
    SET_SINGLE_PRODUK(state, produk) {
        state.singleProduk = produk;
      },
      ADD_TO_CART(state, cart) {
        state.cart = cart
    },
  },
};

export default produk;