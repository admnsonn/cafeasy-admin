import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Crud/Crud.css';

const Pembukuancomp = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(process.env.REACT_APP_API_URL);
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(process.env.REACT_APP_API_URL$);
    loadUsers();
  };

  return (
    <div className="container">
    <div className="py-4">
    <br></br>
      <h3 className="title-crud"> UPDATE PEMBUKUAN TRANSAKSI </h3>
      <br></br> <br></br>
      <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Tanggal</th>
            <th scope="col">Pemesan</th>
            <th scope="col">Pesanan</th>
            <th scope="col">Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.tanggal}</td>
              <td>{user.username}</td>
              <td>{user.pemesan}</td>
              <td>{user.status}</td>
              <td>
              <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
};

export default Pembukuancomp;