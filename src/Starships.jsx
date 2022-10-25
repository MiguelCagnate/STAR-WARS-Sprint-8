import React, { useEffect, useState } from "react";
import axios from "axios";

function StarshipsRender() {
  const [Starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const url = "https://swapi.py4e.com/api/starships/";
      const result = await axios.get(url);

      setStarships(result.data.results);
    };
    getStarships();
},[]);

return (
    <div>
     <ul className="DataStyle">
        {Starships.length === 0 && <p>Loading...</p>}
      </ul>
      {Starships.map((ships, i) => {
        return (
          <li key={i}>
            <h4 className="DataStyle">
            {ships.name} <li className="ModelStarshipStyle">{ships.model}</li>{" "}
            </h4>
          </li>
        );
      })}
    </div>
  );
}

export default StarshipsRender;
