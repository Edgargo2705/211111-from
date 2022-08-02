import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Cards.jsx";
import '../asset/style/containerCard.css'


function View() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios
          .get("http://3.19.58.215/api/product/view")
          .then((res) => {
            console.log(res.data);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }, [])

    return (
        <div className="container-card-Upimg">
           {
            data.map((data) => (
                    <Card
                    name={data.name}
                    nameProduc={data.nameProduc}
                    description={data.description}
                    price={data.price}
                    amount={data.amount}
                    />
            ))
           }
           
        </div>   
    )
}

export default View;