import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "reactstrap";
import axios from "axios";

const api = "http://localhost:3001"

function HookUseEffect() {
  const [mahasiswa, setMahasiswa] = useState([]);
  useEffect(() => {
    axios.get(api + '/tampil').then(res => {
      setMahasiswa(res.data.values)
    })
},[])


  return (
    <Container>
      <h2>Data Mahasiswa</h2> <hr />
      <Table className="table-bordered">
        <thead>
          <tr>
            <td>NIM</td>
            <td>Nama</td>
            <td>Jurusan</td>
            
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mahasiswa) => (
            <tr key={mahasiswa.id_mahasiswa}>
              <td>{mahasiswa.nim}</td>
              <td>{mahasiswa.nama}</td>
              <td>{mahasiswa.jurusan}</td>
              <td>
                <span></span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
  }
export default HookUseEffect;
