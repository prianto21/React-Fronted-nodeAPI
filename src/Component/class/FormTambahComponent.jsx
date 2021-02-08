import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Col, Container, Form, FormGroup, Input, Label, Row,Button,Alert } from 'reactstrap'



const api='http://localhost:3001/'

 class FormTambahComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             nim:'',
             nama:'',
             jurusan:'',
             response:'',
             display:'none'
        }
    }
    //fungtion untuk mengubah input
    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    // menambahkan data mahasiswa
    addMahasiswa=()=>{
        axios.post(api+'tambah',{
            nim:this.state.nim,
            nama:this.state.nama,
            jurusan:this.state.jurusan
        }).then(json=>{
            if(json.data.status === 200){
                this.setState({
                    response:json.data.values,
                    display:'block'
                })
            }else{
                this.setState({
                    response:json.data.values,
                    display:'block '
                })
            }
        })
    }

    render() {
        return (
            <Container>
                <h4>Form Tambah Data</h4>
                <Alert color="success" style={{display:this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form"> 
                <Col>
                    <Label>NIM</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" value={this.state.nim} onChange={this.handleChange} placeholder="masukan NIM" name="nim" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Label>Nama</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" value={this.state.nama} onChange={this.handleChange} placeholder="masukan nama" name="nama" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <Label>Jurusan</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" value={this.state.jurusan} onChange={this.handleChange} placeholder="masukan jurusan" name="jurusan" />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Row>
                            <Col>
                                <Button type="button" onClick={this.addMahasiswa}>submit</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                </Col>
                </Form>
            </Container>
        )
    }
}
export default FormTambahComponent;