import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  display: flex;
  align-items: center; /* Alinha os itens verticalmente */
  background-color: #1A202C;
  box-shadow: 0 0 20px 3px;
  position: fixed; /* Garante que o menu fique fixo no topo */
  width: 100%;
  z-index: 10; /* Certifique-se de que está acima de outros elementos */

  > svg {
    position: absolute; /* Mantém o ícone posicionado fixamente */
    color: white;
    width: 30px;
    height: 30px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
