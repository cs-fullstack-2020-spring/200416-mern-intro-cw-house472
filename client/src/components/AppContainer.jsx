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

    

    componentDidMount = () =>{
        // this.state.characterArray.push({
        //     name: "Charlie Brown",
        //     gender: "Male",
        //     age: 8
        // });

        // this.state.characterArray.push({
        //     name: "Sheldon Cooper",
        //     gender: "Male",
        //     age: 24
        // });
        // this.setState({characterArray : this.state.characterArray});
        this.loadData();
    }
    loadData = async ()=>{
        let response =await fetch('/api')
        // console.log(response);
        let json = await response.json();
        console.table(json)
        this.setState({characterArray :json})
    }


    handleChange = (event) => {
        if (event.target.name === "name") {
            this.setState({ name: event.target.value })
        } else if (event.target.name === "gender") {
            this.setState({ gender: event.target.value })
        } else if (event.target.name === "age") {
            this.setState({ age: event.target.value })
        }
    }


    handleSubmission = async (event) => {
        event.preventDefault();
        let formData = {
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age
        }
        let response = await fetch('/api', {
            method: "POST",
            headers : {
                'Accept' :'application/json',
                "Content-type" : 'application/json'
            },
            body : JSON.stringify(formData)
        })
        let json = await response.json();
        // console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Simple MERN Application</h1>
                <form action="">
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
                        this.state.characterArray.map((name, index) => {
                            return (
                                <div key={index}>
                                    Name:{name.name}
                                    Gender:{name.gender}
                                    Age:{name.age}

                                </div>
                            )
                        })
                    }
                </div>

            </div>

        );
    }
}

export default AppContainer;