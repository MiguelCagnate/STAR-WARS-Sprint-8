import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./FullDataShips.css";

export function FullDataShips() {
  let { id } = useParams();
  const [starship, setStarship] = useState({});

  useEffect(() => {
    const getStarshipData = async () => {
      const url = `https://swapi.dev/api/starships/${id}`;
      const result = await axios.get(url);
      setStarship(result.data);
    };
    getStarshipData();
  }, []);

  return (
    <div>
      <img
        className="image"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
        alt={starship.name}
      />
      <h1 className="DataStyle">{starship.name}</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Length</th>
            <th>Starship Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{starship.model}</td>
            <td>{starship.length}</td>
            <td>{starship.starship_class}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
