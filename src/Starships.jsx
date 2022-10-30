import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function StarshipsRender() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async (url) => {
      const result = await axios.get(url);
      setStarships(result.data.results);
    };

    const handleScroll = () => {
      const distanceFromBottom =
        document.body.scrollHeight - window.innerHeight - window.scrollY;
      if (distanceFromBottom <= 0) {
        const nextPage = starships[0];
        debugger;
        getStarships(nextPage);
      }
    };

    getStarships("https://swapi.py4e.com/api/starships/");

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  function getId(url) {
    return url.split("/").at(-2);
  }

  return (
    <div>
      <ul className="DataStyle">
        {starships.length === 0 && <p>Loading...⏲</p>}
      </ul>
      {starships.map((ships, i) => {
        return (
          <li key={i}>
            <h4 className="DataStyle">
              {ships.name}{" "}
              <li className="ModelStarshipStyle">
                <Link to={`/StarshipsRender/${getId(ships.url)}`}>
                  {ships.model}
                </Link>
              </li>
            </h4>
          </li>
        );
      })}
    </div>
  );
}
