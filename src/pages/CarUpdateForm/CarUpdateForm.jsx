import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCar, updateCar } from "../../models/Car";

export default function CarUpdateForm() {
  const { id } = useParams();
  const [car, setCar] = useState(); //ukladani aut
  const [isLoaded, setLoaded] = useState(false); //zda je stranka nactena
  const [info, setInfo] = useState(); //pokud budou mazat tak proc to neslo atd
  const [formData, setFormData] = useState(); //pro formular
  const navigate = useNavigate(); //pokud se auto smaze tak nas to presmeruje jinam

  const load = async () => {
    //funkce nacteni dat pred vstupem na stranku
    const data = await getCar(id); //v zavorce id, aby se vedelo jake auto
    if (data.status === 500) return setLoaded(null); //pokud se stranka nenacte tak se to vrati
    if (data.status === 200) {
      setCar(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    //po spusteni stranky se zavola funkce
    load();
  }, []); //pokud jsou [] prazdne tak se to udela jen na zacatku

  const updateForm = async () => {
    const car = await updateCar(id, formData);
    if (car.status === 200) {
      redirectToSuccesPage(car.payload._id);
    } else {
      setinfo(car.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateForm();
  };

  const redirectToSuccesPage = (id) => {
    return navigate(`/car/${id}`);
  };

  if (isLoaded === null) {
    //pokud auta nenactou
    return (
      <>
        <p>Car not found</p>
      </>
    );
  }

  if (!isLoaded) {
    //pokud se jeste nacitaji auta
    return (
      <>
        <p>Loading car...</p>
      </>
    );
  }

  return (
    <>
      <p>id: {id}</p>


<form>
        <input
          type="text"
          defaultValue={car.name}
          required
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={car.model}

          required
          name="model"
          placeholder="Enter model"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={car.color}

          required
          name="color"
          placeholder="Enter color"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={car.shifting}

          required
          name="shifting"
          placeholder="Enter shifting"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          defaultValue={car.year}

          required
          name="year"
          placeholder="Enter year"
          onChange={(e) => handleChange(e)}
        />

        <button onClick={handleUpdate}>Send</button>
      </form>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
