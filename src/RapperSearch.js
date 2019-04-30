import React from 'react'

class RapperSearch extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <label>Search for a Rapper:</label>
                    <input type="textfield" onChange={this.props.searchHandler} value={this.props.searchTerm}/>
                </form>
            </div>
        )
    }
}

export default RapperSearch