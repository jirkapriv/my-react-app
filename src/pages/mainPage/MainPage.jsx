import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <h1>Main page</h1>
      <Link to={"/createcar"}>
        <p>Create car form</p>
      </Link>
      <Link to={"/cars"}>
        <p>list of car</p>
      </Link>

    </>
  );
}
