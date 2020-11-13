import { Link } from 'react-router-dom';

function CardUtente(props) {
    let to = "/posts/" + props.utente.id;
    return (
        <Link className="card display-flex" to={to}>
            <div className="card-left-item">
                <h4>{props.utente.name}</h4>
                {props.utente.email}
            </div>
            <div className="card-right-item">
                <h4>Utente ID</h4>
                <p>{props.utente.id}</p>
            </div>
        </Link>
    )
}

export default CardUtente