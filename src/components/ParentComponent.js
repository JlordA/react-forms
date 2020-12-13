// src/components/ParentComponent
import React from 'react';
import DisplayData from './DisplayData';
import Form from './Form'

class ParentComponent extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }

    handleChange = event => {
       this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <>
                <Form
                    formData={this.state}
                    handleChange={this.handleChange}
                    handleChange={this.handleChange}
                />
                <DisplayData formData={this.state} />
            </>
        )
    }
}

export default ParentComponent; 