import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import "./Zoo.module.css";
import axios from "axios";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: "Animalandia",
    animals: [],
    species: [],
    allAnimals: [],
  });

  /*   React.useEffect(() => {
    //let ignore = false;
    fetch("http://localhost:3001/zoo")
      .then((response) => response.json())
      .then((data) => {
        // if (!ignore && data) {
        console.log(data);
        setZoo((zooPrev) => {
          return {
            ...zooPrev,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
          };
        });
        // }
      });
    return () => {
      //ignore = true;
    }; 
  }, [zoo]); */

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3001/zoo");

      setZoo(result.data);
    };

    fetchData();
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleSpecies = (event) => {
    setZoo(
      (zooPrev) => {
        return {
          ...zooPrev,
          animals: zoo.animals.filter(
            (element) => element.specie === event.target.value
          ),
        };
      },
      () => {
        console.log(event.target.value);
      }
    );
  };

  const handleAllSpecies = (event) => {
    setZoo(
      (zooPrev) => {
        return {
          ...zooPrev,
          animals: zoo.allAnimals,
        };
      },
      () => {
        console.log(event.target.value);
      }
    );
  };

  const handleInputChange = (event) => {
    setZoo((zooPrev) => {
      return { ...zooPrev, zooName: event.target.value };
    });
  };

  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h1>{zoo.zooName}</h1>
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  );
}
