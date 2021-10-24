import './App.css';
import React from 'react'
import {connect} from "react-redux"
import * as actions  from './actions'


class App extends React.Component {

  state = {
    searchelement: "",
    profile : ""
  };

  handleSearch(e){
    let test  = this.state.searchelement
    let text = document.getElementsByClassName("otherText")
    test = test.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    for (let key in text){

          if( (text[key].textContent) === undefined ){
            return
          }
          if( (text[key].textContent).includes(test) ){
          text[key].innerHTML = text[key].textContent.replace(test, match => `<mark>${match}</mark>`)
          return
         }
         else{
           console.log("fail") 
         }     
    }
  }

  settingState(){
    setTimeout(() => { this.setState({profile:this.props.changeUserReducer})  }, 1000);
    
  }

    render(){
   

        return (

          <div className="App"> 

            <div className = "Intro">
              <div className= "TextWrap">
                  <h1 className = "headerText">Rebirthing Your <br></br>Identity! </h1>
                  <p className = "subText"> Are you in trouble with the law? Have you been caught selling the Blue Sky again? <br></br>Or do you just simply want to start to start it all over. Well now you can with the Rebirth! <br></br>We give you a random selection of potential profiles for you to study, remember and ultimately become! </p>
              </div>
              
            </div>
            <div className = "propsContainer">
              
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
                <button className = "test" onClick = {() =>  {  this.props.loadFirst(); this.settingState();  }  }   > Rebirth Your Identity!</button>

                <input className = "myInput" type= "text" placeholder ="Enter Word to Search Here" onChange = {(e) => this.setState({searchelement:e.target.value})  }></input>

                <button onClick = {() =>  {  this.handleSearch()  }  }> Click To Search</button>
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
