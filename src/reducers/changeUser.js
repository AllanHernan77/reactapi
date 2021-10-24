let intialState = {
    person: "Jeff" 
}

const changeUserReducer = (state = intialState , action) =>{

    switch(action.type){
        case "CHANGE_USER":
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