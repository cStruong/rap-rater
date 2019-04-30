import React from 'react'

class RapperCard extends React.Component {


    render() {

        let imgSrc = this.props.rapper.clicked ? this.props.rapper.happyImage : this.props.rapper.sadImage
        return (
            <div>
                <h1>{this.props.rapper.name}</h1>
                <img onClick={() => {this.props.toggleImage(this.props.rapper)}} src={imgSrc}/>
            </div>
        )
    }
}

export default RapperCard