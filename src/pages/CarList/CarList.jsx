import { Link } from "react-router-dom";

export default function CarList() {
  return (
    <>
      <p>Car List</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
