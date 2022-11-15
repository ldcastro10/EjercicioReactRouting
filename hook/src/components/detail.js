import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const { useEffect, useState } = require("react");
export default function Detail() {
  const params = useParams();
  const id = Number(params.mascotaId)
  const [mascotaEncontrada, setMascotaEncontrada] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const mascotaEncontradaCOPY = data.find(element => element.id === id);
        setMascotaEncontrada(mascotaEncontradaCOPY);
      });
  }, [id]);

  return (
    <div>
      <h1>I am {mascotaEncontrada.nombre}</h1>
      <Card.Img
        style={{ width: "30rem"}}
        variant="top"
        src={mascotaEncontrada.foto}
        alt={mascotaEncontrada.descripcion}
      />
      <h1>I am {mascotaEncontrada.raza}</h1>
    </div>
  );
}