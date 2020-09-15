import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid rgb(11, 161, 167);
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

export default function PainelInfo({ transactions }) {
  const revenues = transactions
    .filter((transaction) => transaction.type === '+')
    .reduce((accumulator, current) => {
      return accumulator + current.value;
    }, 0);

  const expenses = transactions
    .filter((transaction) => transaction.type === '-')
    .reduce((accumulator, current) => {
      return accumulator + current.value;
    }, 0);

  const { length } = transactions;
  return (
    <Wrapper>
      <div className="col s6 m3">
        <span>Lançamentos: {length}</span>
      </div>
      <div className="col s6 m3">
        <span>
          Receitas:
          <span className="receita"> R$ {revenues.toFixed(2)} </span>
        </span>
      </div>
      <div className="col s6 m3">
        <span className="flex">
          Despesas: <span className="despesa"> R$ {expenses.toFixed(2)}</span>
        </span>
      </div>
      <div className="col s6 m3">
        <span>
          Saldo:{' '}
          <span className="receita">R$ {(revenues - expenses).toFixed(2)}</span>
        </span>
      </div>
    </Wrapper>
  );
}
