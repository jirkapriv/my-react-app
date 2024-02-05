import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CarView() {
  const { id } = useParams();

  return (
    <>
      <p>Car view</p>
      <p>Your car id: {id}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
