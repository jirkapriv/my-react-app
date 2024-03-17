import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCars } from "../../models/Car";
import CarLink from "./CarLink";

export default function CarList() {
  const[cars, setCars] = useState();                    //ukladani aut
  const[isLoaded, setLoaded] = useState(false);         //zda je stranka nactena

  const load = async () => {                            //funkce nacteni dat pred vstupem na stranku
    const data = await getCars();
    if (data.status === 500) return setLoaded(null);    //pokud se stranka nenacte tak se to vrati
    if (data.status === 200) {
      setCars(data.payload);
      setLoaded(true);
    };
  }

  useEffect(() => {         //po spusteni stranky se zavola funkce
    load();
  }, []);                   //pokud jsou [] prazdne tak se to udela jen na zacatku

  if (isLoaded === null){   //pokud auta nenactou
    return (
      <>
        <p>Cars not found</p>
      </>
    )
  }
  if (!isLoaded){           //pokud se jeste nacitaji auta
    return (
      <>
        <p>Loading cars...</p>
      </>
    )
  }

  return (
    <>
      <h1>Cars View (list)</h1>
      {
        //tyto zavorky slouzi pro psani javascriptu v html

        cars.map((car, index) => (                  //tento prikaz projede kazdy zaznam a vytvori tag pro kazdy (takovy cykl)

          <CarLink key={index} {...car} />          //ocislovani pomoci klice a pak to bude projizdet napr: 0, 1, 2
                                                    // 3 tecky jsou spread operator
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
