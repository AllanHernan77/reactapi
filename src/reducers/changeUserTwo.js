let intialState = {
    person: "Jeffery" 
}

const userTwoReducer = (state = intialState , action) =>{

    switch(action.type){
        case "CHANGE_USER_TWO":
            return action.userTwoInfo
        default:
            return "Jeffery"
    }

}

export default userTwoReducer