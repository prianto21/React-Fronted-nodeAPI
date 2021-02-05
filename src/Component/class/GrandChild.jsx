import React, { Component } from 'react'

 class GrandChild extends Component {
    render() {
        return (
            <div>
                <p>GrandChild</p>
                <p>{this.props.data}</p>
            </div>
        )
    }
}

export default GrandChild;