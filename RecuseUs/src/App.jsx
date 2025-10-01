import React from "react";
import "./App.css";
import "./scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import CaixasRE from "./components/CaixasRE";

const App = () => {
  return (
    <div className="organizando">

      <h1>Recursos Essenciais</h1>
      <p className="w-25">
        Ferramentas desenvolvidas especialmente para as necessidades dos
        bombeiros em campo
      </p>

      <CaixasRE />

      <h1>Confiado por profissionais</h1>
      <p className="w-25">
        Veja o que os bombeiros de todo o Brasil estão dizendo.
      </p>
    </div>
  );
};

export default App;
