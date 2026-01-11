import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import cartaVerso from "../../pages/img/Carta.jpg";

import procopioImg from "../../pages/img/procopio.jpg";
import lajinhaImg from "../../pages/img/Lajinha.jpeg";
import halfeldImg from "../../pages/img/Halfeld.jpeg";
import botanicoImg from "../../pages/img/Botanico.jpeg";
import cristoImg from "../../pages/img/Cristo.JPG";
import penidoImg from "../../pages/img/Penido.jpg";
import marianoImg from "../../pages/img/Mariano.jpg";
import muriloImg from "../../pages/img/Murilo.JPG";
import ferroviarioImg from "../../pages/img/Ferroviario.JPG";
import marmelosImg from "../../pages/img/Marmelos.jpg";
import creditoImg from "../../pages/img/Credito.jpg";
import republicaImg from "../../pages/img/Republica.JPG";
import bernardoImg from "../../pages/img/Bernardo.JPG";
import culturaImg from "../../pages/img/Cultura.jpg";
import theatroImg from "../../pages/img/Theatro.jpg";
import independenciaImg from "../../pages/img/Independencia.jpg";
import catedralImg from "../../pages/img/Catedral.jpg";
import planetarioImg from "../../pages/img/Planetario.JPG";
import estadioImg from "../../pages/img/Estadio.jpg";
import santaImg from "../../pages/img/Santa.jpg";
import norteImg from "../../pages/img/Norte.jpg";

const JogoMemoria = ({ onFechar }) => {
  const [cartas, setCartas] = useState([]);
  const [viradas, setViradas] = useState([]);
  const [encontrados, setEncontrados] = useState([]);
  const [bloqueado, setBloqueado] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [mostrarMensagem, setMostrarMensagem] = useState(false);

  const todosOsPontos = [
    { nome: "Parque Mariano Procópio", imagem: procopioImg },
    { nome: "Parque da Lajinha", imagem: lajinhaImg },
    { nome: "Parque Halfeld", imagem: halfeldImg },
    { nome: "Jardim Botânico da UFJF", imagem: botanicoImg },
    { nome: "Mirante do Morro do Cristo", imagem: cristoImg },
    { nome: "Praça Dr. João Penido", imagem: penidoImg },
    { nome: "Museu Mariano Procópio", imagem: marianoImg },
    { nome: "Museu de Arte Murilo Mendes", imagem: muriloImg },
    { nome: "Museu Ferroviário", imagem: ferroviarioImg },
    { nome: "Museu Usina de Marmelos Zero", imagem: marmelosImg },
    { nome: "Museu do Crédito Real", imagem: creditoImg },
    { nome: "Memorial da República", imagem: republicaImg },
    { nome: "Centro Cultural Bernardo Mascarenhas", imagem: bernardoImg },
    { nome: "Forum da Cultura - UFJF", imagem: culturaImg },
    { nome: "Cine-Theatro Central", imagem: theatroImg },
    { nome: "Independência Shopping", imagem: independenciaImg },
    { nome: "Shopping Jardim Norte", imagem: norteImg },
    { nome: "Santa Cruz Shopping", imagem: santaImg },
    { nome: "Catedral Metropolitana", imagem: catedralImg },
    { nome: "Planetário da UFJF", imagem: planetarioImg },
    { nome: "Estádio Municipal", imagem: estadioImg },
  ];

  const selecionarPontosAleatorios = () => {
    const embaralhado = [...todosOsPontos].sort(() => Math.random() - 0.5);
    return embaralhado.slice(0, 9);
  };

  // const iniciarJogo = () => {
  //   const pontosAleatorios = selecionarPontosAleatorios();
  //   const paresCartas = [];

  //   pontosAleatorios.forEach((ponto, index) => {
  //     paresCartas.push({
  //       id: index * 2,
  //       tipo: "nome",
  //       conteudo: ponto.nome,
  //       parId: index,
  //       imagem: ponto.imagem,
  //     });

  //     paresCartas.push({
  //       id: index * 2 + 1,
  //       tipo: "imagem",
  //       conteudo: ponto.imagem,
  //       parId: index,
  //       nome: ponto.nome,
  //     });
  //   });

  //   const cartasEmbaralhadas = [...paresCartas]
  //     .sort(() => Math.random() - 0.5)
  //     .map((carta, index) => ({ ...carta, posicao: index }));

  //   setCartas(cartasEmbaralhadas);
  //   setViradas([]);
  //   setEncontrados([]);
  //   setBloqueado(false);
  //   setTentativas(0);
  //   setMostrarMensagem(false);
  // };
  const iniciarJogo = useCallback(() => {
    const pontosAleatorios = selecionarPontosAleatorios();
    const paresCartas = [];

    pontosAleatorios.forEach((ponto, index) => {
      paresCartas.push({
        id: index * 2,
        tipo: "nome",
        conteudo: ponto.nome,
        parId: index,
        imagem: ponto.imagem,
      });

      paresCartas.push({
        id: index * 2 + 1,
        tipo: "imagem",
        conteudo: ponto.imagem,
        parId: index,
        nome: ponto.nome,
      });
    });

    const cartasEmbaralhadas = [...paresCartas]
      .sort(() => Math.random() - 0.5)
      .map((carta, index) => ({ ...carta, posicao: index }));

    setCartas(cartasEmbaralhadas);
    setViradas([]);
    setEncontrados([]);
    setBloqueado(false);
    setTentativas(0);
    setMostrarMensagem(false);
  }, []);

  const virarCarta = (id) => {
    if (bloqueado || viradas.includes(id) || encontrados.includes(id)) return;

    const novasViradas = [...viradas, id];
    setViradas(novasViradas);

    if (novasViradas.length === 2) {
      setTentativas((prev) => prev + 1);
      setBloqueado(true);
      verificarPar(novasViradas);
    }
  };

  const verificarPar = (ids) => {
    const [id1, id2] = ids;
    const carta1 = cartas.find((c) => c.id === id1);
    const carta2 = cartas.find((c) => c.id === id2);

    if (carta1.parId === carta2.parId) {
      setEncontrados((prev) => [...prev, id1, id2]);
      setViradas([]);
      setBloqueado(false);
    } else {
      setTimeout(() => {
        setViradas([]);
        setBloqueado(false);
      }, 1000);
    }
  };

  // useEffect(() => {
  //   iniciarJogo();
  // }, []);
  useEffect(() => {
    iniciarJogo();
  }, [iniciarJogo]);

  useEffect(() => {
    if (encontrados.length === 18 && cartas.length > 0) {
      setTimeout(() => {
        setMostrarMensagem(true);
      }, 300);
    }
  }, [encontrados, cartas.length]);

  return (
    <div className="jogo-memoria-fullscreen">
      <div className="jogo-header">
        <div className="jogo-info">
          <h1>Jogo da Memória - Juiz de Fora</h1>
          <p>Encontre os pares: nome + imagem correspondente</p>
        </div>

        <div className="jogo-stats">
          <div className="stat">
            <span className="stat-number">{encontrados.length / 2}</span>
            <span className="stat-label">de 9 pares</span>
          </div>
          <div className="stat">
            <span className="stat-number">{tentativas}</span>
            <span className="stat-label">tentativas</span>
          </div>
        </div>

        <div className="jogo-buttons">
          <button onClick={iniciarJogo} className="btn reiniciar">
            🔄 Novo Jogo
          </button>
          <button onClick={onFechar} className="btn fechar">
            ✕ Sair
          </button>
        </div>
      </div>

      <div className="jogo-container">
        <div className="grid-cartas">
          {cartas.map((carta) => (
            <div
              key={carta.id}
              className={`carta ${
                viradas.includes(carta.id) || encontrados.includes(carta.id)
                  ? "virada"
                  : ""
              } ${bloqueado ? "bloqueada" : ""}`}
              onClick={() => virarCarta(carta.id)}
            >
              <div className="carta-inner">
                <div
                  className="carta-frente"
                  style={{ backgroundImage: `url(${cartaVerso})` }}
                />
                <div className="carta-verso">
                  {carta.tipo === "nome" ? (
                    <div className="carta-nome">
                      <span>{carta.conteudo}</span>
                    </div>
                  ) : (
                    <div className="carta-imagem">
                      <img src={carta.conteudo} alt={carta.nome} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {mostrarMensagem && (
        <div className="alert-fake">
          <div className="alert-box">
            <p>🎉 Parabéns! Você completou o jogo!</p>
            <p>
              Tentativas: <strong>{tentativas}</strong>
            </p>
            <button onClick={() => setMostrarMensagem(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JogoMemoria;
