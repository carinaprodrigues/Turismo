import React from 'react';
import './pages.css';
import hospitalImg from './img/Hospital.jpg';
import clinicaImg from './img/Clinica.jpg';

const Hospitais = () => {
  return (
    <div className="page-container">
      <h1>Hospitais Particulares</h1>
      <img 
        src={hospitalImg} 
        alt="Hospital" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Hospital Monte Sinai</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 4000 - Cascatinha, Juiz de Fora - MG, 36033-318</p>
      <p>Telefone: (32) 2104-4000</p><br />

      <p><strong>Hospital Albert Sabin</strong></p>
      <p>Endereço: Rua Edgard Carlos Pereira, 600, Juiz de Fora, MG, 36020-200</p>
      <p>Telefone: (32) 3249-7000</p><br />

      <p><strong>Hospital Doutor João Felício</strong></p>
      <p>Endereço: Rua Barão de Juiz de Fora, 88, Juiz de Fora, MG, 36062-410</p>
      <p>Telefone: (32) 3311-9000</p><br />

      <p><strong>Hospital Unimed Dr. Hugo Borges</strong></p>
      <p>Endereço: Av. Deusdedith Salgado, 3865 - Salvaterra, Juiz de Fora - MG, 36033-007</p>
      <p>Telefone: (32) 3512-2200</p><br />
      


      <h1>Hospitais Gerais</h1>
      <p><strong>Hospital e Maternidade Therezinha de Jesus</strong></p>
      <p>Endereço: R. Dr. Dirceu de Andrade, 33 - São Mateus, Juiz de Fora - MG, 36025-140</p>
      <p>Telefone: (32) 4009-2277</p><br />

      <p><strong>Santa Casa de Misericórdia de Juiz de Fora </strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3353 - Passos, Juiz de Fora - MG, 36021-630</p>
      <p>Telefone: (32) 3229-2222</p><br />

      <p><strong>Hospital Ascomcer</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 3500 - Cascatinha, Juiz de Fora - MG, 36033-318</p>
      <p>Telefone: (32) 3311-4000</p><br />

      <p><strong>Hospital São Vicente de Paulo de Minas gerais</strong></p>
      <p>Endereço: R. Delfim Moreira, 62 - Centro, Juiz de Fora - MG, 36010-570</p>
      <p>Telefone: (32) 2102-2000</p><br />



      <h1>Hospitais Públicos</h1>
      <p><strong>Hospital Universitário UFJF - Unidade Santa Catarina</strong></p>
      <p>Endereço: Rua Catulo Breviglieri Bairro, s/n - Santa Catarina, Juiz de Fora - MG, 36036-110 </p>
      <p>Telefone: (32) 4009-5131</p><br />

      <p><strong>HPS - Hospital de Pronto Socorro Dr. Mozart Teixeira </strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3408 - Bom Pastor, Juiz de Fora - MG, 36010-050</p>
      <p>Telefone: (32) 3690-8358</p><br />

      <p><strong>Hospital Ascomcer</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 3500 - Cascatinha, Juiz de Fora - MG, 36033-318</p>
      <p>Telefone: (32) 3311-4000</p><br />

      <p><strong>Hospital São Vicente de Paulo de Minas gerais</strong></p>
      <p>Endereço: R. Delfim Moreira, 62 - Centro, Juiz de Fora - MG, 36010-570</p>
      <p>Telefone: (32) 2102-2000</p><br />



      <h1>Unidade de Pronto Atendimento (UPA), Unidade Básica de Saúde (UBS) e Unidade de Atendimento da Secretaria de Saúde(SS) :</h1>
      <p><strong>UPA Santa Luzia</strong></p>
      <p>Endereço: R. Ibitiguaia, 1230 - Santa Luzia, Juiz de Fora - MG, 36031-000 </p>
      <p>Telefone: (32) 2102-0876</p><br />

      <p><strong>UPA São Pedro</strong></p>
      <p>Endereço: R. Maj. Lino Lima, 129 - São Pedro, Juiz de Fora - MG, 36037-430</p>
      <p>Telefone: (32) 4009-2278</p><br />

      <p><strong>UBS Centro Sul</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3132 - Centro, Juiz de Fora - MG, 36015-510</p>
      <p>Telefone: (32) 3690-7157</p><br />

      <p><strong>UBS Vila Ideal</strong></p>
      <p>Endereço: Av. Francisco Valadares, 1900 - Poço Rico, Juiz de Fora - MG, 36020-485</p>
      <p>Telefone: -</p><br />

      <p><strong>UBS Santa Cecília</strong></p>
      <p>Endereço: R. Gabriel Rodrigues - Santa Cecilia, Juiz de Fora - MG, 36026-100</p>
      <p>Telefone: (32) 3690-7752</p><br />

      <p><strong>UBS Nossa Senhora de Lourdes</strong></p>
      <p>Endereço: R. Inácio da Gama - Nossa Sra. de Lourdes, Juiz de Fora - MG, 36070</p>
      <p>Telefone: (32) 3690-7556</p><br />

      <p><strong>PAM Marechal</strong></p>
      <p>Endereço: R. Marechal Deodoro, 496 - Centro, Juiz de Fora - MG, 36015-510</p>
      <p>Telefone: (32) 3690-7392</p><br />



      <h1>Clínicas Veterinárias</h1>
      <img 
        src={clinicaImg} 
        alt="Clínica Veterinária" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Clínica Veterinária Juiz de Fora</strong></p>
      <p>R. Delfim Moreira, 125 - Centro, Juiz de Fora - MG, 36010-570</p>
      <p>Telefone: (32) 3216-9388</p><br />

      <p><strong>Prontovet</strong></p>
      <p>Endereço: R. Dr. Antônio Carlos, 394 - Centro, Juiz de Fora - MG, 36010-560</p>
      <p>Telefone: (32) 3217-7792</p><br />

      <p><strong>Clínica Veterinária Animais - 24h</strong></p>
      <p>Endereço: R. São Mateus, 918 - São Mateus, Juiz de Fora - MG, 36025-001</p>
      <p>Telefone: (32) 3232-1815</p><br />

      <p><strong>Hospital Veterinário São Francisco 24 horas</strong></p>
      <p>Endereço: Av. Dr. Paulo Japiassú Coelho, 720 - Cascatinha, Juiz de Fora - MG, 36033-310</p>
      <p>Telefone: (32) 3236-2018</p><br />

      <p><strong>Clínica Veterinária RIMNOW</strong></p>
      <p>Endereço: Av. Sete de Setembro, 891 - Costa Carvalho, Juiz de Fora - MG, 36070-000</p>
      <p>Telefone: (32) 3211-2353</p><br />

      <p><strong>Clínica e Hospital Veterinário VET4PET 24hrs</strong></p>
      <p>Endereço: Av. Dr. José Procópio Teixeira, 4 - Bom Pastor, Juiz de Fora - MG, 36021-540</p>
      <p>Telefone: (32) 3031-4141</p><br />

      <p><strong>Hospital Veterinário Estrada Real</strong></p>
      <p>Endereço: R. Alencar Tristão, 287 - Santa Terezinha, Juiz de Fora - MG, 36046-010</p>
      <p>Telefone: (32) 3224-6650</p><br />
    </div>
  );
};

export default Hospitais;
