import React from 'react';
import './pages.css';
import procopioImg from './img/procopio.jpg';
import lajinhaImg from './img/Lajinha.jpeg';
import halfeldImg from './img/Halfeld.jpeg';
import botanicoImg from './img/Botanico.jpeg';
import cristoImg from './img/Cristo.JPG';
import penidoImg from './img/Penido.jpg';
import marianoImg from './img/Mariano.jpg';
import muriloImg from './img/Murilo.JPG';
import ferroviarioImg from './img/Ferroviario.JPG';
import marmelosImg from './img/Marmelos.jpg';
import creditoImg from './img/Credito.jpg';
import republicaImg from './img/Republica.JPG';
import bernardoImg from './img/Bernardo.JPG';
import culturaImg from './img/Cultura.jpg';
import theatroImg from './img/Theatro.jpg';
import independenciaImg from './img/Independencia.jpg';
import catedralImg from './img/Catedral.jpg';
import planetarioImg from './img/Planetario.JPG';
import estadioImg from './img/Estadio.jpg';
import santaImg from './img/Santa.jpg';
import norteImg from './img/Norte.jpg';

const Atracoes = () => {
  return (
    <div className="page-container">

      <h1>Parques e Áreas Naturais</h1>
      <p><strong>Parque Mariano Procópio</strong></p>
      <img 
        src={procopioImg} 
        alt="Parque Mariano Procópio" 
        style={{ width: '500px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }} >Imagem: Acervo pessoal </p>
      <p>Endereço: R. Mariano Procópio, 1100 - Mariano Procópio, Juiz de Fora - MG, 36035-780</p>
      <p>Telefone: (32) 3690-2200</p><br />

      <p><strong>Parque da Lajinha</strong></p>
      <img 
        src={lajinhaImg} 
        alt="Parque da Lajinha" 
        style={{ width: '400px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }} >Imagem: Acervo pessoal </p>
      <p>Endereço: Av. Deusdedith Salgado - Teixeiras, Juiz de Fora - MG, 36033-590</p>
      <p>Telefone: (32) 3690-8577</p><br />

      <p><strong>Parque Halfeld</strong></p>
      <img 
        src={halfeldImg} 
        alt="Parque Halfeld" 
        style={{ width: '450px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }} >Imagem: Acervo pessoal </p>
      <p>Endereço: R. Halfeld, 882-960 - Centro, Juiz de Fora - MG, 36015-510</p>
      <p>Telefone: (32) 3690-7201</p><br />

      <p><strong>Praça Dr. João Penido</strong></p>
      <img 
        src={penidoImg} 
        alt="Praça Dr. João Penido" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}> Imagem: <a href="https://commons.wikimedia.org/wiki/File:Esta%C3%A7%C3%A3o_ferrovi%C3%A1ria_da_Pra%C3%A7a_Doutor_Jo%C3%A3o_Penido.jpg" target="_blank" rel="noopener noreferrer">
      Estação ferroviária da Praça Doutor João Penido
      </a> por <a href="https://commons.wikimedia.org/wiki/User:MisterSanderson" target="_blank" rel="noopener noreferrer">
      MisterSanderson
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
      </a>.
      </p>
      <p>Endereço: Av. Francisco Bernardino, 5 - Centro, Juiz de Fora - MG, 36010-010</p><br />
      <p>Telefone: -</p><br />

      <p><strong>Jardim Botânico da UFJF</strong></p>
      <img 
        src={botanicoImg} 
        alt="Jardim Botânico" 
        style={{ width: '450px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }} >Imagem: Acervo pessoal </p>
      <p>Endereço: R. Cel. Almeida Novais, 246 - Santa Terezinha, Juiz de Fora - MG, 36045-500</p>
      <p>Telefone: (32) 2102-6336</p><br />

      <p><strong>Mirante do Morro do Cristo</strong></p>
      <img 
        src={cristoImg} 
        alt="Mirante Morro do Cristo" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>Imagem: <a href="https://commons.wikimedia.org/wiki/File:Alto_do_Morro_do_Imperador,_Juiz_de_Fora_MG.JPG" target="_blank" rel="noopener noreferrer">
      Alto do Morro do Imperador, Juiz de Fora MG
      </a> por <a href="https://commons.wikimedia.org/wiki/User:PauloVetor" target="_blank" rel="noopener noreferrer">PauloVetor
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
      </a>.
      </p>
      <p>Endereço: Estr. Eng. Gentil Forn - São Pedro, Juiz de Fora - MG, 36036-430</p>
      <p>Telefone: (32) 3321-7185</p><br />

      <p><strong>Pico Cabeça de Formiga-Serra da Saudade</strong></p>
      <p>Endereço: Valadares, Juiz de Fora - MG, 36101-000</p>
      <p>Telefone: (32) 99935-6022</p><br />



      <h1>Museus e Centros Culturais</h1>
      <p><strong>Museu Mariano Procópio</strong></p>
      <img 
        src={marianoImg} 
        alt="Museu Mariano Procópio" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Museu_Mariano_Proc%C3%B3pio_por_Rodrigo_Tetsuo_Argenton_(09).jpg" target="_blank" rel="noopener noreferrer">
      Museu Mariano Procópio
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Rodrigo.Argenton" target="_blank" rel="noopener noreferrer">
      Rodrigo Tetsuo Argenton
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 3.0
      </a>.
      </p>
      <p>Endereço: R. Dom Pedro II, 350 - Mariano Procópio, Juiz de Fora - MG, 36035-090</p>
      <p>Telefone: (32) 98854-2158</p><br />

      <p><strong>Museu de Arte Murilo Mendes</strong></p>
      <img 
        src={muriloImg} 
        alt="Museu de Arte Murilo Mendes" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Fachada_do_Museu_de_Arte_Murilo_Mendes,_Juiz_de_Fora_MG.JPG" target="_blank" rel="noopener noreferrer">
      Fachada do Museu de Arte Murilo Mendes, Juiz de Fora MG
      </a> por <a href="https://commons.wikimedia.org/wiki/User:PauloVetor" target="_blank" rel="noopener noreferrer">
      HVL
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
      </a>.
      </p>
      <p>Endereço: R. Benjamin Constant, 790 - Santa Helena, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: (32) 2102-3582</p><br />

      <p><strong>Museu Ferroviário de Juiz de Fora</strong></p>
      <img 
        src={ferroviarioImg} 
        alt="Museu Ferroviário de Juiz de Fora" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Vista_da_Esta%C3%A7%C3%A3o_de_Juiz_de_Fora_MG.JPG" target="_blank" rel="noopener noreferrer">
      Vista da Estação de Juiz de Fora MG
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Rodrigo_Tetsuo_Argenton" target="_blank" rel="noopener noreferrer">
      HVL
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
      </a>.
      </p>
      <p>Endereço: Av. Brasil, 2001 - Centro, Juiz de Fora - MG, 36060-010</p>
      <p>Telefone: (32) 3212-5781</p><br />

      <p><strong>Museu Usina de Marmelos Zero</strong></p>
      <img 
        src={marmelosImg} 
        alt="Museu Usina de Marmelos Zero" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Usina_de_Marmelos_2007_(b).jpg" target="_blank" rel="noopener noreferrer">
      Usina de Marmelos, Juiz de Fora, MG
      </a> por <a href="https://commons.wikimedia.org/wiki/User:bolapiercing" target="_blank" rel="noopener noreferrer">
      bolapiercing
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noopener noreferrer">
      CC BY 2.0
      </a>.
      </p>
      <p>Endereço: Estrada União e Indústria - Granjas Santo Antonio, Juiz de Fora - MG, 36073-185</p>
      <p>Telefone: -</p><br />

      <p><strong>Museu do Crédito Real</strong></p>
      <img 
        src={creditoImg} 
        alt="Museu Usina de Marmelos Zero" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Museu_do_Credito_Real.jpg" target="_blank" rel="noopener noreferrer">
      Museu do Crédito Real
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Leandro_Ciuffo" target="_blank" rel="noopener noreferrer">
      Leandro Ciuffo
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 2.0
      </a>.
      </p>
      <p>Endereço: Av. Getúlio Vargas, 455 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (31) 98407-9444</p><br />

      <p><strong>Memorial da República Presidente Itamar Franco</strong></p>
      <img 
        src={republicaImg} 
        alt="Memorial da República Presidente Itamar Franco" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Fachada_do_Museu_da_Rep%C3%BAblica_Presidente_Itamar_Franco,_Juiz_de_Fora_MG.JPG" target="_blank" rel="noopener noreferrer">
      Fachada do Museu da República Presidente Itamar Franco, Juiz de Fora MG
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Rodrigo_Tetsuo_Argenton" target="_blank" rel="noopener noreferrer">
      HVL
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC-BY-4.0
      </a>.
      </p>
      <p>Endereço: R. Benjamin Constant, 760 - Centro, Juiz de Fora - MG, 36015-400</p>
      <p>Telefone: (32) 2102-3594</p><br />

      <p><strong>Centro Cultural Bernardo Mascarenhas</strong></p>
      <img 
        src={bernardoImg} 
        alt="Centro Cultural Bernardo Mascarenhas" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Fachada_da_Companhia_T%C3%AAxtil_Bernardo_Mascarenhas,_Juiz_de_Fora_MG.JPG" target="_blank" rel="noopener noreferrer">
      Fachada da Companhia Têxtil Bernardo Mascarenhas, Juiz de Fora MG
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Rodrigo_Tetsuo_Argenton" target="_blank" rel="noopener noreferrer">
      HVL
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC-BY-4.0
      </a>.
      </p>

      <p>Endereço: Av. Getúlio Vargas, 200 - Centro, Juiz de Fora - MG, 36010-000</p>
      <p>Telefone: (32) 3239-5524</p><br />

      <p><strong>Forum da Cultura - UFJF</strong></p>
      <img 
        src={culturaImg} 
        alt="Forum da Cultura - UFJF" 
        style={{ width: '550px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Forum_da_Cultura_por_Rodrigo_Tetsuo_Argenton_(02).jpg" target="_blank" rel="noopener noreferrer">
      Fórum da Cultura, Juiz de Fora MG
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Rodrigo_Tetsuo_Argenton" target="_blank" rel="noopener noreferrer">
      Rodrigo Tetsuo Argenton
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
      </a>.
      </p>
      <p>Endereço: R. Santo Antônio, 1112 - Centro, Juiz de Fora - MG, 36016-210</p>
      <p>Telefone: (32) 2102-6306</p><br />

      <p><strong>Cine-Theatro Central</strong></p>
      <img 
        src={theatroImg} 
        alt="Cine-Theatro Central" 
        style={{ width: '600px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Cine-Theatro_Central_por_Rodrigo_Tetsuo_Argenton_(03).jpg" target="_blank" rel="noopener noreferrer">
      Cine-Theatro Central, Juiz de Fora MG
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Rodrigo_Tetsuo_Argenton" target="_blank" rel="noopener noreferrer">
      Rodrigo Tetsuo Argenton
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
      </a>.
      </p>
      <p>Endereço: Praça João Pessoa, S/N - Centro, Juiz de Fora - MG, 36010-150</p>
      <p>Bilheteria: Vendas e informações: (32) 2102-6329</p>
      <p>Administração: (32) 2102-6330 (fixo e whatsapp)</p><br />



      <h1>Shoppings e Centros Comerciais</h1>
      <p><strong>Independência Shopping</strong></p>
      <img 
        src={independenciaImg} 
        alt="Independência Shopping" 
        style={{ width: '600px', height: '500px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Shopping_Independ%C3%AAncia_(2836384303)_(2).jpg" target="_blank" rel="noopener noreferrer">
      Shopping Independência
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Andresolu%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
      Leandro Ciuffo
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 2.0
      </a>.
      </p>
      <p>Endereço: Av. Presidente Itamar Franco, 3600 - Cascatinha, Juiz de Fora - MG, 36025-290</p>
      <p>Espaço Cliente: Telefone: (32) 3086-9211</p>
      <p>WhatsApp: (32) 3142-1995</p>
      <p>Comercialização de lojas, quiosques e eventos: (32) 99989-9921</p><br />

      <p><strong>Shopping Jardim Norte</strong></p>
      <img 
        src={norteImg} 
        alt="Shopping Jardim Norte" 
        style={{ width: '500px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }} >Imagem: Acervo pessoal </p>
      <p>Endereço: Av. Brasil, 6345 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: (32) 3512-2000</p><br />

      <p><strong>Santa Cruz Shopping</strong></p>
      <img 
        src={santaImg} 
        alt="Santa Cruz Shopping" 
        style={{ width: '500px', height: '550px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }} >Imagem: Acervo pessoal </p>
      <p>Endereço: R. Jarbas de Lery Santos, 1655 - Centro, Juiz de Fora - MG, 36013-150</p>
      <p>Telefone: (32) 3026-9999</p><br />



      <h1>Igrejas e Monumentos Religiosos</h1>
      <p><strong>Catedral Metropolitana de Santo Antônio de Juiz de Fora</strong></p>
      <img 
        src={catedralImg} 
        alt="Catedral Metropolitana de Santo Antônio" 
        style={{ width: '600px', height: '500px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Catedral_de_Ju%C3%ADz_de_Fora.jpg" target="_blank" rel="noopener noreferrer">
      Catedral de Juíz de Fora
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Rodrigo_Tetsuo_Argenton" target="_blank" rel="noopener noreferrer">
      Arquidiocese de Juíz de Fora
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener noreferrer">
      CC-BY-SA 3.0, 2.5, 2.0, 1.0
      </a>.
      </p>
      <p>Endereço: R. Santo Antônio, 1201 - Centro, Juiz de Fora - MG, 36016-210</p>
      <p>Telefone: (32) 3250-0700</p><br />



      <h1>Entretenimento</h1>
      <p><strong>Planetário Do campus Universitário Da Universidade Federal De Juiz De Fora</strong></p>
      <img 
        src={planetarioImg} 
        alt="Planetário Do campus Universitário" 
        style={{ width: '600px', height: '500px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Universidade_Federal_Juiz_de_Fora_11.JPG" target="_blank" rel="noopener noreferrer">
      Universidade Federal de Juiz de Fora 11
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Wilfredor" target="_blank" rel="noopener noreferrer">
      Dedalos19
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
      </a>.
      </p>
      <p>Endereço: Rua José Lourenço Kelmer, s/n - São Pedro, Juiz de Fora - MG, 36036-900. Centro de Ciências da UFJF.</p>
      <p>Telefone: (32) 2102-6913 / (32) 2102-6914</p><br />

      <p><strong>Estádio Municipal Radialista Mário Helênio</strong></p>
      <img 
        src={estadioImg} 
        alt="Estádio Municipal Radialista Mário Helênio" 
        style={{ width: '600px', height: '500px', borderRadius: '10px',  margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>
      Imagem: <a href="https://commons.wikimedia.org/wiki/File:Est%C3%A1dio_Mario_Hel%C3%AAnio.jpg" target="_blank" rel="noopener noreferrer">
      Estádio Mário Helênio
      </a> por <a href="https://commons.wikimedia.org/wiki/User:GSantos_07" target="_blank" rel="noopener noreferrer">
      GSantos 07
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 4.0
      </a>.
      </p>
      <p>Endereço: Av. Eugênio do Nascimento, 3837 - Aeroporto, Juiz de Fora - MG, 36038-330</p>
      <p>Telefone: (32) 3690-7382</p><br />
     
    </div>
  );
};

export default Atracoes;
