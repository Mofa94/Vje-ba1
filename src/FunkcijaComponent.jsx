import {getRandomNumber} from "./GetRandomNumber";
import { IsEven } from "./IsEven";

const FunkcijaComponent = () => {
    

    return (
        <>
        {IsEven() && <p>"Današnji datum je paran!"</p>}
        {!IsEven() && getRandomNumber()}
        </>
    );
}

export default FunkcijaComponent;