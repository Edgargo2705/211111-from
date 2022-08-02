import '../asset/style/Confirmation_Acount.css'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";

function Confirmation() {
    const navigator = useNavigate()
    const [data, setData] = useState({
        valor: 'false'
    })


    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }

    const querystring = window.location.search
    const params = new URLSearchParams(querystring)



    const validate = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": params.get('email'),
        });

        const url = "http://3.19.58.215/api/user/config?";

        if (data.valor === 'true') {
            console.log('Validation Success: ' + data.valor);



            console.log(raw);
            axios.post(url, {
                valor: data.valor,
                email: params.get('email'),


            })
                .then(res => {
                    console.log(res.data)
                })
            Swal.fire(
                'Very good!',
                'Thanks for confirming',
                'success'
            )
            navigator('/')

        }
        if (data.valor === 'false') {
            console.log('Validation error: ' + data.valor);

            axios.post(url, {
                valor: data.valor,
                email: params.get('email'),
            })
                .then(res => {
                    console.log(res.data)

                })

            Swal.fire(
                'time out!',
                'Your time is up to set up your account',
                'error'
            )
            navigator('/')
        }
    }

    return (
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="container w-75 mt-5 bg-black rounder shadow">
          <div className="col acount d-none d-lg-block col-md-5 col-lg-7 col-xl-6 rounder"></div>

          <div className="col p-5 rounder-end">
            <div className="text-end"></div>
            <h2 className="fw-bold text-center py-5 text-white">Welcome</h2>
            <h4 text-white className="fw-bold text-center text-white">
              Click in the button!
            </h4>

            <form className="was-validated" onSubmit={validate}>
              <div class="form-check">
                <input
                  class="form-check-input"
                  onChange={(e) => handle(e)}
                  value={true}
                  type="radio"
                  name="flexRadioDefault"
                  id="valor"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Activate and accept the terms.
                </label>
              </div>
              <br />
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Confirmation;