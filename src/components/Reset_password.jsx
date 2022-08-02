import React, { useState } from "react";
import "../asset/style/Recover_pass.css";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Reset_pass() {

    const querystring = window.location.search
    const params = new URLSearchParams(querystring)

    const data = useState({
        password: ''
    })

    const url = "http://3.19.58.215/api/user/update_password";
    const navigator = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = values => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": params.get('email'),
        });
        if (values.password1 === values.password) {
            const data = values
            axios.put(url, {
                email: params.get('email'),
                password: data.password
            })
                .then(response => {
                    console.log(response.data);
                    Swal.fire(
                        '' + response.data.err + '!',
                        '',
                        'success'
                    )
                })
            navigator('/')
        }
        else {
            Swal.fire(
                'password Error!',
                'Valida que sean igual',
                'error'
            )
        }

    }

    return (
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="card bg-dark text-white">
                    <div className="col p-5 rounder-end">
                        <h2 className="fw-bold text-center py-5">Restore password</h2>
                        <form className="was-validated" noValidate onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Write your new password</label>
                                <input type="password" className="form-control form-control-lg" placeholder="Password" required {...register("password1", {
                                    required: {
                                        value: true,
                                        message: "El campo requerido",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener minimo 8 caracteres"
                                    }
                                })}></input>
                                {errors.password1 && <span className="text-danger">{errors.password1.message}</span>}
                            </div>
                            <div className="form-outline form-white mb-4">
                                <label className="form-label">Confirm Your Password</label>
                                <input type="password" className="form-control form-control-lg" placeholder="Password" required {...register("password", {
                                    required: {
                                        value: true,
                                        message: "El campo requerido",
                                    },
                                    minLength: {
                                        value: 8,
                                        message: "La contraseña debe tener minimo 8 caracteres",
                                    }
                                })}></input>
                                {errors.password && <span className="text-danger">{errors.password.message}</span>}
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-outline-light btn-lg px-5">Restore</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reset_pass;