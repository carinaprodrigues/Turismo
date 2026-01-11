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

/* LISTA FIXA */
const PONTOS = [
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

const JogoMemoria = ({ onFechar }) => {
  const [cartas, setCartas] = useState([]);
  const [viradas, setViradas] = useState([]);
  const [encontradas, setEncontradas] = useState([]);
  const [bloqueado, setBloqueado] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [fim, setFim] = useState(false);

  const iniciarJogo = useCallback(() => {
    const selecionados = [...PONTOS]
      .sort(() => Math.random() - 0.5)
      .slice(0, 9);

    const pares = selecionados.flatMap((ponto, index) => [
      {
        id: index * 2,
        tipo: "nome",
        conteudo: ponto.nome,
        parId: index,
      },
      {
        id: index * 2 + 1,
        tipo: "imagem",
        conteudo: ponto.imagem,
        nome: ponto.nome,
        parId: index,
      },
    ]);

    setCartas(pares.sort(() => Math.random() - 0.5));
    setViradas([]);
    setEncontradas([]);
    setTentativas(0);
    setFim(false);
    setBloqueado(false);
  }, []);

  const virarCarta = (id) => {
    if (bloqueado || viradas.includes(id) || encontradas.includes(id)) return;

    const novas = [...viradas, id];
    setViradas(novas);

    if (novas.length === 2) {
      setTentativas((t) => t + 1);
      setBloqueado(true);

      const [a, b] = novas.map((i) => cartas.find((c) => c.id === i));

      if (a.parId === b.parId) {
        setEncontradas((e) => [...e, a.id, b.id]);
        setViradas([]);
        setBloqueado(false);
      } else {
        setTimeout(() => {
          setViradas([]);
          setBloqueado(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    iniciarJogo();
  }, [iniciarJogo]);

  useEffect(() => {
    if (encontradas.length === 18) {
      setTimeout(() => setFim(true), 300);
    }
  }, [encontradas]);

  return (
    <div className="jogo-memoria-fullscreen">
      <div className="jogo-header">
        <h1>Jogo da Memória - Juiz de Fora</h1>
        <div className="jogo-buttons">
          <button onClick={iniciarJogo}>🔄 Novo Jogo</button>
          <button onClick={onFechar}>✕ Sair</button>
        </div>
      </div>

      <div className="grid-cartas">
        {cartas.map((carta) => (
          <div
            key={carta.id}
            className={`carta ${
              viradas.includes(carta.id) || encontradas.includes(carta.id)
                ? "virada"
                : ""
            }`}
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

      {fim && (
        <div className="alert-fake">
          <div className="alert-box">
            <p>🎉 Parabéns! Você completou o jogo!</p>
            <p>Tentativas: {tentativas}</p>
            <button onClick={() => setFim(false)}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JogoMemoria;


