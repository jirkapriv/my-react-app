import { Link } from "react-router-dom"

export default function CarLink(props){
    

    //toto se vpisuje do CarList a proto tam vidime zaznamy
    //kdyz na to klikne tak ho to vezme na CarView(getCar asi idk) a kouka na jedno dane auto 
    return(
        <>
            <Link to={`/car/${props._id}`}>
                <p>{props.name}</p>
                <p>{props.model}</p>
            </Link>
            <br />
        </>
    )
}