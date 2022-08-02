import React, { useState } from 'react';
import Swal from 'sweetalert2'
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, FormGroup } from 'reactstrap';
import Upimg from './View';

function Index() {
    const [modaladd, setModaladd] = useState(false);
    const add = () => setModaladd(!modaladd);
    const [modalupdate, setModalupdate] = useState(false);
    const update = () => setModalupdate(!modalupdate);
    const [modaldelet, setModaldelet] = useState(false);
    const delet = () => setModaldelet(!modaldelet);
    const [data1, setData1] = useState({
        name: '',
        nameProduc: '',
        description: '',
        price: '',
        amount: '',
        selectedFile: null
    })
    const [data, setData] = useState({
        id: '',
    })

    const [data2, setData2] = useState({
        name: '',
        nameProduc: '',
        description: '',
        price: '',
        amount: '',
        selectedFile: null
    })


    function handle(e) {
        e.preventDefault();
        const newdata = { ...data1 }
        newdata[e.target.id] = e.target.value
        setData1(newdata)
        console.log(newdata)

    }

    function handledelet(d) {
        d.preventDefault();
        const newdata = { ...data }
        newdata[d.target.id] = d.target.value
        setData(newdata)
        console.log(newdata)

    }


    function handleupdate(u) {
        u.preventDefault();
        const newdata = { ...data2 }
        newdata[u.target.id] = u.target.value
        setData2(newdata)
        console.log(newdata)

    }

    const handleFileSelectedupdate = (u) => {
        const files = Array.from(u.target.files)
        console.log("files:", files);

        if (files && files.length > 0) {
            const newdata = { ...data1 }
            newdata["selectedFile"] = files[0];
            setData1(newdata)
        }

    }

    const handleFileSelected = (e) => {
        const files = Array.from(e.target.files)
        console.log("files:", files);

        if (files && files.length > 0) {
            const newdata = { ...data1 }
            newdata["selectedFile"] = files[0];
            setData1(newdata)
        }

    }

    const urlupdate = "http://3.19.58.215/api/product/update";

    function Enviarupdate() {
        const formData = new FormData();
        formData.append("id", data2.id);
        formData.append("nameProduc", data2.nameProduc);
        formData.append("description", data2.description);
        formData.append("price", data2.price);
        formData.append("amount", data2.amount);

        axios.put(urlupdate, formData)
            .then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Thats great',
                        text: "Product updated!",
                        icon: 'success',
                        confirmButtonColor: '#FBFF00',
                        confirmButtonText: 'Okay'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.replace('/Index');
                        }
                    })
                } else {
                    Swal.fire(
                        'ALERT',
                        'An error occurred while updating, please try again',
                        'warning'
                    );
                }
            })

        update(false);

    }

    const urldelet = "http://3.19.58.215/api/product/delete";

    const EnviarDelet = (d) => {

        axios.delete(urldelet, {
            data: data
        })
            .then(res => {
                setData(res.data)


            })
            .catch(err => {
                console.log(err)
            })
        Swal.fire({
            title: 'Data Deleted!',
            text: "",
            icon: 'success',
            confirmButtonColor: '#0e46ff',
            confirmButtonText: 'Okay'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.replace('/Index');
            }
        })
        delet(false);

    }


    const url = "http://3.19.58.215/api/product/create";

    function Enviar() {


        const formData = new FormData();
        formData.append("name", data1.selectedFile);
        formData.append("nameProduc", data1.nameProduc);
        formData.append("description", data1.description);
        formData.append("price", data1.price);
        formData.append("amount", data1.amount);

        axios.post(url, formData)
            .then(res => {

                if (res.status === 200) {
                    Swal.fire({
                        title: 'Thats great',
                        text: "New product added!",
                        icon: 'success',
                        confirmButtonColor: '#FF0000',
                        confirmButtonText: 'Okay'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.replace('/Index');
                        }
                    })
                } else {
                    Swal.fire(
                        'ALERT',
                        'An error occurred while saving the image, please try again',
                        'warning'
                    );
                }
            })

        add(false);

    }


    return (
      <div class="container-xxl w-100 mt-5 d-lg-block col-md-5 col-lg-7 col-xl-6 bg-light rounder shadow">
        <div class="row align-items-stretch">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              <div class="dropdown">
                <button onClick={delet} class="btn btn-outline-danger" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="24"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
                  Delete
                </button>
              </div>
              <div class="dropdown">
                <button
                  onClick={update}
                  class="btn btn-outline-info"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-upload"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                  </svg>
                  Update
                </button>
              </div>
              <div class="dropdown">
                <button onClick={add} class="btn btn-outline-success" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="24"
                    fill="currentColor"
                    class="bi bi-bag-plus"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
                  Product add
                </button>
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-outline-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="24"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li>
                    <a href="/" class="dropdown-item" type="button">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Upimg></Upimg>
        <div>
          <form>
            <Modal isOpen={modaladd}>
              <ModalHeader className="text-dark">Upload Product</ModalHeader>
              <ModalBody>
                <form className="was-validated" noValidate>
                  <FormGroup>
                    <div>
                      <Label>Img</Label>
                      <input
                        type="file"
                        name="file"
                        class="form-control"
                        onChange={handleFileSelected}
                        id="name"
                        aria-label="Upload"
                        required
                      ></input>
                    </div>
                    <div>
                      <Label for="price">Title</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => handle(e)}
                        id="nameProduc"
                        value={data1.nameProduc}
                        placeholder="title"
                        required
                      ></input>
                    </div>
                    <div>
                      <Label for="price">Description</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => handle(e)}
                        id="description"
                        value={data1.description}
                        placeholder="descriptions"
                        required
                      ></input>
                    </div>
                    <div>
                      <Label for="Stock">Price</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => handle(e)}
                        id="price"
                        value={data1.price}
                        placeholder="price"
                        required
                      ></input>
                    </div>
                    <div>
                      <Label for="Stock">Stock</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(e) => handle(e)}
                        id="amount"
                        value={data1.amount}
                        placeholder="Stock"
                        required
                      ></input>
                    </div>
                  </FormGroup>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" onClick={Enviar} color="success">
                  Save
                </Button>
                <Button color="secondary" onClick={add}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </form>

          <form>
            <Modal isOpen={modalupdate}>
              <ModalHeader className="text-primary">
                Actualidar Producto
              </ModalHeader>
              <ModalBody>
                <form className="was-validated" noValidate>
                  <FormGroup>
                    <div>
                      <Label for="price">New name</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(u) => handleupdate(u)}
                        id="nameProduc"
                        value={data2.nameProduc}
                        placeholder="name confirm"
                        required
                      ></input>
                    </div>
                    <div>
                      <Label for="price">Description</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(u) => handleupdate(u)}
                        id="description"
                        value={data2.description}
                        placeholder="descriptions"
                        required
                      ></input>
                    </div>
                    <div>
                      <Label for="Stock">Price</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(u) => handleupdate(u)}
                        id="price"
                        value={data2.price}
                        placeholder="precio"
                        required
                      ></input>
                    </div>
                    <div>
                      <Label for="Stock">Stock</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(u) => handleupdate(u)}
                        id="amount"
                        value={data2.amount}
                        placeholder="Stock"
                        required
                      ></input>
                    </div>
                  </FormGroup>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" onClick={Enviarupdate} color="warning">
                  Save
                </Button>
                <Button color="secondary" onClick={update}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </form>

          <form>
            <Modal isOpen={modaldelet}>
              <ModalHeader className="text-dark">Delete Product</ModalHeader>
              <ModalBody>
                <form className="was-validated" noValidate>
                  <FormGroup>
                    <div>
                      <Label for="price">name product</Label>
                      <input
                        type="text"
                        className="form-control"
                        onChange={(d) => handledelet(d)}
                        id="nameProduc"
                        value={data.nameProduc}
                        placeholder="title"
                        required
                      ></input>
                    </div>
                  </FormGroup>
                </form>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" onClick={EnviarDelet} color="danger">
                  Save
                </Button>
                <Button color="secondary" onClick={delet}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </form>
        </div>
      </div>
    );
}

export default Index;