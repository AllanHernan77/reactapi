//inital state for the reducer
let intialState = {
    person: "Jeff" 
}

const changeUserReducer = (state = intialState , action) =>{

    switch(action.type){
        case "CHANGE_USER": //when the action is CHANGE_USER, create an object that has all the elements of the human profile called from the API in actions.
            return {
                title: action.user.name.title,
                firstName: action.user.name.first,
                lastName: action.user.name.last,
                streetNum: action.user.location.street.number,
                streetName: action.user.location.street.name,
                city : action.user.location.city, 
                country : action.user.location.country,
                postcode : action.user.location.postcode,
                email : action.user.email,
                username : action.user.login.username,
                password : action.user.login.password,
                dob : action.user.dob.date,
                age :action.user.dob.age,
                regiDate: action.user.registered.date,
                regiAge :action.user.registered.age,
                photo: action.user.picture.large

            }
        default:
            return state.person
    }

}

export default changeUserReducer