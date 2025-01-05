import React from 'react';
import './pages.css';
import faculdadeImg from './img/Faculdade.jpg';
import escolaImg from './img/Escola.jpg';

const Escolas = () => {
  return (
    <div className="page-container">
      <h1>Universidades e Faculdades</h1>
      <img 
        src={faculdadeImg} 
        alt="Faculdade" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Universidade Federal de Juiz de Fora (UFJF)</strong></p>
      <p>Endereço: Campus Universitário, Rua José Lourenço Kelmer, s/n - São Pedro, Juiz de Fora - MG, 36036-900</p>
      <p>Telefone: (32) 2102-3911</p><br />

      <p><strong>Faculdade de Ciências Médicas e da Saúde de Juiz de Fora – Suprema</strong></p>
      <p>Endereço: Alameda Salvaterra, 200 - Salvaterra, Juiz de Fora - MG, 36033-003</p>
      <p>Telefone: (32) 2101-5000</p><br />

      <p><strong>Centro Universitário Antônio Carlos - Unipac Juiz de Fora</strong></p>
      <p>Endereço: R. Dr. José Cesário, 175 - Passos, Juiz de Fora - MG, 36025-030</p>
      <p>Telefone: (32) 3214-4285</p><br />
      <p>Endereço: Av. Juiz de Fora, 1100 - Granjas Betania, Juiz de Fora - MG, 36048-000</p>
      <p>Telefone: (32) 2102-2103</p><br />

      <p><strong>Universidade Salgado de Oliveira – Universo</strong></p>
      <p>Endereço: Av. dos Andradas, 731 - Morro da Glória, Juiz de Fora - MG, 36036-000</p>
      <p>Telefone: (32) 3311-9900</p><br />

      <p><strong>Faculdade Metodista Granbery</strong></p>
      <p>Endereço: R. Sampaio, 300 - Granbery, Juiz de Fora - MG, 36010-359</p>
      <p>Telefone: (32) 2101-1800</p><br />

      <p><strong>Rede de Ensino Faculdade Doctum</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 2655 - Centro, Juiz de Fora - MG, 36010-012</p>
      <p>Telefone: (32) 3026-0354</p><br />
      <p>Endereço: Av. Eugênio do Nascimento, s/n - Dom Bosco, Juiz de Fora - MG, 36038-330</p>
      <p>Telefone: (32) 3232-6025</p><br />
      <p>Endereço: R. Onófre Oliveira Sales, 16 - Santa Maria, Juiz de Fora - MG, 36085-155</p>
      <p>Telefone: (32) 3221-3884</p><br />
      <p>Telefone: 0800 033 1100</p><br />

      <p><strong>Faculdade Uninter Pólos</strong></p>
      <p>Endereço: Av. Getúlio Vargas, 355 - andar E 1 - Centro, Juiz de Fora - MG, 36010-110</p>
      <p>Telefone: (32) 98830-5365</p><br />
      <p>Endereço: R. Diogo Álvares, 469 - sala 101 - Benfica, Juiz de Fora - MG, 36090-320</p>
      <p>Telefone: (32) 98892-6911</p><br />

      <p><strong>Centro Universitário Estácio Juiz de Fora - Campus Rio Branco</strong></p>
      <p>Endereço: Av. Pres. João Goulart, 600 - Cruzeiro do Sul, Juiz de Fora - MG, 36030-142</p>
      <p>Telefone: (32) 98464-5349</p><br />

      <p><strong>Polo Estácio Centro Juiz de Fora</strong></p>
      <p>Endereço: Edifício Santa Cecília - R. Halfeld, 603 - sala 401 - Centro, Juiz de Fora - MG, 36010-002</p>
      <p>Telefone: (32) 3211-7730</p><br />

      <p><strong>Polo Estácio Jardim Norte Juiz de Fora</strong></p>
      <p>Endereço: Av. Brasil, 6345 - Mariano Procópio, Juiz de Fora - MG, 36080-060</p>
      <p>Telefone: (32) 3321-5772</p><br />

      <p><strong>Polo Estácio São Pedro Juiz de Fora</strong></p>
      <p>Endereço: Av. Pres. Costa e Silva, 1810 - LJ 02 - São Pedro, Juiz de Fora - MG, 36037-000</p>
      <p>Telefone: (32) 3015-5112</p><br />

      <p><strong>Faculdade Anhanguera</strong></p>
      <p>Endereço: Colégio Pio XII - R. Espírito Santo, 1301 - Centro, Juiz de Fora - MG, 36016-200</p>
      <p>Telefone: (32) 3031-2790</p><br />
      <p>Endereço: Av. Barão do Rio Branco, 499 - Manoel Honório, Juiz de Fora - MG, 36045-050</p>
      <p>Telefone: (32) 3212-1016</p><br />
      <p>Endereço: Av. Dr. Simeão de Faria, 291 - Santa Cruz, Juiz de Fora - MG, 36087-450</p>
      <p>Telefone: (32) 3212-1016</p><br />


      <h1>Escolas Públicas</h1>
      <img 
        src={escolaImg} 
        alt="Escola" 
        style={{ width: '1000px', height: '600px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem por Pexels </p>
      <p><strong>Escola Estadual Duque de Caxias</strong></p>
      <p>Endereço: Av. Barão do Rio Branco, 3310 - Passos, Juiz de Fora - MG, 36025-020</p>
      <p>Telefone: (32) 3212-2092</p><br />
      
      <p><strong>Escola Estadual Antônio Carlos</strong></p>
      <p>Endereço: Av. Cel. Vidal, 180 - Mariano Procópio, Juiz de Fora - MG, 36080-080</p>
      <p>Telefone: (32) 3215-9733</p><br />
      
      <p><strong>Escola Estadual Maria de Magalhães Pinto</strong></p>
      <p>Endereço: R. José Nunes Leal, 70 - Santa Luzia, Juiz de Fora - MG, 36030-230</p>
      <p>Telefone: (32) 3213-4175</p><br />
      
      <p><strong>Escola Estadual Duarte de Abreu</strong></p>
      <p>Endereço: R. Vitorino Braga, 405 - Vitorino Braga, Juiz de Fora - MG, 36060-000</p>
      <p>Telefone: (32) 3212-4743</p><br />
      
      <p><strong>Escola Estadual Delfim Moreira</strong></p>
      <p>Endereço: R. Santo Antônio, 1130 - Centro, Juiz de Fora - MG, 36016-210</p>
      <p>Telefone: (32) 3215-0058</p><br />
      
      <p><strong>Escola Estadual Fernando Lobo</strong></p>
      <p>Endereço: R. São Mateus, 784 - São Mateus, Juiz de Fora - MG, 36025-001</p>
      <p>Telefone: (32) 3232-9102</p><br />
      
      <p><strong>Instituto Estadual de Educação de Juiz de Fora</strong></p>
      <p>Endereço: Av. Getúlio Vargas, s/n - Centro, Juiz de Fora - MG, 36010-040</p>
      <p>Telefone: (32) 3215-6039</p><br />
      
      <p><strong>Escola Estadual Henrique Burnier</strong></p>
      <p>Endereço: R. Osório de Almeida, 976 - Poço Rico, Juiz de Fora - MG, 36020-020</p>
      <p>Telefone: (32) 3217-5515</p><br />
      
      <p><strong>Escola Municipal Santa Cecília</strong></p>
      <p>Endereço: R. Geraldo Miguel Miana, 370 - Santa Cecilia, Juiz de Fora - MG, 36026-070</p>
      <p>Telefone: (32) 3690-7685</p><br />
      
      <p><strong>E. M. Santa Catarina Labouré</strong></p>
      <p>Endereço: R. São Mateus, 716 - São Mateus, Juiz de Fora - MG, 36025-001</p>
      <p>Telefone: (32) 3690-7450</p><br />
      
      <p><strong>E. M. Prefeito Dilermando Cruz Filho</strong></p>
      <p>Endereço: R. Altivo Halfeld, 44 - Vila Ideal, Juiz de Fora - MG, 36020-550</p>
      <p>Telefone: (32) 3690-7661</p><br />


      <h1>Escolas Particulares</h1>
      <p><strong>Colégio Stella Matutina</strong></p>
      <p>Endereço: Av. Presidente Itamar Franco, 905 - Centro, Juiz de Fora - MG, 36010-021</p>
      <p>Telefone: (32) 3025-8700</p><br />
      
      <p><strong>Colégio Nossa Senhora do Carmo</strong></p>
      <p>Endereço: R. Doná Maria Helena, 112 - Santa Helena, Juiz de Fora - MG, 36015-310</p>
      <p>Telefone: (32) 3311-1600</p><br />
      
      <p><strong>Colégio Granbery</strong></p>
      <p>Endereço: R. Barão de Santa Helena, 482-518 - Centro, Juiz de Fora - MG, 36010-520</p>
      <p>Telefone: (32) 2101-1800</p><br />
      
      <p><strong>Colégio Equipe</strong></p>
      <p>Endereço: R. São Mateus, 331 - São Mateus, Juiz de Fora - MG, 36025-000</p>
      <p>Telefone: (32) 3232-8686</p><br />
      
      <p><strong>Colégio Catedral</strong></p>
      <p>Endereço: Travessa Catedral - R. Espírito Santo, 1301 - Centro, Juiz de Fora - MG, 36016-200</p>
      <p>Telefone: (32) 3217-1627</p><br />
      
      <p><strong>Colégio Adventista</strong></p>
      <p>Endereço: R. Prof. Inácio Werneck, 119 - Dom Bosco, Juiz de Fora - MG, 36025-360</p>
      <p>Telefone: (32) 3232-4834</p><br />
      
      <p><strong>Colégio Cristo Redentor - Academia de Comércio</strong></p>
      <p>Endereço: R. Halfeld, 1179 - Centro, Juiz de Fora - MG, 36015-360</p>
      <p>Telefone: (32) 2102-7700</p><br />
      
      <p><strong>Escola Recanto dos Amiguinhos/Colégio Raízes</strong></p>
      <p>Endereço: R. Santos Dumont, 473 - Granbery, Juiz de Fora - MG, 36010-510</p>
      <p>Telefone: (32) 99186-4761</p><br />
      
      <p><strong>Centro de Educação Infantil Gente Inocente</strong></p>
      <p>Telefone: (32) 98831-9706</p><br />
      
      <p><strong>Escola Tiquinho</strong></p>
      <p>Endereço: R. Chanceler Oswaldo Aranha, 348 - São Mateus, Juiz de Fora - MG, 36016-340</p>
      <p>Telefone: (32) 3215-8535</p><br />

    </div>
  );
};

export default Escolas;
