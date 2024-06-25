import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function StarshipsRender() {
  const page = useRef(1);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async (url) => {
      const result = await axios(url);
      if (result.data.next) {
        setStarships((prevStarships) => [
          ...prevStarships,
          ...result.data.results,
        ]);
      }
      page.current = result.data.next
        ? result.data.next.split("=")[1]
        : page.current;
    };

    const handleScroll = () => {
      const distanceFromBottom =
        document.body.scrollHeight - window.innerHeight - window.scrollY;
      if (distanceFromBottom <= 0) {
        getStarships(
          `https://swapi.py4e.com/api/starships?page=${page.current}`
        );
      }
    };

    getStarships(`https://swapi.py4e.com/api/starships?page=${page.current}`);

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
