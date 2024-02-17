import { useState } from "react";

export const Modal = () => {
    const [isOpen, setOpen] = useState(false);
    <div
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      hegiht: "100%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
        borderRadius: "10px",
      }}
      className={isOpen ? "animate__animated animate__slideInUp" : ""}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px 20px",
        }}
      >
        <h1 style={{ color: "white" }}>Ceci est une modal</h1>
        <p style={{ color: "white" }}>
          Ceci est la description de la modal via du Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Provident, eaque neque
          accusamus ipsam, aspernatur vero quo perspiciatis officiis
          mollitia quas amet aliquid saepe ex dolore, quae molestias ipsum
          inventore? Dolorem.
        </p>
        <button onClick={() => setOpen(false)}>Fermer</button>
      </div>
    </div>
  </div>
}