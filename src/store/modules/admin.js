const admin = {
    state: {
        items: [],
        name: ''
    },
    mutations: {
        ADD_ITEM(state,item){
            state.items.push(item);
        },
        DELETE_ITEM(state){
            state.items.pop();
        }
    }
}

export default admin