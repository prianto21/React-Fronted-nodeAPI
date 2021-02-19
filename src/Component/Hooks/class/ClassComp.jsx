import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             jumlah:0
        }
    }
    
    tambahProduk=()=>{
        this.setState({
            jumlah:this.state.jumlah+1
        })
    }
    render() {
        return (
            <div>
               <h2>{this.state.jumlah}</h2>
               <button onClick={this.tambahProduk}>tambah</button>
            </div>
        )
    }
}
