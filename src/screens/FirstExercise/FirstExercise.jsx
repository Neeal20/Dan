/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { Modal } from "./components/Modal";

export const FirstExercise = () => {
  return (
    <>
    <div style={{ width: '100%', display: "flex", justifyContent: "space-between"}}>
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>
      <NavLink to="/exercise2">
        <button>Exercice 1</button>
      </NavLink>
    </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          height: "100vh",
          position: "relative",
          padding: "0 30px",
        }}
      >
        <h2>Exercice 1</h2>
        <p>Création d'un composant modal générique.</p>
        <p>Objectif : </p>
        <ul>
          <li>Afficher la modal en gérant son état</li>
          <li>Gérer son état : Fermture / Ouverture de celle-ci</li>
          <li>Afficher en titre : Vente en cours</li>
          <li>
            Afficher en description :Pre-order Offer: Get FREE 8 individual
            transparent keycaps (no need to add them to your cart) A Twotone
            wrist rest at 50% off (retail price $34 ~ $39) A Bokeh deskmat at
            50% off (retail price $24)
          </li>
          <li>Afficher en nom de bouton : Fermer</li>
          <li>
            L'affiche de tout ça doit être générique, on ne veut pas écrire en
            dur dans le composant directement.
          </li>
        </ul>
        <button style={{ width: "20%" }}>Ouvrir la modal</button>
        {<Modal />}
      </div>
    </>
  );
};

FirstExercise.displayName = "FirstExercise";
