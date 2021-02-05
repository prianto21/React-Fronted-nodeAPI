import React, { Component } from 'react'
import GrandChild from './GrandChild'

 class Child2 extends Component {
    render() {
        return (
            <div>
                <h2>Child 2</h2>
                <p>{this.props.stock}</p>
                <GrandChild data={this.props.stock} />
            </div>
        )
    }
}

export default Child2;