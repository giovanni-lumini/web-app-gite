import TripsCard from "../components/TripsCard"
import Trips from "../data/Trips"

export default function Homepage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center flex-wrap gap-3">
                    {Trips.map((trip) =>
                        <TripsCard
                            key={trip.id}
                            trip={trip}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}