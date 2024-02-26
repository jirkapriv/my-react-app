import { useParams, Link } from "react-router-dom";

export default function CreatedCar() {
  const { id } = useParams();
  return (
    <>
      <p>Your created car: {id}</p>

      <Link to={`/car/${id}`}>
        <p>Veiw car</p>
      </Link>
      
      <Link to={"/"}>
        <p>GO home</p>
      </Link>
    </>
  );
}
