import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",

      isVegan: false,
      isNothing: false,
      isCarnivore: false,
      isVegetarian: false


    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
      this.setState({
        [name]: checked
      })
      :
      this.setState({
        [name]: value
      })
  }
  render() {
    console.log(this.state)
    return (
      < main >
        <form>
          <input value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="First Name" /><br />
          <input value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="Last Name" /><br />
          <input value={this.state.age} name="age" onChange={this.handleChange} placeholder="Age" /><br />

          <input type="radio" name="gender" value="Male" checked={this.state.gender === "Male"} onChange={this.handleChange} />Male
          <input type="radio" name="gender" value="Female" checked={this.state.gender === "Female"} onChange={this.handleChange} />Female


          <br />

          <select name="location" value={this.state.location} onChange={this.handleChange}>
            <option value="Japan">Japan</option>
            <option value="Italia">Italia</option>
            <option value="Norway">Norway</option>
            <option value="Home">Home</option>
          </select>
          <br />

          <input type="checkbox" onChange={this.handleChange} name="isVegan" checked={this.state.isVegan} />Vegan
          <input type="checkbox" onChange={this.handleChange} name="isVegetarian" checked={this.state.isVegetarian} />Vegetarian
          <input type="checkbox" onChange={this.handleChange} name="isCarnivore" checked={this.state.isCarnivore} />Carnivore
          <input type="checkbox" onChange={this.handleChange} name="isNothing" checked={this.state.isNothing} />Nothing

          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Your destination: {this.state.location}</p>
        <p>
          Your dietary restrictions:
          Vegan: {this.state.isVegan ? "Yes" : "No"}
          Carnivore: {this.state.isCarnivore ? "Yes" : "No"}
          Nothing: {this.state.isNothing ? "Yes" : "No"}
          Vegetarian: {this.state.isVegetarian ? "Yes" : "No"}
        </p>
      </main>
    )
  }
}

export default App
