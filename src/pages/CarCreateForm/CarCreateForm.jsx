import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCar } from "../../models/Car";

export default function CarCreateForm() {
  const [formData, setFormData] = useState();
  const [info, setinfo] = useState();
  const navigate = useNavigate();

  const postForm = async() => {
      const car = await createCar(formData);
      if (car.status === 201){
        redirectToSuccesPage(car.payload._id)
      }else{
        setinfo(car.msg)
      }
  };
  useEffect(()=>{
    console.log(formData)
  }, [formData])

  const handleChange = (e) => {

    setFormData({...formData, [e.target.name]: e.target.value})

  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccesPage = (id) => {
    return navigate(`/createdcar/${id}`);
  };

  return (
    <>
      <h1>Car create form</h1>

      <form>

      <input type="text" required name="name" placeholder="Enter name" onChange={e=>handleChange(e)}/>
      <input type="text" required name="model" placeholder="Enter model" onChange={e=>handleChange(e)}/>
      <input type="text" required name="color" placeholder="Enter color" onChange={e=>handleChange(e)}/>
      <input type="text" required name="shifting" placeholder="Enter shifting" onChange={e=>handleChange(e)}/>
      <input type="text" required name="year" placeholder="Enter year" onChange={e=>handleChange(e)}/>

      <button onClick={handlePost}>Send</button>

      </form>




      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
