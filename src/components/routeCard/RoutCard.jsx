import { FaClock } from "react-icons/fa"
import "./RouteCard.css";

export default function RoutCard({route}) {
    return(
        <div className="route-card">
            <img src={route.image}/>
            <div className="route-overlay">
                <h3>{route.title}</h3>

                <p>{route.description}</p>

            <div className="route-info">
                <span>
                    <FaClock /> 
                    {route.time}
                </span>
            </div>
            </div>
        </div>
    );
}
