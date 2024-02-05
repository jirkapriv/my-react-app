import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to={"/createcar"}>
        <p>Create car form</p>
      </Link>
      <Link to={"/updatecar/412"}>
        <p>Update car form</p>
      </Link>
      <Link to={"/car/5112"}>
        <p>view car</p>
      </Link>
      <Link to={"/cars"}>
        <p>list of car</p>
      </Link>
    </>
  );
}
