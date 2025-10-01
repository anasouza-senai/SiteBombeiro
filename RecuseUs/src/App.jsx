import React from "react";
import "./App.css";
import "./scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import CaixasRE from "./components/CaixasRE";
import CaixasCP from "./components/CaixasCP";

const App = () => {
  
  return (
    <div>

      <div className="titulos-centrais mt-5">
      <h1>Recursos Essenciais</h1>
      <p className="w-25">
        Ferramentas desenvolvidas especialmente para as necessidades dos
        bombeiros em campo
      </p>
      </div>

      <div className="caixas-container " id="caixasRE">
      <CaixasRE
      subtituloCRE="Extensão de Rede Wi-Fi"
      textoCRE="Amplie a cobertura de rede em operações de emergência para melhor comunicação entre equipes."
      iconCRE={<i className='bi bi-wifi'></i>}
      />
      <CaixasRE
      subtituloCRE="Histórico de Ocorrências"
      textoCRE="Mantenha registro completo de todas as operações realizadas com dados detalhados."
      iconCRE={<i class="bi bi-clock-history"></i>}
      />
      <CaixasRE
      subtituloCRE="Primeiros Socorros"
      textoCRE="Acesso rápido a procedimentos de emergências com instruções passo-a-passo."
      iconCRE={<i class="bi bi-heart"></i>}
      />
      </div>

      <div className="titulos-centrais mt-5">
      <h1>Confiado por profissionais</h1>
      <p className="w-25">
        Veja o que os bombeiros de todo o Brasil estão dizendo.
      </p>
      </div>

      <div className="caixas-container " id="caixasCP">
      <CaixasCP
      textoCCP="“O app revolucionou nossa comunicação em campo. A extensão Wi-Fi salvou vidas em operações complexas.” "
      bombeiroCCP="Capitão Silva"
      lugarCCP="Corpo de Bombeiros - SP"
      />
      <CaixasCP
      textoCCP="“Interface intuitiva e recursos essenciais. O histórico nso ajuda muito  no planejamento de operações.”"
      bombeiroCCP="Sargento Costa"
      lugarCCP="Bombeiros Voluntários - RJ"
      />
      <CaixasCP
      textoCCP="“Primeiros socorros sempre à mão. Indispensável para qualquer profissional de emergência.”"
      bombeiroCCP="Tenente Oliveira"
      lugarCCP="Corpo de Bombeiros - MG"
      />
      </div>

    </div>
  );
};

export default App;
