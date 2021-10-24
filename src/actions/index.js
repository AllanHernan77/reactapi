import axios from 'axios' //importing axios, not using async

export function loadFirst(){
    return(dispatch)=>{
        return axios.get("https://api.randomuser.me").then((response)=>{ //retriving API call
            dispatch(changeUser(response.data.results[0]));  //dispatching the result with the action changeUser
        })
    }
}
export function changeUser(user){ //action changeUser
    return{
        type: "CHANGE_USER",
        user:user
    }
}

export const increment = (num) => { //test action

    return{
        type:"INCREMENT",
        payload: num
    }
}
