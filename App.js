import React from 'react';
class  App extends React.Component{
  constructor(){
    super(); //get context for ths
    this.state = {
      name: 'Arjun',
      age : 0
    }
  }
  update(e){
    this.setState({name:e.target.value})
  }
  render(){
    let name = this.props.name,
        age = this.props.age
    return (
        <div>
          <h1>Hello Application</h1>
          <span>{name}:{age}</span><br/>
          <span>{this.state.name}:{age}</span>
          <div>
            <input type="text" onChange={this.update.bind(this)}/>
          </div>
        </div>
        )
  }
}

App.propTypes = {
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number.isRequired
}

App.defaultProps = {
  name: 'Arjun',
  age: 23
}

export default App
