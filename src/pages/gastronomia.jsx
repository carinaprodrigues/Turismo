import React from 'react';
import './pages.css';
import restauranteImg from './img/Restaurante.jpg';
import baresImg from './img/Bar.jpg';
import lanchoneteImg from './img/Lanchonete.jpg';
import doceriaImg from './img/Doceria.jpg';
import sorveteriaImg from './img/Sorveteria.jpg';

const Gastronomia = () => {
  return (
    <div className="page-container">
      <h1>Restaurantes e Churrascarias</h1>
      <img 
        src={restauranteImg} 
        alt="Restaurante e Churrascaria" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Restaurante Mamma Roma</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 4998 - Santa Luzia, Juiz de Fora - MG, 36026-500</p>
      <p>Telefone: (32) 3215-0990</p><br />

      <p><strong>Milos Restaurante</strong></p>
      <p>Endereço: R. Dom Viçoso, 177 - Passos, Juiz de Fora - MG, 36026-390</p>
      <p>Telefone: (32) 99951-9358</p><br />

      <p><strong>Assunta</strong></p>
      <p>Endereço: Ladeira Alexandre Leonel, 221 - 301 - São Mateus, Juiz de Fora - MG, 36033-240</p>
      <p>Telefone: (32) 3236-5471</p><br />

      <p><strong>Lourdes Square Gastronomia</strong></p>
      <p>Endereço: Ladeira Alexandre Leonel, 221 - Loja 102 - São Mateus, Juiz de Fora - MG, 36033-240</p>
      <p>Telefone: (32) 99935-8426</p><br />

      <p><strong>Restaurante Outback Steakhouse</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 3600 Luc SIS00162/3/4, Piso L1 - São Mateus, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 3015-9791</p><br />

      <p><strong>Parrilla Bela Vista City</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 11 - Santa Terezinha, Juiz de Fora - MG, 36045-120</p>
      <p>Telefone: (32) 3031-6295</p><br />

      <p><strong>Barbante</strong></p>
      <p>Endereço: Av. Sr. dos Passos, 1585 - São Pedro, Juiz de Fora - MG, 36037-490</p>
      <p>Telefone: (32) 99957-0960</p><br />

      <p><strong>Japatê Spazio</strong></p>
      <p>Endereço: Ladeira Alexandre Leonel, 221/302 - São Mateus, Juiz de Fora - MG, 36033-240</p>
      <p>Telefone: (32) 3512-6876</p><br />

      <p><strong>Restaurante Soberano</strong></p>
      <p>Endereço: R. Santa Rita - Centro, Juiz de Fora - MG, 36010-070</p>
      <p>Telefone: (32) 3218-8110</p><br />

      <p><strong>Restaurante Fogão de Minas</strong></p>
      <p>Endereço: R. Santa Rita, 544 - Centro, Juiz de Fora - MG, 36010-071</p>
      <p>Telefone: (32) 3213-0893</p><br />

      <p><strong>Natália Gastronomia</strong></p>
      <p>Endereço: R. Santa Rita, 401 - Centro, Juiz de Fora - MG, 36010-071</p>
      <p>Telefone: (32) 99961-1886</p><br />

      <p><strong>Restaurante Alecrim</strong></p>
      <p>Endereço: R. Santa Rita, 538 - Centro, Juiz de Fora - MG, 36010-071</p>
      <p>Telefone: (32) 3217-8086</p><br />

      <p><strong>Kidelícia</strong></p>
      <p>Endereço: R. Santa Rita, 361 - Centro, Juiz de Fora - MG, 36010-071</p>
      <p>Telefone: (32) 3211-6655</p><br />

      <p><strong>Salsa Parrilla</strong></p>
      <p>Endereço: R. Braz Bernardino, 171 - Centro, Juiz de Fora - MG, 36010-320</p>
      <p>Telefone: (32) 3215-7501</p><br />
      <p>Endereço: R. Morais e Castro, 300 - Passos, Juiz de Fora - MG, 36025-160</p>
      <p>Telefone: (32) 3313-8218</p><br />
      <p>Endereço: Av. Presidente Itamar Franco, 3600 - Cascatinha, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 3313-8218</p><br />

      <p><strong>Churrasqueira São Mateus</strong></p>
      <p>Endereço: R. Padre Café, 73 - São Mateus, Juiz de Fora - MG, 36016-450</p>
      <p>Telefone: (32) 3232-2113</p><br />

      <p><strong>Churrasqueira BBQ</strong></p>
      <p>Endereço: R. Dom Viçoso, 111 - Passos, Juiz de Fora - MG, 36026-390</p>
      <p>Telefone: (32) 3218-0707</p><br />

      <p><strong>Chimarron Churrascaria</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 700 - Manoel Honório, Juiz de Fora - MG, 36045-000</p>
      <p>Telefone: (32) 3211-0368</p><br />

      <p><strong>Churrascaria Potência do Sul</strong></p>
      <p>Endereço: Av. Deusdedith Salgado, 4060 - Teixeiras, Juiz de Fora - MG, 36033-000</p>
      <p>Telefone: (32) 3241-4800</p><br />

      <p><strong>Sartoni</strong></p>
      <p>Endereço: R. Morais e Castro, 300 - loja 101 - Passos, Juiz de Fora - MG, 36016-460</p>
      <p>Telefone: (32) 3321-1180</p><br />
      <p>Endereço: Av. Brasil, 6345 - Setor A loja 1001 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: (32) 3321-8131</p><br />
      <p>Endereço: Av. Brasil, 6345 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: (31) 99588-3495</p><br />   


      <h1>Bares e Pizzarias</h1> 
      <img 
        src={baresImg} 
        alt="Bares e Pizzarias" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Bar do Bigode e Xororó</strong></p>
      <p>Endereço: R. Chanceler Oswaldo Aranha, 54 - São Mateus, Juiz de Fora - MG, 36016-340</p>
      <p>Telefone: (32) 3218-7097</p><br />

      <p><strong>Gema Bar</strong></p>
      <p>Endereço: R. Barão de São João Nepomuceno, 123 - Centro, Juiz de Fora - MG, 36010-080</p>
      <p>Telefone: -</p><br />

      <p><strong>St. Jame's</strong></p>
      <p>Endereço: R. Morais e Castro, 729 - Passos, Juiz de Fora - MG, 36025-160</p>
      <p>Telefone: (32) 98874-4179</p><br />

      <p><strong>Experimental Container Bar</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3162 - Passos, Juiz de Fora - MG, 36016-311</p>
      <p>Telefone: (32) 3031-6657</p><br />

      <p><strong>Bar da Árvore</strong></p>
      <p>Endereço: R. Oscavo Gonzaga Prata, 115 - Teixeiras, Juiz de Fora - MG, 36033-220</p>
      <p>Telefone: (32) 3025-3860</p><br />

      <p><strong>Lalalá Mini Bar</strong></p>
      <p>Endereço: R. Morais e Castro, 315 - Passos, Juiz de Fora - MG, 36025-185</p>
      <p>Telefone: (32) 99811-4131</p><br />

      <p><strong>Anão Gigante</strong></p>
      <p>Endereço: R. São Mateus, 1047 - São Mateus, Juiz de Fora - MG, 36025-001</p>
      <p>Telefone: (32) 3321-2987</p><br />

      <p><strong>Lapa Beer</strong></p>
      <p>Endereço: Av. Brasil, 5300 - Mariano Procópio, Juiz de Fora - MG, 36045-475</p>
      <p>Telefone: (32) 3321-4224</p><br />

      <p><strong>Alquimia Geek Bar</strong></p>
      <p>Endereço: R. Belmiro Braga, 278 - Passos, Juiz de Fora - MG, 36026-490</p>
      <p>Telefone: -</p><br />

      <p><strong>Barril</strong></p>
      <p>Endereço: Av. Pedro Henrique Krambeck - São Pedro, Juiz de Fora - MG, 36026-380</p>
      <p>Telefone: -</p><br />

      <p><strong>São Bartolomeu</strong></p>
      <p>Endereço: R. São Mateus, 41 - loja 4 - São Mateus, Juiz de Fora - MG, 36025-010</p>
      <p>Telefone: (32) 3025-5867</p><br />

      <p><strong>Vizú</strong></p>
      <p>Endereço: R. Morais e Castro, 835 - Passos, Juiz de Fora - MG, 36025-160</p>
      <p>Telefone: (32) 3025-5529</p><br />

      <p><strong>Mr. Tugas</strong></p>
      <p>Endereço: R. Otília de Souza Leal, 310 - Nova Califórnia, Juiz de Fora - MG, 36039-000</p>
      <p>Telefone: (32) 3233-0036</p><br />

      <p><strong>Pizzaria Itália</strong></p>
      <p>Endereço: R. Silva Jardim, 306 - Centro, Juiz de Fora - MG, 36015-390</p>
      <p>Telefone: (32) 3211-0479</p><br />

      <p><strong>Cap Jack Pizzeria</strong></p>
      <p>Endereço: R. Padre João Emílio, 160 - Passos, Juiz de Fora - MG, 36026-440</p>
      <p>Telefone: (32) 3015-6789</p><br />

      <p><strong>Vaporetto</strong></p>
      <p>Endereço: R. Benjamin Constant, 1039 - Santa Helena, Juiz de Fora - MG, 36015-400</p>
      <p>Telefone: (32) 3215-9650</p><br />

      <p><strong>Sapore</strong></p>
      <p>Endereço: R. São Mateus, 930 - São Mateus, Juiz de Fora - MG, 36025-001</p>
      <p>Telefone: (32) 3232-6006</p><br />

      <p><strong>Santa Maria Forneria</strong></p>
      <p>Endereço: R. Dr. João Pinheiro, 511 - 98871-9180 - Jardim Glória, Juiz de Fora - MG, 36015-040</p>
      <p>Telefone: (32) 3082-3001</p><br />

      <p><strong>Domino's Pizza</strong></p>
      <p>Endereço: R. Chanceler Oswaldo Aranha, 255 - São Mateus, Juiz de Fora - MG, 36025-007</p>
      <p>Telefone: (32) 3026-1600</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 817 - Centro, Juiz de Fora - MG, 36045-475</p>
      <p>Telefone: (32) 3031-1261</p><br />


      <h1>Lanchonetes e Padarias</h1>
      <img 
        src={lanchoneteImg} 
        alt="Lanchonetes e Padarias" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Ki Bocão Burguer</strong></p>
      <p>Endereço: Av. Pres. Costa e Silva, 1654 - São Pedro, Juiz de Fora - MG, 36037-000</p>
      <p>Telefone: (32) 3231-1651</p><br />

      <p><strong>King's Lanches</strong></p>
      <p>Endereço: Av. Getúlio Vargas, 165 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (32) 3083-8836</p><br />

      <p><strong>Lanchonete Pingo no i</strong></p>
      <p>Endereço: Av. Pres. Costa e Silva, 1715 - São Pedro, Juiz de Fora - MG, 36037-130</p>
      <p>Telefone: (32) 3231-4861</p><br />

      <p><strong>Filhos da Fruta</strong></p>
      <p>Endereço: R. Marechal Deodoro, 126 - Centro, Juiz de Fora - MG, 36013-000</p>
      <p>Telefone: (32) 3212-6078</p><br />

      <p><strong>Tutti Gourmet Lanchonete</strong></p>
      <p>Endereço: Galeria Belfort Arantes, Centro - Centro, Juiz de Fora - MG, 36010-300</p>
      <p>Telefone: (32) 3217-5827</p><br />

      <p><strong>Pastelaria Mexicana</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 1005 - Centro, Juiz de Fora - MG</p>
      <p>Telefone: Não informado</p><br />

      <p><strong>Bemboa Pastel & Co.</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 2512 - São Mateus, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 3321-2971</p><br />

      <p><strong>Q-Pastel</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2007 - Centro, Juiz de Fora - MG, 36013-020</p>
      <p>Telefone: (32) 98873-9612</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 3750 - Centro, Juiz de Fora - MG, 36025-020</p>
      <p>Telefone: (32) 3213-8832</p><br />
      <p>Endereço: R. Barão de São João Nepomuceno, esquina com R. Batista de Oliveira - Centro, Juiz de Fora - MG, 36010-180</p>
      <p>Telefone: (32) 3211-5527</p><br />

      <p><strong>Mary Milk</strong></p>
      <p>Endereço: R. Cel. Pachêco, 124 - São Mateus, Juiz de Fora - MG, 36025-210</p>
      <p>Telefone: (32) 3232-4699</p><br />

      <p><strong>Padaria Central JF</strong></p>
      <p>Endereço: Av. Getúlio Vargas, 373 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (32) 98504-5429</p><br />

      <p><strong>Bela Padoca</strong></p>
      <p>Endereço: R. Dr. Antônio Carlos, 292 - Centro, Juiz de Fora - MG, 36010-560</p>
      <p>Telefone: (32) 3017-7961</p><br />

      <p><strong>Maxi Pão</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 1721 - São Mateus, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 3512-6766</p><br />

      <p><strong>Padaria Manchester</strong></p>
      <p>Endereço: R. Santo Antônio, 694 - Centro, Juiz de Fora - MG, 36015-000</p>
      <p>Telefone: (32) 3215-8305</p><br />

      <p><strong>Padaria Lisboa</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 1859 - Centro, Juiz de Fora - MG, 36013-020</p>
      <p>Telefone: (32) 3031-7072</p><br />
      <p>Endereço: Av. Getúlio Vargas, 813 - Centro, Juiz de Fora - MG, 36013-011</p>
      <p>Telefone: (32) 3215-9982</p><br />

      <p><strong>Padaria Modelo</strong></p>
      <p>Endereço: R. Batista de Oliveira, 622 - Centro, Juiz de Fora - MG, 36010-120</p>
      <p>Telefone: (32) 3211-8134</p><br />
      <p>Endereço: Av. Getúlio Vargas, 658 - Centro, Juiz de Fora - MG, 36013-010</p>
      <p>Telefone: (32) 3215-2116</p><br />

      <p><strong>Padaria La Bambina</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 1778 - Centro, Juiz de Fora - MG, 36015-510</p>
      <p>Telefone: (32) 3215-4782</p><br />

      <p><strong>Padaria Pan Luy</strong></p>
      <p>Endereço: Av. dos Andradas, 475 - Centro, Juiz de Fora - MG, 36036-000</p>
      <p>Telefone: (32) 3215-6598</p><br />


      <h1>Docerias e Cafeterias</h1>
      <img 
        src={doceriaImg} 
        alt="Docerias e Cafeterias" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Brigaderia Madame Gourmet</strong></p>
      <p>Endereço: R. Manoel Bernardino, 37 - São Mateus, Juiz de Fora - MG, 36016-460</p>
      <p>Telefone: (32) 98414-4614</p><br />

      <p><strong>Majestade Doces</strong></p>
      <p>Endereço: Rua Halfeld 513 Lj 13 e Halfeld 744, Lj 2 - Centro, Juiz de Fora - MG, 36016-000</p>
      <p>Telefone: (32) 3031-9616</p><br />

      <p><strong>Sodiê Doces</strong></p>
      <p>Endereço: R. Severiano Sarmento, 310 - Passos, Juiz de Fora - MG, 36026-420</p>
      <p>Telefone: (32) 3026-0893</p><br />

      <p><strong>Espaço Café Central</strong></p>
      <p>Endereço: Galeria Azarias Vilela, 36 - Centro, Juiz de Fora - MG, 36010-200</p>
      <p>Telefone: (32) 3216-8545</p><br />

      <p><strong>Rellicário Brigaderia & Café</strong></p>
      <p>Endereço: R. São Mateus, 35 - São Mateus, Juiz de Fora - MG, 36025-000</p>
      <p>Telefone: (32) 3213-5469</p><br />

      <p>Endereço: R. Morais e Castro, 300 - Passos, Juiz de Fora - MG, 36025-160</p>
      <p>Telefone: (32) 3321-3099</p><br />

      <p>Endereço: Av. Presidente Itamar Franco, 3600 - Cascatinha, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 3937-1928</p><br />

      <p><strong>Mr Pina Gourmet</strong></p>
      <p>Endereço: R. Braz Bernardino, 184 - Centro, Juiz de Fora - MG, 36010-320</p>
      <p>Telefone: (32) 99939-1486</p><br />

      <p>Endereço: Av. Presidente Itamar Franco, 3600 - l1 - Cascatinha, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 3026-5552</p><br />

      <p>Endereço: Av. Brasil, 6345 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: (32) 3321-4587</p><br />

      <p><strong>Casa das Trufas</strong></p>
      <p>Endereço: R. Mr. Moore, 167 - Centro, Juiz de Fora - MG, 36013-180</p>
      <p>Telefone: (32) 3218-6753</p><br />

      <p>Endereço: R. Braz Bernardino, 176 - Centro, Juiz de Fora - MG, 36010-320</p>
      <p>Telefone: -</p><br />

      <p>Endereço: Av. Presidente Itamar Franco, 3600 - Cascatinha, Juiz de Fora - MG, 36025-001</p>
      <p>Telefone: (32) 3236-2358</p><br />

      <p><strong>Fábrica de Doces Brasil</strong></p>
      <p>Endereço: R. Marechal Deodoro, 384 - Centro, Juiz de Fora - MG, 36013-001</p>
      <p>Telefone: (32) 3215-8943</p><br />

      <p>Endereço: R. Halfeld, 811 - Centro, Juiz de Fora - MG, 36010-003</p>
      <p>Telefone: (32) 3025-5943</p><br />

      <p>Endereço: R. Morais e Castro, 99 - Passos, Juiz de Fora - MG, 36026-500</p>
      <p>Telefone: (32) 3512-6468</p><br />

      <p>Endereço: Av. Brasil, 6345 - 1032 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: (32) 3321-6777</p><br />


      <h1>Sorveterias</h1>
      <img 
        src={sorveteriaImg} 
        alt="Sorveteria" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Bom Clima Sorvetes Artesanais</strong></p>
      <p>Endereço: R. Padre Café, 36 - São Mateus, Juiz de Fora - MG, 36016-450</p>
      <p>Telefone: (32) 3213-7762</p><br />

      <p><strong>Sublime</strong></p>
      <p>Endereço: R. São Mateus, 408 - São Mateus, Juiz de Fora - MG, 36025-000</p>
      <p>Telefone: (32) 3026-3222</p><br />

      <p><strong>Gelato Borelli</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 3600 - loja 180 - Cascatinha, Juiz de Fora - MG, 36033-318</p>
      <p>Telefone: (32) 99108-0934</p><br />

      <p><strong>Patropi Sorvetes e Açaí</strong></p>
      <p>Endereço: Av. Rui Barbosa, 673 - Santa Terezinha, Juiz de Fora - MG, 36045-410</p>
      <p>Telefone: (32) 98897-1707</p><br />

      <p><strong>Milky Moo</strong></p>
      <p>Endereço: Av. Brasil, 6345 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: -</p><br />

      <p><strong>DeliGeli</strong></p>
      <p>Endereço: Av. Gov. Valadares, 512 - Manoel Honório, Juiz de Fora - MG, 36045-000</p>
      <p>Telefone: (32) 3512-7294</p><br />

      <p>Endereço: Av. Pres. Costa e Silva, 1797 - loja 2 - São Pedro, Juiz de Fora - MG, 36037-000</p>
      <p>Telefone: (32) 98451-1216</p><br />

      <p>Endereço: R. Dr. Antônio Mourão Guimarães, 25 - Santa Cruz, Juiz de Fora - MG, 36088-280</p>
      <p>Telefone: (32) 98866-8292</p><br />

      <p><strong>Oggi Sorvetes</strong></p>
      <p>Endereço: R. Roberto de Barros, 241 - Loja anexa - Centro, Juiz de Fora - MG, 36013-210</p>
      <p>Telefone: (32) 99146-8655</p><br />

      <p>Endereço: Av. Barão do Rio Branco, 3760 - lojas 6 e 7 - Passos, Juiz de Fora - MG, 36025-020</p>
      <p>Telefone: (32) 99823-4700</p><br />

      <p>Endereço: Av. Dr. Paulo Japiassú Coelho, 125 - Cascatinha, Juiz de Fora - MG, 36033-310</p>
      <p>Telefone: (32) 98489-9312</p><br />

      <p><strong>Chiquinho Sorvetes</strong></p>
      <p>Endereço: R. Dr. Romualdo, 280 - São Mateus, Juiz de Fora - MG, 36016-380</p>
      <p>Telefone: -</p><br />

      <p>Endereço: R. Santa Rita, 455 - Centro, Juiz de Fora - MG, 36010-071</p>
      <p>Telefone: -</p><br />

      <p>Endereço: Av. Brasil, 6345 - L1 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: -</p><br />

      <p><strong>Sorveteria Sol & Neve</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 775 - Centro, Juiz de Fora - MG, 36010-021</p>
      <p>Telefone: (32) 3029-0037</p><br />

      <p>Endereço: R. Santo Antônio, 537 - Centro, Juiz de Fora - MG, 36015-000</p>
      <p>Telefone: (32) 99154-8937</p><br />

      <p>Endereço: R. Morais e Castro, 353 - Passos, Juiz de Fora - MG, 36025-160</p>
      <p>Telefone: -</p><br />

      <p>Endereço: Av. Presidente Itamar Franco, 2102 - São Mateus, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 99175-7249</p><br />


    </div>
  );
};

export default Gastronomia;
