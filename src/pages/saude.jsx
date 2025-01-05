import React from 'react';
import './pages.css';
import academiaImg from './img/Academia.jpg';
import crossImg from './img/Cross.jpg';
import meditacaoImg from './img/Meditacao.jpg';
import maciaisImg from './img/Maciais.jpg';
import dancaImg from './img/Danca.jpg';

const Saude = () => {
  return (
    <div className="page-container">
      <h1>Academias</h1>
      <img 
        src={academiaImg} 
        alt="Academia" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Academia Pumping Iron</strong></p>
      <p>Endereço: R. Espírito Santo, 781 - Centro, Juiz de Fora - MG, 36010-040</p>
      <p>Telefone: (32) 3215-7607</p><br />

      <p><strong>Academia Espaço Vital</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 1418 - 6º andar - Centro, Juiz de Fora - MG, 36016-320</p>
      <p>Telefone: (32) 98885-0883</p><br />

      <p><strong>Academia Fibratech</strong></p>
      <p>Endereço: R. Oscar Vidal, 274 - Centro, Juiz de Fora - MG, 36016-290</p>
      <p>Telefone: -</p><br />
      <p>Endereço: Ladeira Alexandre Leonel, 221 - Estrela Sul, Juiz de Fora - MG, 36033-240</p>
      <p>Telefone: (32) 99915-6847</p><br />

      <p><strong>Black Fitness Academia</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2258 - Centro, Juiz de Fora - MG, 36016-310</p>
      <p>Telefone: (32) 3215-2381</p><br />

      <p><strong>Coliseu Academia - Unidade Centro</strong></p>
      <p>Endereço: R. Henrique Surerus, 30 - Centro, Juiz de Fora - MG, 36010-030</p>
      <p>Telefone: (32) 99969-6214</p><br />

      <p><strong>Power Up Academia</strong></p>
      <p>Endereço: R. Espírito Santo, 435 - Centro, Juiz de Fora - MG, 36010-040</p>
      <p>Telefone: (32) 3512-6053</p><br />

      <p><strong>Academia Dynamo Centro</strong></p>
      <p>Endereço: Av. Independência, 915 - Centro, Juiz de Fora - MG, 36010-021</p>
      <p>Telefone: (32) 3017-9907</p><br />

      <p><strong>Fortes Academia</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 1963 - São Mateus, Juiz de Fora - MG, 36016-321</p>
      <p>Telefone: (32) 4141-3144</p><br />


      <h1>Crossfit</h1>
      <img 
        src={crossImg} 
        alt="Crossfit" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Gávea CrossFit Juiz de Fora</strong></p>
      <p>Endereço: R. Santo Antônio, 1330 - Centro, Juiz de Fora - MG, 36016-210</p>
      <p>Telefone: (32) 99950-5669</p><br />

      <p><strong>Profit Academia De Treinamento Funcional</strong></p>
      <p>Endereço: R. Santo Antônio, 270 - Centro, Juiz de Fora - MG, 36011-000</p>
      <p>Telefone: (32) 3211-3631</p><br />

      <p><strong>Taurus - Centro de Treinamento</strong></p>
      <p>Endereço: R. Cristovam Molinari, n° 08 - Morro da Glória, Juiz de Fora - MG, 36035-125</p>
      <p>Telefone: (32) 99930-8165</p><br />

      <p><strong>Cross Experience Manoel Honório</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 677 - Manoel Honório, Juiz de Fora - MG, 36045-120</p>
      <p>Telefone: (32) 99168-7521</p><br />

      <p><strong>Cross Experience Alto Dos Passos: Academia, Treinos, Suplementação</strong></p>
      <p>Endereço: R. Morais e Castro, 273 - Passos, Juiz de Fora - MG, 36025-160</p>
      <p>Telefone: (32) 99800-8775</p><br />


      <h1>Meditação / Yoga</h1>
      <img 
        src={meditacaoImg} 
        alt="Meditação / Yoga" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Santosha Yoga Juiz de Fora</strong></p>
      <p>Endereço: R. São Sebastião, 911 - Centro, Juiz de Fora - MG, 36013-260</p>
      <p>Telefone: (32) 99196-7604</p><br />

      <p><strong>HARMONIZAR | Yoga - Meditação - Coach</strong></p>
      <p>Endereço: R. Marechal Deodoro, 533 - Sala 10 - Centro, Juiz de Fora - MG, 36010-002</p>
      <p>Telefone: (32) 98507-5430</p><br />

      <p><strong>Centro Atmashakti</strong></p>
      <p>Endereço: R. Carlota Malta, 89 - Centro, Juiz de Fora - MG, 36026-240</p>
      <p>Telefone: (32) 98879-7557</p><br />

      <p><strong>Movimento Zen</strong></p>
      <p>Endereço: R. Chanceler Oswaldo Aranha, 163 - São Mateus, Juiz de Fora - MG, 36025-007</p>
      <p>Telefone: (32) 99953-5007</p><br />

      <p><strong>Moksha Yoga e Meditação</strong></p>
      <p>Endereço: R. Honório Antônio da Silva, 37 - São Pedro, Juiz de Fora - MG, 36037-310</p>
      <p>Telefone: (32) 98872-2793</p><br />

      <p><strong>Yogabodha - Studio de Yoga e Meditação</strong></p>
      <p>Endereço: R. Dr. Antônio Carlos, 266 - Granbery, Juiz de Fora - MG, 36010-560</p>
      <p>Telefone: (32) 99137-0689</p><br />

      <p><strong>JF Medita</strong></p>
      <p>Endereço: R. Osvaldo Cruz, 68 - Centro, Juiz de Fora - MG, 36015-430</p>
      <p>Telefone: (32) 99100-1012</p><br />

      <p><strong>Espaço Calmamente</strong></p>
      <p>Endereço: R. Delfim Moreira, 161 - Centro, Juiz de Fora - MG, 36010-570</p>
      <p>Telefone: (32) 98443-9998</p><br />


      <h1>Artes Maciais</h1>
      <img 
        src={maciaisImg} 
        alt="Artes Maciais" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Team Ribeiro – Centro</strong></p>
      <p>Endereço: R. Batista de Oliveira, 434 - Centro, Juiz de Fora - MG, 36010-532</p>
      <p>Telefone: (32) 98477-8319</p><br />

      <p><strong>Team Will - Performance & Fight</strong></p>
      <p>Endereço: R. Padre Café, 855 - São Mateus, Juiz de Fora - MG, 36016-450</p>
      <p>Telefone: (32) 99931-8830</p><br />

      <p><strong>TAO - Centro de Cultura Oriental (Kung Fu e Tai Chi Chuan)</strong></p>
      <p>Endereço: Av. dos Andradas, 27 - Centro, Juiz de Fora - MG, 36036-000</p>
      <p>Telefone: (32) 99802-2346</p><br />

      <p><strong>Império Gym Dinis</strong></p>
      <p>Endereço: Av. Getúlio Vargas, 828 - Centro, Juiz de Fora - MG, 36013-010</p>
      <p>Telefone: (32) 3216-3228</p><br />

      <p><strong>C.E.K.S</strong></p>
      <p>Endereço: R. Morais e Castro, 381 - Passos, Juiz de Fora - MG, 36025-160</p>
      <p>Telefone: (32) 3217-6300</p><br />

      <p><strong>SUPERKICKMG</strong></p>
      <p>Endereço: R. Francisco Maia, n° 108 - Centro, Juiz de Fora - MG, 36013-110</p>
      <p>Telefone: (32) 99139-0411</p><br />

      <p><strong>Ogros Fight Muay Thai</strong></p>
      <p>Endereço: R. Bernardo Mascarenhas, 95 - Fábrica, Juiz de Fora - MG, 36080-001</p>
      <p>Telefone: (32) 98844-7358</p><br />


      <h1>Danças</h1>
      <img 
        src={dancaImg} 
        alt="Dança" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Advance Centro Integrado de Dança</strong></p>
      <p>Endereço: R. Santo Antônio, 1230 - Centro, Juiz de Fora - MG, 36016-210</p>
      <p>Telefone: (32) 3217-7535</p><br />

      <p><strong>Centro de Dança Baila Comigo</strong></p>
      <p>Endereço: R. Bernardo Mascarenhas, 37 - Mariano Procópio, Juiz de Fora - MG, 36035-212</p>
      <p>Telefone: (32) 98803-9851</p><br />

      <p><strong>Moovn Academia de Dança</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 1993 - sala 402 - São Mateus, Juiz de Fora - MG, 36016-321</p>
      <p>Telefone: (32) 98814-1779</p><br />

      <p><strong>Estação Cultural</strong></p>
      <p>Endereço: R. Halfeld, 235 - Centro, Juiz de Fora - MG, 36010-000</p>
      <p>Telefone: (32) 98810-7677</p><br />

      <p><strong>Corpus Núcleo de Dança</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 4491 - Cidade Jardim, Juiz de Fora - MG, 36026-500</p>
      <p>Telefone: (32) 3234-8172</p><br />


    </div>
  );
};

export default Saude;
