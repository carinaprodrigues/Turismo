import React from 'react';
import './pages.css';
import prefeituraImg from './img/Prefeitura.jpg';
import mercadoImg from './img/Mercado.jpg';
import farmaciaImg from './img/Farmacia.jpg';
import cartorioImg from './img/Cartorio.jpg';
import bancoImg from './img/Banco.jpg';
import postoImg from './img/Posto.jpg';

const Servicos = () => {
  return (
    <div className="page-container">
      <h1>Serviços Fundamentais para a Comunidade</h1>
      <img 
        src={prefeituraImg} 
        alt="Prefeitura de Juiz de Fora" 
        style={{width: '950px', height: '550px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '20px' }}>Imagem: <a href="https://commons.wikimedia.org/wiki/File:Sede_da_prefeitura_de_Juiz_de_Fora_%28de_perto%29.jpg" target="_blank" rel="noopener noreferrer">
      Sede da prefeitura de Juiz de Fora
      </a> por <a href="https://commons.wikimedia.org/wiki/User:Joalpe" target="_blank" rel="noopener noreferrer">MisterSanderson
      </a>, licenciada sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
      CC BY-SA 3.0
      </a>.
      </p>
      <p><strong>Prefeitura Municipal de Juiz de Fora</strong></p>
      <p>Endereço: Av. Brasil, 2001 - Centro, Juiz de Fora - MG, 36060-010</p>
      <p>Telefone: (32) 3690-8158</p><br />

      <p><strong>Câmara Municipal de Juiz de Fora</strong></p>
      <p>Endereço: R. Halfeld, 955 - Centro, Juiz de Fora - MG, 36016-000</p>
      <p>Telefone: (32) 3313-4700</p><br />

      <p><strong>CRAS Centro</strong></p>
      <p>Endereço: R. Halfeld, 450 - Centro, Juiz de Fora - MG, 36010-000</p>
      <p>Telefone: (32) 3690-7071</p><br />

      <p><strong>Secretaria Municipal de Saúde de Juiz de Fora</strong></p>
      <p>Endereço: Av. Brasil, 2001 - Centro, Juiz de Fora - MG, 36060-010</p>
      <p>Telefone: (32) 3690-7474</p><br />

      <p><strong>Companhia de Saneamento Municipal - CESAMA</strong></p>
      <p>Endereço: Av. Getúlio Vargas, 1001 - Centro, Juiz de Fora - MG, 36070-000</p>
      <p>Telefone: (32) 3692-9500</p><br />

      <p><strong>Companhia elétrica Cemig - Agência Castelinho</strong></p>
      <p>Endereço: R. Espírito Santo, 467 - Centro, Juiz de Fora - MG, 36010-041</p>
      <p>Telefone: 0800 72 1116</p><br />

      <p><strong>Agência de Proteção e Defesa do Consumidor - PROCON</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 992 - Centro, Juiz de Fora - MG, 36010-021</p>
      <p>Telefone: (32) 3690-7610</p><br />

      <p><strong>Fórum Benjamin Colucci – TJMG</strong></p>
      <p>Endereço: R. Marechal Deodoro, 662 - Centro, Juiz de Fora - MG, 36015-460</p>
      <p>Telefone: (32) 3257-5800</p><br />

      <p><strong>Juizado Especial de Juiz de Fora</strong></p>
      <p>Endereço: Av. Brasil, 1000 - Costa Carvalho, Juiz de Fora - MG, 36070-060</p>
      <p>Telefone: (32) 3691-9870</p><br />

      <p><strong>Justiça do Trabalho</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 1880 - Centro, Juiz de Fora - MG, 36015-510</p>
      <p>Telefone: (32) 3229-5311</p><br />

      <p><strong>Ordem dos Advogados do Brasil em Minas Gerais - Juiz de Fora</strong></p>
      <p>Endereço: Av. dos Andradas, 696 - Morro da Glória, Juiz de Fora - MG, 36036-000</p>
      <p>Telefone: (32) 3690-5900</p><br />

      <p><strong>Defensoria Pública da União</strong></p>
      <p>Endereço: Edifício Plaza Antônio Rua Santo Antônio, 630 - 401, 501 e 601 - Centro, Juiz de Fora - MG, 36015-001</p>
      <p>Telefone: (32) 2102-8500</p><br />

      <p><strong>Defensoria Pública do Estado de Minas Gerais</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2281 - 10° andar - Centro, Juiz de Fora - MG, 36045-050</p>
      <p>Telefone: (32) 3217-0443</p><br />


      <h1>Supermercados</h1>
      <img 
        src={mercadoImg} 
        alt="Supermercado" 
        style={{width: '950px', height: '550px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Bahamas</strong></p>
      <p>Endereço: R. Mal. Floriano Peixoto, 270 - Centro, Juiz de Fora - MG, 36013-080</p>
      <p>Telefone: (32) 2104-9475</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 3760 - Centro, Juiz de Fora - MG, 36025-020</p>
      <p>Telefone: (32) 3249-9453</p><br />
      <p>Endereço: Av. Presidente Itamar Franco, 2115 - São Mateus, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 3249-9499</p><br />

      <p><strong>Empório Bahamas Rio Branco</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2872 - Centro, Juiz de Fora - MG, 36025-020</p>
      <p>Telefone: (32) 3249-9487</p><br />

      <p><strong>Bretas Supermercado</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 1973 - Centro, Juiz de Fora - MG, 36013-020</p>
      <p>Telefone: (32) 3312-8206</p><br />
      <p>Endereço: R. Marechal Deodoro, 214 - Centro, Juiz de Fora - MG, 36013-000</p>
      <p>Telefone: (32) 3312-8208</p><br />
      <p>Endereço: Ladeira Alexandre Leonel, 200 - Cascatinha, Juiz de Fora - MG, 36033-240</p>
      <p>Telefone: (32) 3312-8213</p><br />

      <p><strong>Hiper Bretas</strong></p>
      <p>Endereço: R. Roberto de Barros, 241 - Centro, Juiz de Fora - MG, 36013-210</p><br />

      <p><strong>Bretas Atacarejo - Santa Terezinha</strong></p>
      <p>Telefone: (32) 3312-8205</p><br />

      <p><strong>Carrefour Hipermercado</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 5001 - Graminha, Juiz de Fora - MG, 36026-900</p>
      <p>Telefone: (11) 3004-2222</p><br />

      <p><strong>Assaí Atacadista Juiz de Fora</strong></p>
      <p>Endereço: Av. Brasil, 601 - Santa Teresa, Juiz de Fora - MG, 36020-170</p>
      <p>Telefone: 0800 773 2322</p><br />

      <p><strong>Supermercado Pais e Filhos</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2805 - Centro, Juiz de Fora - MG, 36010-012</p>
      <p>Telefone: (32) 9 9925-5613</p><br />
      <p>Endereço: Av. Olegário Maciel, 2205 - São Mateus, Juiz de Fora - MG, 36016-011</p>
      <p>Telefone: (32) 9 9925-5613</p><br />
      <p>Endereço: Av. Presidente Juscelino Kubitschek, 5571 - Nova Era, Juiz de Fora - MG, 36087-000</p>
      <p>Telefone: (32) 3937-3928</p><br />

      <p><strong>Supermercados BH</strong></p>
      <p>Endereço: Av. Brasil, 6.345 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: (32) 3211-2061</p><br />
      <p>Endereço: Av. Deusdedith Salgado, 4088 - Teixeiras, Juiz de Fora – MG</p>
      <p>Telefone: (32) 3237-1919</p><br />


      <h1>Farmácias</h1>
      <img 
        src={farmaciaImg} 
        alt="Farmácia" 
        style={{width: '950px', height: '550px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Drogaria Souza</strong></p>
      <p>Endereço: R. Halfeld, 751 - Centro, Juiz de Fora - MG, 36010-003</p>
      <p>Telefone: (32) 3228-8750</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 2281 - Loja 101 - Centro, Juiz de Fora - MG, 36015-510</p>
      <p>Telefone: (32) 3228-8750</p><br />
      <p>Endereço: R. Batista de Oliveira, 509 - Centro, Juiz de Fora - MG, 36013-300</p>
      <p>Telefone: (32) 3228-8750</p><br />

      <p><strong>Farmácia Pague Menos</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3016 - Centro, Juiz de Fora - MG, 36016-311</p>
      <p>Telefone: 4002-8282</p><br />
      <p>Endereço: Av. Brasil, 6345 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: 4002-8282</p><br />
      <p>Endereço: R. Martins Barbosa, 251 - 253 - Benfica, Juiz de Fora - MG, 36090-300</p>
      <p>Telefone: 4002-8282</p><br />

      <p><strong>Drogarias Pacheco</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3760 - Centro, Juiz de Fora - MG, 36025-020</p>
      <p>Telefone: 4020-4404</p><br />
      <p>Endereço: Av. Presidente Itamar Franco, 2010 - São Mateus, Juiz de Fora - MG, 36025-290</p>
      <p>Telefone: (32) 3232-1015</p><br />
      <p>Endereço: Av. Dr. Paulo Japiassú Coelho, 557 - Cascatinha, Juiz de Fora - MG, 36033-310</p>
      <p>Telefone: (32) 3026-6710</p><br />

      <p><strong>Drogasil</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3121 - Centro, Juiz de Fora - MG, 36010-012</p>
      <p>Telefone: (32) 99837-2124</p><br />
      <p>Endereço: R. Santo Antônio, 370 - Centro, Juiz de Fora - MG, 36015-000</p>
      <p>Telefone: (32) 99934-4567</p><br />
      <p>Endereço: Av. Presidente Itamar Franco, 1470 - Centro, Juiz de Fora - MG, 36016-320</p>
      <p>Telefone: (32) 99973-1316</p><br />

      <p><strong>Drogaria Araujo</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3217 - Passos, Juiz de Fora - MG, 36013-010</p>
      <p>Telefone: (32) 3214-5801</p><br />
      <p>Endereço: R. Halfeld, 788 - Centro, Juiz de Fora - MG, 36016-000</p>
      <p>Telefone: (32) 3212-8903</p><br />

      <p><strong>Farmácia de Manipulação Las Casas</strong></p>
      <p>Endereço: Edifício Brumado - Av. Barão do Rio Branco, 2281 - 103 - Centro, Juiz de Fora - MG, 36010-010</p>
      <p>Telefone: (32) 3250-1900</p><br />

      <p><strong>Derma Farmácia de Manipulação</strong></p>
      <p>Endereço: Galeria Ana Delmonte - R. Barão de São João Nepomuceno, 225 - Loja 118 - Centro, Juiz de Fora - MG, 36010-081</p>
      <p>Telefone: (32) 3215-7909</p><br />

      <p><strong>Pharmes Farmácia de Manipulação</strong></p>
      <p>Endereço: Galeria Constança Valadares, 10 - Centro, Juiz de Fora - MG, 36010-300</p>
      <p>Telefone: (32) 3212-5046</p><br />


      <h1>Cartórios</h1>
      <img 
        src={cartorioImg} 
        alt="Cartório" 
        style={{width: '950px', height: '550px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Cartório Bessa Coelho - 4º Ofício de Notas de Juiz de Fora/MG</strong></p>
      <p>Endereço: Galeria Constança Valadares, 04 - Centro, Juiz de Fora - MG, 36010-300</p>
      <p>Telefone: (32) 3215-1066</p><br />

      <p><strong>Cartório JF (Antigo Cartório Viana Jr)</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2050 - Centro, Juiz de Fora - MG, 36015-510</p>
      <p>Telefone: (32) 3211-9052</p><br />

      <p><strong>Cartório do 1º Tabelionato de Protestos</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2370 - Centro, Juiz de Fora - MG, 36016-903</p>
      <p>Telefone: (32) 3215-2930</p><br />

      <p><strong>Cartório Cobucci</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 1522 - Centro, Juiz de Fora - MG, 36016-320</p>
      <p>Telefone: (32) 3217-3271</p><br />

      <p><strong>Cartório do 1º Ofício do Registro de Imóveis de Juiz de Fora</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2337/1209 - Centro, Juiz de Fora - MG, 36010-011</p>
      <p>Telefone: (32) 3215-3593</p><br />

      <p><strong>Cartório de Registro Civil das Pessoas Naturais</strong></p>
      <p>Endereço: R. São José, 552 - Centro, Juiz de Fora - MG, 77560-000</p>
      <p>Telefone: (63) 98403-5865</p><br />

      <p><strong>1º Tabelionato do Ofício de Notas Cartório Maninho Faria</strong></p>
      <p>Endereço: Galeria Pio X, Loja 62 - Centro, Juiz de Fora - MG, 36010-240</p>
      <p>Telefone: (32) 3215-7604</p><br />



      <h1>Bancos</h1>
      <img 
        src={bancoImg} 
        alt="Banco" 
        style={{width: '950px', height: '550px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Banco Itaú</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2334 - Centro, Juiz de Fora - MG, 36016-310</p>
      <p>Telefone: 4004-4828</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 2685 - Centro, Juiz de Fora - MG, 36010-012</p>
      <p>Telefone: 4004-4828</p><br />
      <p>Endereço: Av. Dr. Paulo Japiassú Coelho, 555 - Cascatinha, Juiz de Fora - MG, 36033-310</p>
      <p>Telefone: 4004-4828</p><br />

      <p><strong>Banco Itaú Personnalité</strong></p>
      <p>Endereço: R. Santa Rita, 351 - Centro, Juiz de Fora - MG, 36010-071</p>
      <p>Telefone: 3003-7377</p><br />

      <p><strong>Banco Bradesco</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2725 - Centro, Juiz de Fora - MG, 36010-012</p>
      <p>Telefone: 4009-6700</p><br />
      <p>Endereço: R. Halfeld, 592 - Centro, Juiz de Fora - MG, 36010-002</p>
      <p>Telefone: (32) 3313-030</p><br />

      <p><strong>Banco Bradesco Prime</strong></p>
      <p>Endereço: R. Santo Antônio, 610 - Centro, Juiz de Fora - MG, 36015-000</p>
      <p>Telefone: (32) 3239-1700</p><br />

      <p><strong>Banco Santander</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2519 - Centro, Juiz de Fora - MG, 36010-011</p>
      <p>Telefone: 0800 702 3535</p><br />
      <p>Endereço: R. Halfeld, 634 - Centro, Juiz de Fora - MG, 36010-002</p>
      <p>Telefone: 0800 702 3535</p><br />

      <p><strong>Caixa Econômica Federal</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2340 - Centro, Juiz de Fora - MG, 36016-310</p>
      <p>Telefone: (32) 3132-0000</p><br />
      <p>Endereço: Av. Getúlio Vargas, 362 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (32) 3132-0600</p><br />
      <p>Endereço: R. Oscar Vidal, 121/123 - Centro, Juiz de Fora - MG, 36010-060</p>
      <p>Telefone: (32) 2101-6360</p><br />

      <p><strong>Banco do Brasil</strong></p>
      <p>Endereço: R. Halfeld, 770 - 5º Andar - Sala A - Centro, Juiz de Fora - MG, 36010-003</p>
      <p>Telefone: (32) 4003-3001</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 2847 - Centro, Juiz de Fora - MG, 36010-012</p>
      <p>Telefone: (32) 4003-3001</p><br />
      <p>Endereço: Av. Getúlio Vargas, 426 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (32) 4003-3001</p><br />

      <p><strong>Banco BV Financeira</strong></p>
      <p>Endereço: R. Batista de Oliveira, 480 - Centro, Juiz de Fora - MG, 36010-120</p>
      <p>Telefone: 3003-8942</p><br />

      <p><strong>Sicoob Coopemata</strong></p>
      <p>Endereço: Sicoob Uni Sudeste - R. Espírito Santo, 911 - Centro, Juiz de Fora - MG, 36010-041</p>
      <p>Telefone: (32) 3211-0998</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 3030 - Centro, Juiz de Fora - MG, 36016-311</p>
      <p>Telefone: (32) 3112-1942</p><br />

      <p><strong>Banco Mercantil</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 1909 - Centro, Juiz de Fora - MG, 36013-020</p>
      <p>Telefone: 0800 212 1211</p><br />
      <p>Endereço: R. Mal. Floriano Peixoto, 416 - Centro, Juiz de Fora - MG, 36013-080</p>
      <p>Telefone: 0800 212 1211</p><br />

      <p><strong>Safra</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2957 - Centro, Juiz de Fora - MG, 36010-002</p>
      <p>Telefone: (32) 3313-3100</p><br />


      <h1>Postos de Gasolina</h1>
      <img 
        src={postoImg} 
        alt="Posto de Gasolina" 
        style={{width: '950px', height: '550px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagens por Pexels </p>
      <p><strong>Posto Petrobras</strong></p>
      <p>Endereço: R. Barbosa Lima, 113 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (32) 3215-9151</p><br />
      <p>Endereço: R. Osório de Almeida, 875 - Poço Rico, Juiz de Fora - MG, 36020-020</p>
      <p>Telefone: (32) 3212-4208</p><br />
      <p>Endereço: Av. Brasil, 160 - Poço Rico, Juiz de Fora - MG, 36020-110</p>
      <p>Telefone: (32) 99942-8152</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 3164 - Centro, Juiz de Fora - MG, 36016-311</p>
      <p>Telefone: (32) 3216-5447</p><br />
      <p>Endereço: R. Osório de Almeida, 19 - Poço Rico, Juiz de Fora - MG, 36020-020</p>
      <p>Telefone: -</p><br />
      <p>Endereço: Av. Barão do Rio Branco - Cruzeiro do Sul, Juiz de Fora - MG, 36026-900 (Carrefour)</p>
      <p>Telefone: (11) 3004-2222</p><br />

      <p><strong>Posto Shell</strong></p>
      <p>Endereço: Av. Brasil, 3349 - Centro, Juiz de Fora - MG, 36060-010</p>
      <p>Telefone: 0800 728 1616</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 3950 - Passos, Juiz de Fora - MG, 36021-630</p>
      <p>Telefone: (32) 3214-3134</p><br />
      <p>Endereço: R. Mal. Setembrino de Carvalho, 85 - Ladeira, Juiz de Fora - MG, 36035-010</p>
      <p>Telefone: -</p><br />
      <p>Endereço: Av. Brasil, 820 - Costa Carvalho, Juiz de Fora - MG, 36070-060</p>
      <p>Telefone: -</p><br />
      <p>Endereço: R. Benjamin Constant, 77 - Vitorino Braga, Juiz de Fora - MG, 36060-150</p>
      <p>Telefone: -</p><br />

      <p><strong>Posto Ipiranga</strong></p>
      <p>Endereço: Av. Francisco Valadares, 1960 - Poço Rico, Juiz de Fora - MG</p>
      <p>Telefone: (32) 3235-4397</p><br />
      <p>Endereço: Av. dos Andradas, 504 - Gloria, Juiz de Fora - MG, 36036-000</p>
      <p>Telefone: (32) 3215-6857</p><br />

      <p><strong>Posto Man GNV</strong></p>
      <p>Endereço: Av. Sete de Setembro, 747 - Costa Carvalho, Juiz de Fora - MG, 36070-000</p>
      <p>Telefone: (22) 2621-6996</p><br />


    </div>
  );
};

export default Servicos;
