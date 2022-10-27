import React, { useEffect, useState } from "react";
import axios from "axios";

export function FullDataShips() {
  const [Starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const url = "https://swapi.dev/api/starships/?page=1";
      const result = await axios.get(url);

      setStarships(result.data.results);
    };
    getStarships();
  }, []);

  return (
    <div>
      <ul className="DataStyle">
        {Starships.length === 0 && <p>Loading...⏲</p>}
      </ul>

      {Starships.map((ships, i) => {       
        let getNumber = ships.url.split("");
        let getId = getNumber.slice(-2, -1);
        return (
          <li key={i}>
            <link>
              <h4 className="DataStyle">
                {ships.name}{" "}
                <li className="ModelStarshipStyle">{ships.model}</li>{" "}
              </h4>
            </link>
          </li>
        );
      })}
    </div>
  );
}
