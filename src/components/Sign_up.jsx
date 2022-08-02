import React, { useState } from "react";
import "../asset/style/Log_in.css";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Sign_up() {
    const navigator = useNavigate()
    const data = useState({
        name: "",
        email: "",
        password: ""
    })

    const url = "http://3.19.58.215/api/user/create";



    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values => {
        console.log(values);
        const data = values
        Swal.fire(
            'Bienvenido!',
            'Cuenta Creada con Exito',
            'success'
        )
        axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password
        })
            .then(res => {
                console.log(res.data)
            })
        navigator('/')

    }

    return (
      <section class="vh-100 bg-primary">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong border-radius: 1rem;">
                <div className="card-body p-5 text-center">
                  <h2 className="text-uppercase text-center mb-5">Sig up</h2>

                  <form
                    className="was-validated"
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="mb-4">
                      <label className="form-label text-dark">
                        Enter your name
                      </label>
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        placeholder="name"
                        required
                        {...register("name", {
                          required: {
                            value: true,
                            message: "El campo requerido",
                          },
                        })}
                      ></input>
                      {errors.name && (
                        <span className="text-danger">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-dark">
                        Enter your email
                      </label>
                      <input
                        type="text"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        required
                        {...register("email", {
                          required: {
                            value: true,
                            message: "El campo requerido",
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalido email",
                          },
                        })}
                      ></input>
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                    <div className="mb-4">
                      <label className="form-label text-dark">
                        Enter your password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        required
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Obligatory field",
                          },
                          minLength: {
                            value: 8,
                            message:
                              "The password must have at least 8 characters",
                          },
                        })}
                      ></input>
                      {errors.password && (
                        <span className="text-danger">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-danger text-white btn-lg btn-block"
                      >
                        Register
                      </button>
                    </div>

                    <div className="my-3">
                      <span className="fw-bold text-dark">
                        Do you have an account? <a href="/">Login</a>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Sign_up;