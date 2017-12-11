
const state = {
    message: ''
}

// getters
const getters = {
    getMessage: (state) => state.message
}


const mutations = {
    message(state, payload) {
        state.message = payload.info
    }
}

export default {
    state,
    getters,
    mutations
}