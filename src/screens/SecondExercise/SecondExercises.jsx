/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";

export const SecondExercises = () => {
  return (
    <>
    <div style={{ width: '100%', display: "flex", justifyContent: "space-between"}}>
      <NavLink to="/exercise1">
        <button>Go Back</button>
      </NavLink>
      <NavLink to="/exercise3">
        <button>Exercice 3</button>
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
        <h2>Exercice 2</h2>
        <p>Gestion d'un formulaire.</p>
        <p>Objectif : </p>
        <ul>
          <li>Gestion des inputs pour pouvoir modifier la valeur</li>
          <li>Gestion du stockage de ses valeurs</li>
          <li>
            Créer un composant input générique plutôt que d'avoir 10 inputs avec 10 styles pareil.
          </li>
          <li>
            Bonus : Gestion de l'input générique en évitant d'avoir 10 states différents.
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px 20px",
            gap: "10px",
          }}
        >
          <input
            style={{ borderRadius: "5px", padding: "10px" }}
            className="name-input"
            name={name}
            value={"value1"}
            required
          />
          <input
            style={{ borderRadius: "5px", padding: "10px" }}
            className="name-input"
            name={name}
            value={"value1"}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px 20px",
            gap: "10px",
          }}
        >
          <input
            style={{ borderRadius: "5px", padding: "10px" }}
            className="name-input"
            name={name}
            value={"value1"}
            required
          />
          <input
            style={{ borderRadius: "5px", padding: "10px" }}
            className="name-input"
            name={name}
            value={"value1"}
            required
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "5px 20px",
            gap: "10px",
          }}
        >
          <input
            style={{ borderRadius: "5px", padding: "10px" }}
            className="name-input"
            name={name}
            value={"value1"}
            required
          />
          <input
            style={{ borderRadius: "5px", padding: "10px" }}
            className="name-input"
            name={name}
            value={"value1"}
            required
          />
        </div>


      </div>
    </>
  );
};

SecondExercises.displayName = "SecondExercises";
