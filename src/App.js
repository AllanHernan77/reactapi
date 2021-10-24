//Allan Hernandez || CSCI-310 || React API with Redux

import './App.css';
import React from 'react'
import {connect} from "react-redux"
import * as actions  from './actions' // importing all actions 


class App extends React.Component {

  state = {
    searchelement: "", //state prop called searchelement for searching 
    profile : "" 
  };

  //search function, I could not implement it an easier way since I was not calling the API with async
  handleSearch(e){
    let test  = this.state.searchelement
    let text = document.getElementsByClassName("otherText")
    test = test.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    for (let key in text){ // traversing the <h> tags and their content

          if( (text[key].textContent) === undefined ){
            return
          }
          if( (text[key].textContent).includes(test) ){ // if the content includes the searchelement, then we will mark the instance of it. Caveats include it only finding one instance, and not being able to referesh the innerHTML
          text[key].innerHTML = text[key].textContent.replace(test, match => `<mark>${match}</mark>`)
          return
         }
         else{
           console.log("fail") 
         }     
    }
  }

  // settingState(){
  //   setTimeout(() => { this.setState({profile:this.props.changeUserReducer})  }, 1000); 
    
  // }

    render(){
   

        return (

          <div className="App"> 

            <div className = "Intro">
              <div className= "TextWrap">
                  <h1 className = "headerText">Rebirthing Your <br></br>Identity! </h1>
                  <p className = "subText"> Are you in trouble with the law? Have you been caught selling the Blue Sky again? <br></br>Or do you just simply want to start to start it all over. Well now you can with the Rebirth! <br></br>We give you a random selection of potential profiles for you to study, remember and ultimately become! </p>
              </div>
              
            </div>
            <div className = "propsContainer"> {/* Props container is handling the props from the reducer where it is displaying all the info. I could have used maps which would had made the search function easier*/}
              
              <h1 className = "nameText"> { this.props.changeUserReducer.title + " " + this.props.changeUserReducer.firstName + " "  + this.props.changeUserReducer.lastName}  </h1>

              <img src= {this.props.changeUserReducer.photo} alt= "profile"></img>

              <h1 className = "otherText"> Address: {this.props.changeUserReducer.streetNum + " "+this.props.changeUserReducer.streetName + " " + this.props.changeUserReducer.city + ", \n" + this.props.changeUserReducer.country + " " + this.props.changeUserReducer.postcode}</h1>
              <hr></hr>
              <h1 className = "otherText">Email : {this.props.changeUserReducer.email}</h1>

              <h1 className = "otherText">Username : {this.props.changeUserReducer.username}</h1>

              <h1 className = "otherText">Password : {this.props.changeUserReducer.password}</h1>
              <hr></hr>

              <h1 className = "otherText"> DoB : {this.props.changeUserReducer.dob  }</h1> 
              
              <h1 className = "otherText"> Age : {this.props.changeUserReducer.age}</h1>

              <h1 className = "otherText"> Registered Date : { this.props.changeUserReducer.regiDate}</h1>

              <h1 className = "otherText">Registered Age : { this.props.changeUserReducer.regiAge}</h1>

              <hr></hr>
              <div className = "footer">
                <button className = "test" onClick = {() =>  {  this.props.loadFirst();   }  }   > Rebirth Your Identity!</button> {/*calls the loadFirst() function which is in the action index file*/}

                <input className = "myInput" type= "text" placeholder ="Enter Word to Search Here" onChange = {(e) => this.setState({searchelement:e.target.value})  }></input> {/* for every update their is in the entry field, update the state searchelement with the value */}

                <button onClick = {() =>  {  this.handleSearch()  }  }> Click To Search</button> {/* calls the search function*/}
              </div>
            </div>
    
          </div>
        );
      }

  
}

const mapStateToProps = (state)=>{
  return state
}

export default connect (mapStateToProps, actions)(App);
