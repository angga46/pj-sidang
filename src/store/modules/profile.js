import axios from "axios";

const profile = {
    namespaced: true,
    state: {
        profileData: [],
    },
    getters:{
        getProfile: (state) => state.profileData,
    },
    actions: {
        async fetchProfile({ commit }) {
            try {
                const data = await axios.get('https://ecommerce.olipiskandar.com/api/v1/user/info',
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`
                    }
                }
                );
                console.log(data.data)
                commit("SET_PROFILE", data.data['profile']);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    },
},
 mutations: {
    SET_PROFILE(state, profile) {
        state.profileData = profile;
    },
 },
};
export default profile;