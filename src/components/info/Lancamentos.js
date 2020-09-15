import React from 'react';
import Lancamento from '../Lancamento/Lancamento';

export default function Lancamentos({ handleAction, transactions }) {
  const handleTransactionAction = (action, transaction) => {
    handleAction(action, transaction);
  };

  return (
    <div>
      {transactions.map((transaction) => {
        const { _id } = transaction;
        return (
          <Lancamento
            key={_id}
            handleAction={handleTransactionAction}
            transaction={transaction}
          />
        );
      })}
    </div>
  );
}
