import axios from 'axios'

export function loadFirst(){
    return(dispatch)=>{
        return axios.get("https://api.randomuser.me").then((response)=>{
            dispatch(changeUser(response.data.results[0]));
        })
    }
}
export function changeUser(user){
    return{
        type: "CHANGE_USER",
        user:user
    }
}

export const increment = (num) => {

    return{
        type:"INCREMENT",
        payload: num
    }
}
