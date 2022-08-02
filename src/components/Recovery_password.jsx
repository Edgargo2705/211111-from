import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../asset/style/Recover_pass.css";
import Swal from 'sweetalert2'
import axios from "axios";


function Recovery_password() {
  const data = useState({
    email: '',
  })

  const url = "http://3.19.58.215/api/email/send";

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = values => {
    const data = values;
    axios.post(url, {
      email: data.email
    })
      .then(response => {
        console.log(response.data);
      })
    console.log(data.email);
    let timerInterval
    Swal.fire({
      title: 'Sending Email...',
      timer: 2500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire(
          'Seding!',
          '',
          'success'
        )
      }
    })
  }

  return (
    <div className="container w-75 mt-5 bg-light rounder shadow">
      <div className="container py-5 h-100">
        <div className="row align-items-stretch">
          <div className="col p-5 rounder-end">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="text-end">
                </div>
                <h2 className="fw-bold text-center py-5">Recover Password</h2>
                <p class="text-white-50 mb-5">Enter your email with which you registered to be able to send you an email to change your password
</p>
                <form className="was-validated" noValidate onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label className="form-label">Write your email</label>
                    <input type="text" className="form-control form-control-lg" placeholder="Email" required  {...register("email", {
                      required: {
                        value: true,
                        message: "El campo requerido",
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalido email"
                      }
                    })}></input>
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-outline-light btn-lg px-5">Restore</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Recovery_password;