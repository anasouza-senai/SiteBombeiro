import "./App.css";
import LogoDark from "./assets/LogoDark.png";
import faixa from "./assets/faixa.jpg";
import {
  FaApple,
  FaAndroid,
  FaRegCheckCircle,
  FaDownload,
  FaExclamationTriangle, 
} from "react-icons/fa";

import React from "react";
import "./scss/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import CaixasRE from "./components/CaixasRE";
import CaixasCP from "./components/CaixasCP";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src={LogoDark} alt="Rescue US Logo" className="logo" />                                                                                                                                                                                                                                          
        </div>
        <p className="description">
          O aplicativo definitivo para profissionais de emergência. Conecte
          equipes, gerencie operações e salve vidas com tecnologia de ponta.
        </p>
        <div className="download-buttons">
          <button className="button android-button">
            <FaAndroid className="icon" /> Baixar para Android
          </button>
          <button className="button ios-button">
            <FaApple className="icon" /> Baixar para iOS
          </button>
        </div>
        <div className="features">
          <div className="feature-item">
            <FaRegCheckCircle className="check-icon" /> Gratuito
          </div>
          <div className="feature-item">
            <FaRegCheckCircle className="check-icon" /> Sem anúncios
          </div>
          <div className="feature-item">
            <FaRegCheckCircle className="check-icon" /> Suporte 100%
          </div>
        </div>
      </header>

      <div className="stats-section">
        <div className="stat-item">
          <h2>10K+</h2>
          <p>Bombeiros Ativos</p>
        </div>
        <div className="stat-item">
          <h2>50K+</h2>
          <p>Vidas Salvas</p>
        </div>
        <div className="stat-item">
          <h2>100%</h2>
          <p>Uptime</p>
        </div>
        <div className="stat-item">
          <h2>100%</h2>
          <p>Suporte</p>
        </div>
        </div>
        

      <div>

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
      </div>

      <div className="cta-section" style={{ backgroundImage: `url(${faixa})` }}>
        <h2 className="cta-title">Pronto para Salvar Mais Vidas?</h2>
        <p className="cta-subtitle">
          Junte-se a milhares de bombeiros que já utilizam o Chamar SOS
        </p>

        <button className="cta-button">
          <FaDownload className="icon" /> Baixar Agora - Grátis
        </button>

        <p className="cta-info">
          Disponível para Android e IOS • Sem custos • Suporte completo
        </p>

      <footer className="footer-container">
        <div className="footer-main-content">
          <div className="footer-col logo-col">
            <div className="footer-logo-container">
              <img src={LogoDark} alt="RESCUE US Logo" className="logo" />
            </div>
            <p className="footer-description">
              Tecnologia de serviço da vida.
              <br />
              Conectando bombeiros para salvar mais vidas.
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">Produto</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Recursos</a>
              </li>
              <li>
                <a href="#">Preços</a>
              </li>
              <li>
                <a href="#">Suporte</a>
              </li>
              <li>
                <a href="#">Documentação</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">Empresa</h4>
            <ul className="footer-links">
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Carreiras</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-col emergency-col">
            <h4 className="footer-title">Emergência</h4>
            <div className="emergency-call">
              <FaExclamationTriangle className="alert-icon" />
              <div>
                {" "}
                <span className="emergency-number">193 -</span>
                <span className="emergency-number"> Bombeiros</span>
              </div>
            </div>
            <p className="emergency-note">
              Em casos de emergências, sempre acione os bombeiros primeiro
            </p>
          </div>
        </div>
        <div className="footer-copyright">
          2025 Recuse US • Todos os direitos reservados
        </div>
      </footer>
    </div>
    </div>
  );
};

export default App;