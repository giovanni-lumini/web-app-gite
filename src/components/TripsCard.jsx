import { Link } from "react-router-dom"

export default function TripsCard({ trip }) {
    return (
        <div className="card col-3 my-4">
            <div className="card-body text-center">
                <h4>{`Destinazione: ${trip.destinazione}`}</h4>
                <p>{`ID trip: ${trip.id}`}</p>
                <p>{`Data inizio: ${trip.data_inizio}`}</p>
                <p>{`Data fine: ${trip.data_fine}`}</p>
                <Link to={`/trips/${trip.id}`} className="btn btn-primary">INFO PARTECIPANTI</Link>
            </div>
        </div>
    );
}