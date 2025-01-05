import React from 'react';
import './pages.css';
import hotelImg from './img/Hotel.jpg';
import fazendaImg from './img/Fazenda.jpg';
import pousadaImg from './img/Pousada.jpg';

const Hospedagem = () => {
  return (
    <div className="page-container">
      <h1>Hotéis</h1>
      <img 
        src={hotelImg} 
        alt="Hotel" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Trade Hotel</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 3800 - Cascatinha, Juiz de Fora - MG, 36033-318</p>
      <p>Telefone: (32) 3025-7500</p><br />

      <p><strong>Hotel Green Hill</strong></p>
      <p>Endereço: Av. Deusdedith Salgado, 4351 - Salvaterra, Juiz de Fora - MG, 36033-000</p>
      <p>Telefone: (32) 3236-4000</p><br />

      <p><strong>Serrano Residencial Hotel</strong></p>
      <p>Endereço: R. Santa Rita, 399 - Centro, Juiz de Fora - MG, 36010-071</p>
      <p>Telefone: (32) 3216-2800</p><br />

      <p><strong>Premier Parc Hotel</strong></p>
      <p>Endereço: Av. Deusdedith Salgado, 1805 - Teixeiras, Juiz de Fora - MG, 36033-016</p>
      <p>Telefone: (32) 3250-1700</p><br />

      <p><strong>Cesar Park Hotel</strong></p>
      <p>Endereço: Av. Getúlio Vargas, 181 - Centro, Juiz de Fora - MG, 36010-100</p>
      <p>Telefone: (32) 3215-4898</p><br />

      <p><strong>Constantino Hotel</strong></p>
      <p>Endereço: R. Santo Antônio, 765 - Centro, Juiz de Fora - MG, 36015-001</p>
      <p>Telefone: (32) 3229-9800</p><br />

      <p><strong>Victory Business Hotel</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 1850 - São Mateus, Juiz de Fora - MG, 36016-321</p>
      <p>Telefone: (32) 3249-1851</p><br />

      <p><strong>César Inn Hotel</strong></p>
      <p>Endereço: Av. Getúlio Vargas, 335 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (32) 3215-6599</p><br />

      <p><strong>Solar Flat Hotel</strong></p>
      <p>Endereço: Av. Getúlio Vargas, 353 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (32) 2101-1100</p><br />

      <p><strong>Hotel Renascença</strong></p>
      <p>Endereço: R. Raul Soares, 22 - Centro, Juiz de Fora - MG, 36045-475</p>
      <p>Telefone: (32) 3215-2836</p><br />

      <p><strong>Maxim Plaza Hotel</strong></p>
      <p>Endereço: Av. dos Andradas, 366 - Centro, Juiz de Fora - MG, 36036-000</p>
      <p>Telefone: (32) 3215-5542</p><br />

      <p><strong>Ritz Plaza Hotel</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2000 - Centro, Juiz de Fora - MG, 36015-510</p>
      <p>Telefone: (32) 3249-7300</p><br />



      <h1>Hotéis Fazenda</h1>
      <img 
        src={fazendaImg} 
        alt="Hotel Fazenda" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Hotel Fazenda Maria Maria</strong></p>
      <p>Endereço: Estrada de Caeté, Km 2, s/n - Retiro, Juiz de Fora - MG</p>
      <p>Telefone: (32) 98406-1719</p><br />

      <p><strong>Hotel Fazenda Cheiro Verde</strong></p>
      <p>Endereço: R. Afonso Bazarela Barra, 53 - Granjas Betania, Juiz de Fora - MG, 36047-400</p>
      <p>Telefone: (32) 3224-3939</p><br />

      <p><strong>Hotel Fazenda Estância Real</strong></p>
      <p>Endereço: Estrada Filgueiras a Chácara, Km 8,5, Juiz de Fora – MG, 36110-000</p>
      <p>Telefone: (32) 3277-1002</p><br />



      <h1>Pousadas</h1>
      <img 
        src={pousadaImg} 
        alt="Pousada" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Pousada Aconchego de Minas</strong></p>
      <p>Endereço: R. Dr. Décio Guanabarino, 1 - Novo Horizonte, Juiz de Fora - MG, 36038-400</p>
      <p>Telefone: (32) 3233-1305</p><br />

      <p><strong>Pousada Do Mendonça</strong></p>
      <p>Endereço: R. Afonso Bazarela Barra, 53 - Granjas Betania, Juiz de Fora - MG, 36047-400</p>
      <p>Telefone: (32) 3224-3939</p><br />

      <p><strong>Pousada Lago das Pedras</strong></p>
      <p>Endereço: Av. Thiago de Aquino Ramos, 1040 - Salvaterra, Matias Barbosa - MG, 36120-000</p>
      <p>Telefone: (32) 3231-3700</p><br />

      <p><strong>Pousada do João</strong></p>
      <p>Endereço: R. Mercedes Rodrigues Barreto, 513 - Betania, Juiz de Fora - MG, 36047-330</p>
      <p>Telefone: (32) 99982-0898</p><br />

      <p><strong>Pousada Vale do Amanhecer</strong></p>
      <p>Endereço: Rua Randall Oliveira, 202 - Aeroporto - Parque Guadalajara, Juiz de Fora - MG, 36033-660</p>
      <p>Telefone: (32) 99925-7073</p><br />
    </div>
  );
};

export default Hospedagem;
