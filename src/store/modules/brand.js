import axios from "axios";

const brand = {
    namespaced: true,
    state: {
        dataBrand: [],
    },
    getters: {
        getBrand: (state) => state.dataBrand,
    },
    actions: {
        async fetchBrand({ commit }) {
            try{
                const data = await axios.get(
                    "https://ecommerce.olipiskandar.com/api/v1/all-brands"
                );
                commit("SET_BRAND", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_BRAND(state, brand) {
            state.dataBrand = brand;
        }
    }
}

export default brand;