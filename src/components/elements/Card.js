
import "../../styles/card.css";

function Card(props) {
    return (
        <div class="card">
            <div class="card-header">
                <h5>{props.header}</h5>
            </div>
            <div class="card-content">
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Card;
