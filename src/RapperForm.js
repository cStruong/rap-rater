import React from 'react'

class RapperForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.submitHandler}>
                <label>Name:</label>
                <input type="textfield" name="name"/>
                <label>Sad Image:</label>
                <input type="textfield" name="sadImage"/>
                <label>Happy Image:</label>
                <input type="textfield" name="happyImage"/>
                <button type="submit">Add Rapper</button>
                </form>
            </div>
        )
    }
}

export default RapperForm