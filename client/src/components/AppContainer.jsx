import React, { Component } from 'react'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            age: 0,
            characterArray: []
        }
    }
    render() {
        return (
            <div>
                <h1>Simple MERN Application</h1>
                <form action="">Characters
            <label htmlFor="name">Character Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />

                    <label htmlFor="gender">Gender</label>
                    <input type="text" name="gender" value={this.state.gender} onChange={this.handleChange} />

                    <label htmlFor="age">Character Age</label>
                    <input type="text" name="age" value={this.state.age} onChange={this.handleChange} />

                    <button onClick={this.handleSubmission}>Submit</button>
                </form>
                <div>
                    {
                        this.state.characterArray.map(name, index) =>{
                            return(
                                <div>
                                    
                                </div>
                            )
                        }
                    }
                </div>

            </div>

        );
    }
}

export default AppContainer;