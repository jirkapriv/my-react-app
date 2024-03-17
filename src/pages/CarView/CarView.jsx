import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCar, deleteCar } from "../../models/Car";

export default function CarView() {
    const {id} = useParams();
    const[car,setCar] = useState();                    //ukladani aut
    const[isLoaded, setLoaded] = useState(false);         //zda je stranka nactena
    const[info, setInfo] = useState();                  //pokud budou mazat tak proc to neslo atd
    const[formData, setFormData] = useState();        //pro formular
    const navigate = useNavigate();                   //pokud se auto smaze tak nas to presmeruje jinam

    const load = async () => {                            //funkce nacteni dat pred vstupem na stranku
      const data = await getCar(id);                      //v zavorce id, aby se vedelo jake auto
      if (data.status === 500) return setLoaded(null);    //pokud se stranka nenacte tak se to vrati
      if (data.status === 200) {
        setCar(data.payload);
        setLoaded(true);
      };
    }
  

    useEffect(() => {         //po spusteni stranky se zavola funkce
      load();
    }, []);                   //pokud jsou [] prazdne tak se to udela jen na zacatku
    
    const handleChange = (e) => {    //pokud do vstupu bude psat nejaky text tak se bude dit event(e)
      setFormData(e.target.value);
    }

    const redirectToMainPage = () => {
      return navigate("/");
    }

    const handleDelete = async (e) => {
      e.preventDefault();           //zadne refresovani nenastane zamezujeme tomu
      if (car.name === formData) {    //pokud se jmeno shoduje 
        const data = await deleteCar(id);     //
        if (data.status === 200){             //pokud je vse ok tak se stane funkce
          redirectToMainPage();               
        } else{                               //pokud neni spravne tak to vypise zpravu chyby
          setInfo(data.msg);
        }
      }
      else{                         //pokud se neshoduje 
        setInfo("Wrong input")      //do zpravy se vypise chyba
      }
    }


    if (isLoaded === null){   //pokud auta nenactou
      return (
        <>
          <p>Car not found</p>
        </>
      )
    }

    if (!isLoaded){           //pokud se jeste nacitaji auta
      return (
        <>
          <p>Loading car...</p>
        </>
      )
    }



  return (
    <>
      <h1>Car view</h1>
      <p>Your car: {id}</p>
      <p>Name: {car.name}</p>
      <p>Model: {car.model}</p>
      <p>Color: {car.color}</p>
      <p>Shifting: {car.shifting}</p>
      <p>Year: {car.year}</p>
      <form> 
        <input type="text" />
        <button></button>
        <p>{info}</p>
      </form>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
