import React from 'react'

import RapperCard from './RapperCard.js'
import RapperSearch from './RapperSearch'

class RapperContainer extends React.Component {
    render() {
        return (
            <div>
            <RapperSearch searchTerm={this.props.searchTerm} searchHandler={this.props.searchHandler}/>
            {this.props.rappers.map(rapperObj => {
            return <RapperCard toggleImage={this.props.toggleImage} rapper={rapperObj}/>
            })}
            </div>
        )
    }
}

export default RapperContainer