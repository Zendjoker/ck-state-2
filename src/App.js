import React from "react"
import './App.css';
import profileImage from '../src/profileImage.png'

class App extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    Person : { fullName: "Adam Azouz",
    bio: "This is my bio",
    imgSrc: {profileImage},
    profession: "FullStack Developper"
  },
    show : true,
    count: 0
  };
}
  render(){
    const count = this.state.count
    return (
    <div className="App">
      {
        this.state.show?
      <div>
       <img style={{width:"100px"}}
            //src={this.state.Person.imgSrc} 
            src= "https://image.noelshack.com/fichiers/2021/48/4/1638451035-profile-icon-png-916.png"
            alt="Photo de profil">

            </img>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio} ......</h1>
            <h1>{this.state.Person.profession}</h1>
        <h1>Current Count : {count}</h1>
      </div>
      :null
      }
      <button onClick={()=>this.setState({...this.state,show:!this.state.show})}>Hide/Show</button>
    </div>)
  }

  componentDidMount() {
    this.myInterval = setInterval (()=>{
      this.setState(prevState => ({
        count: prevState.count + 1
    }))
  }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

}


export default App;
