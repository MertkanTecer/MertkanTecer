import { createStore } from "vuex";

const store = createStore({

    state()
    {
        return {
             contactedUser : {
                id:null,
                userName : '',
                Email : '',
                Project : '',
                Message : '',
             }
        }
    },
    getters:{
      getUser(state)
      {
        return state.contactedUser
      }
    },
    mutations:{
      setUser(state,payload)
      {
        state.contactedUser = payload
      }
    },
    actions:{
     async sendUser(context,payload)
    {
         const newUser = payload

      const response = await  fetch('https://mertkantecer-59734-default-rtdb.firebaseio.com/contacts.json',
         {
            method : 'POST',
            body:JSON.stringify(newUser)
         }
         );
         const responseData = await response.json();
         if(!response.ok)
         {
           const error = new Error(responseData.message || 'Failed To Send Contact Informations')
           throw error;
         }
         context.commit('setUser',newUser)
    }
    }
})
export default store