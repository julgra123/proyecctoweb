import React from "react";
import styles from "./ONG.module.css";

const Contact = () => {
  return (
    <div name="Contact" className={styles.contact}>
      <h2>PAGINA DE CONTACTO A UNA ONG DE CUIDADO DEL MEDIO AMBIENTE</h2>
      <form
        className={styles.form}
        action="https://ayudaenaccion.org/proyectos/r/latinoamerica/bolivia/"
      >
        <button type="submit">PAGINA</button>
    
      </form>
      
    </div>
  );
};

export default Contact;