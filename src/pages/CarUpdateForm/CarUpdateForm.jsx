import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function CarUpdateForm() {
  const { id } = useParams();

  return (
    <>
      <p>Car create form</p>
      <p>id: {id}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
