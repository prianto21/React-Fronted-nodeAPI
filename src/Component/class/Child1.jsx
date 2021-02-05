import React, { Component } from 'react'

 class Child1 extends Component {
     minBeli=2;
    render() {
        return (
            <div>
                <h2>Child Component</h2>
                <p>Jumlah stok : {this.props.stock}</p>
                <button onClick={()=>this.props.fungsi(this.minBeli)}>Beli</button>
            </div>
        )
    }
}

export default Child1;