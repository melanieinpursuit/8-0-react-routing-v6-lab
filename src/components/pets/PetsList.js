import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { petData } from "../../data/pets";

export const PetsList = ({ pets }) => {
  let { kind } = useParams()
  let Navigate = useNavigate()

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
    );

    useEffect(() => {
      if (kind === undefined) {
        Navigate("/pets/cats")
      }
    }, []) 
    
  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">

        {/* All cats section */}
        {kind === 'cats' || kind === undefined ? cats.map((cat) => (
          <Pet key={cat.id} kind="cat" pet={cat} />
          )) : null}

        {/* All dogs section */}
        {kind === 'dogs' || kind === undefined ? dogs.map((dog) => (
          <Pet key={dog.id} kind="dog" pet={dog} />
        )) : null}
      </section>
    </section>
  );
};

export default PetsList;
