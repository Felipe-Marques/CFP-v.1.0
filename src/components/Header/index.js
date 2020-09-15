import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  padding: 20px;
  position: sticky;
  top: 0;
  height: auto;
  background: black;
  z-index: 10;
`;

const Title = styled.h3`
  color: teal;
  margin: 0;
`;

export default function Header() {
  return (
    <Wrapper>
      <div className="nav-wrapper">
        <Title>Controle Finaceiro Pessoal</Title>
      </div>
    </Wrapper>
  );
}
