/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

export const ThirdExercises = () => {
  return (
    <>
      <NavLink to="/exercise2">
        <button style={{ margin: "0 20px" }}>Go Back</button>
      </NavLink>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          position: "relative",
          padding: "0 30px",
        }}
      >
        <h2>Exercice 3</h2>
        <p>Appel API.</p>
        <p>Objectif : </p>
        <ul>
          <li>API : https://dog.ceo/api/breeds/list/all</li>
          <li>Appel à l'API via Axios</li>
          <li>Stockage de la data API</li>
          <li>Afficher toutes les races de chien d'un coup</li>
          <li>
            Créer un composant input générique plutôt que d'avoir 10 inputs avec
            10 styles pareil.
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            gap: "30px",
            margin: "0 10px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              width: "45%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "black" }}>Nom de la race</p>
          </div>
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              width: "45%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "black" }}>Nom de la race</p>
          </div>
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              width: "45%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
              
            }}
          >
            <p style={{ color: "black" }}>Nom de la race</p>
          </div>
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              width: "45%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "black" }}>Nom de la race</p>
          </div>
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              width: "45%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "black" }}>Nom de la race</p>
          </div>
          <div
            style={{
              borderRadius: "10px",
              backgroundColor: "white",
              width: "45%",
              height: "30%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "black" }}>Nom de la race</p>
          </div>
        </div>
      </div>
    </>
  );
};

ThirdExercises.displayName = "ThirdExercises";
