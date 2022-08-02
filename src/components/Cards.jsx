import '../asset/style/card.css'


const Card = (props) => {
    return (
        <div className="container-Card">
            <img src={props.name} class="card-img-top"></img><br /><br/>
            <div className="card-title"><h3>{props.nameProduc}</h3></div><br/>
            <div className="card-price"><span className="text-dark fw-bold fs-5">Price: </span> {props.price} USD</div><br/>
            <div className="card-amount"><span className="text-dark fw-bold fs-5">Stock: </span>{props.amount}</div><br/>
            <div className="card-description"><span className="text-dark fw-bold fs-5">Descripcion: </span>{props.description}</div>
        </div>
    )
}

export default Card;
