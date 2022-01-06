export default{
    actions: {
       async fetchPost(ctx){
            const res = await fetch('https://swapi.dev/api/films/')
            const work = await res.json()
            console.log(work);
            ctx.commit('updatePost', work)
        }
    },
  
    mutations: {
        updatePost(state, work){
            state.work = work;
        }
    },
    state: {
        work: [],
        
    },
    getters:{
        allPosts(state){
            return state.work;
        },
       
    },
  
};