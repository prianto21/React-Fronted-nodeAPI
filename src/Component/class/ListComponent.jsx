import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Table,Button,Container,NavLink,Alert} from 'reactstrap'

const api='http://localhost:3001/'
class ListComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             mahasiswa:[],
             response:'',
             display:'none'
        }
    }

    componentDidMount(){
        axios.get(api+'tampil').then(res=>{
            this.setState({
                mahasiswa:res.data.values
            })
        })
    }
    

    render() {
        return (
            <Container>
                <h2>Data Mahasiswa</h2> <hr />
                <NavLink href="/mahasiswa/tambah"><Button color="success">Tambah Data</Button></NavLink>
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <td>NIM</td>
                            <td>Nama</td>
                            <td>Jurusan</td>
                            <td>Aksi</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mahasiswa.map(mahasiswa=>
                            <tr key={mahasiswa.id_mahasiswa}>
                                <td>{mahasiswa.nim}</td>
                                <td>{mahasiswa.nama}</td>
                                <td>{mahasiswa.jurusan}</td>
                                <td>Edit || Delete</td>

                            </tr>
                            )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}
export default ListComponent;