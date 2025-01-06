import React from 'react';
import './pages.css';
import historiaImg from './img/Historia.jpg';

const Hospitais = () => {
  return (
    <div className="page-container">
      <h1>História e Origem</h1>
      <img 
        src={historiaImg} 
        alt="Câmara e museu Mariano Procópio de Juiz de Fora" 
        style={{width: '950px', height: '550px', borderRadius: '10px', display: 'block', margin: '0 auto'}} 
      />
      <p style={{ marginBottom: '30px' }} >Imagem: Prefeitura e Museu Mariano Procópio de Juiz de Fora. Acervo pessoal </p>
      <p>
      Juiz de Fora foi desmembrada de Barbacena, tornando-se município em 1850, e recebeu status de cidade em 1853. Surgiu como Santo Antônio do Paraibuna devido à expansão do Caminho Novo, uma estrada colonial para transportar ouro e evitar contrabando. O nome "Juiz de Fora" refere-se a um magistrado colonial que atuava em regiões sem juízes regulares.
      </p>
      <h1>Expansão Cafeeira e Escravidão</h1>
      <p>
      A cidade prosperou com a cafeicultura, tornando-se um centro econômico na Zona da Mata e atraindo mão de obra escrava. Durante seu auge, tinha mais escravos que homens livres, mas a economia agrícola entrou em declínio no início do século XX, dando lugar à industrialização.
      </p>
      <h1>Imigração Alemã</h1>
      <p>
      A chegada de imigrantes alemães em 1857 foi incentivada para construção da Estrada União e Indústria e produção agrícola. Apesar das dificuldades de adaptação, muitos se integraram à cidade, contribuindo para o crescimento industrial, com destaque para a fundação de fábricas e malharias.
      </p>
      <h1>Cultura e Arquitetura</h1>
      <p>
      Juiz de Fora destacou-se por sua arquitetura eclética, influenciada por estilos europeus como Art Nouveau e Art Deco. Inicialmente aberta ao debate de ideias, a cidade se tornou mais conservadora na década de 1920 com a maior influência da Igreja Católica. Teve intensa atividade cultural e literária, além de um papel relevante na modernização industrial.
      </p>
      <h1>Impressa e Vida Cultural</h1>
      <p>
      A imprensa foi dinâmica desde 1870, contribuindo para a formação de opinião. A vida cultural passou por várias fases, refletindo uma identidade mais cosmopolita, alinhada com o Rio de Janeiro, e afastando-se da tradição colonial mineira.
      </p>
      <h1>Juiz de Fora: Princesa de Minas</h1>
      <p>
      Juiz de Fora, conhecida como "Princesa de Minas", destaca-se por sua importância histórica e cultural no Brasil. A cidade foi pioneira em vários acontecimentos marcantes:
      </p>
      <ul>
        <li><strong>Primeira usina hidrelétrica da América Latina:</strong> Construída às margens do Rio Paraibuna, a Usina de Marmelos, idealizada por Bernardo Mascarenhas, marcou o início da geração de energia hidrelétrica no continente.</li>
        <li><strong>Primeira partida de futebol registrada no Brasil:</strong> Antes de Charles Miller, alunos do Instituto Metodista Granbery jogaram futebol em 1893, com registros detalhados do evento.</li>
        <li><strong>O primeiro padre surdo da América Latina:</strong> Monsenhor Vicente de Paulo Penido Burnier, de Juiz de Fora, tornou-se padre em 1951 após obter aprovação do Papa Pio XII. Fundou pastorais dos surdos no Brasil e no exterior, deixando um importante legado até seu falecimento em 2009.</li>
        <li><strong>A primeira galeria de Minas Gerais:</strong> A Galeria Pio X, construída em 1923 em Juiz de Fora, foi a primeira de Minas e uma das pioneiras do Brasil. Conectando as ruas Halfeld e Marechal Deodoro, é um marco histórico e cultural da cidade.</li>
        <li><strong>Primeira transmissão esportiva de TV:</strong> Em 1950, Olavo Bastos Freire transmitiu Tupi x Bangu meses antes da inauguração oficial da televisão brasileira.</li>
      </ul>
      <h1>Cultura Contemporânea</h1>
      <p>
      A cidade também é um polo cultural, com renomados artistas como Murilo Mendes e Pedro Nava, além de eventos anuais como o Festival Internacional de Música Colonial Brasileira e o Congresso Nacional de Laticínios. Seus bens imateriais incluem manifestações únicas, como o Batuque Afro-Brasileiro de Nelson Silva e o Miss Brasil Gay.
      </p>
      <h1>Espaços Culturais</h1>
      <p>
      Espaços culturais emblemáticos, como o Fórum da Cultura e o Centro Cultural Bernardo Mascarenhas, preservam e promovem as artes locais. Juiz de Fora mantém sua identidade por meio de tradições, arquitetura histórica e uma intensa vida cultural.
      </p>
      <h1>Datas Históricas</h1>
      <ul>
        <li><strong>Desmembrado de Barbacena e elevado à categoria de município:</strong> 31/05/1850.</li>
        <li><strong>Instalado:</strong> 07/04/1853.</li>
        <li><strong>Data da comemoração:</strong> 31/05.</li>
        <li><strong>Padroeiro:</strong> Santo Antônio (13/06).</li>
      </ul>
      <h1>Referências</h1>
      <p>
      LIVRO "Juiz de Fora: Vivendo a História", da professora e pesquisadora da UFJF Mônica Ribeiro de Oliveira. Outro histórico é de Carlos Alberto Hargreaves Botti (1994), extraído da Companhia Mineira de Eletricidade. Companhia Energética de Minas Gerais, Centro de Pesquisas Sociais, UFJF, pp. 19-20.
      </p><br />
      <p><strong>Websites:</strong></p>
      <ul>
        <li>Disponível em: www.pjf.mg.gov.br/institucional/cidade/historia.php</li>
        <li>Disponível em: www.zinecultural.com/blog/historias-de-juiz-de-fora</li>
      </ul>
    </div>
  );
};

export default Hospitais;
