import React, { Component } from "react";
import axios from "axios";
import qs from "querystring";
import { Table, Button, Container, NavLink, Alert } from "reactstrap";
import { Link } from "react-router-dom";

const api = "http://localhost:3001";
class ListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mahasiswa: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    axios.get(api + "/tampil").then((res) => {
      this.setState({
        mahasiswa: res.data.values,
      });
    });
  }

  DeleteMahasiswa = (idMahasiswa) => {
    const { mahasiswa } = this.state;
    const data = qs.stringify({
      id_mahasiswa: idMahasiswa,
    });

    axios
      .delete(api + '/hapus', {
        data: data,
        headers: { "Content-type": "aplication/x-www-form-urlencoded" },
      })
      .then((json) => { 
        if (json.data.status === 200) {
          this.setState({
            response: json.data.values,
            mahasiswa: mahasiswa.filter(
              mahasiswa => mahasiswa.id_mahasiswa !== idMahasiswa
            ),
            display: "block",
          });
          this.props.history.push("/mahasiswa");
        } else {
          this.setState({
            response: json.data.values,
            display: "block",
          });
        }
      });
  };
  render() {
    return (
      <Container>
          <Alert color="success" style={{display:this.state.display}}>
                {this.state.response}
            </Alert>
        <h2>Data Mahasiswa</h2> <hr />
        <NavLink href="/mahasiswa/tambah">
          <Button color="success">Tambah Data</Button>
        </NavLink>
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
            {this.state.mahasiswa.map((mahasiswa) => (
              <tr key={mahasiswa.id_mahasiswa}>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>
                  <Link
                    to={{
                      pathname: "mahasiswa/edit",
                      state: {
                        id_mahasiswa: mahasiswa.id_mahasiswa,
                        nim: mahasiswa.nim,
                        nama: mahasiswa.nama,
                        jurusan: mahasiswa.jurusan,
                      },
                    }}
                  >
                    <Button>Edit</Button>
                  </Link>
                  <span></span>
                  <Button
                    onClick={() => this.DeleteMahasiswa(mahasiswa.id_mahasiswa)}
                    color="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default ListComponent;
