import React from 'react';
import { WrapperTransactionContainer } from './styled.js';

export default function Lancamento({ handleAction, transaction }) {
  const { day, category, description, type } = transaction;

  const color = type === '-' ? 'rgb(240, 161, 168)' : 'rgb(161, 240, 220)';

  const handleActionButton = (event) => {
    const action = event.target.id;
    handleAction(action, transaction);
  };

  return (
    <WrapperTransactionContainer
      style={{ background: color }}
      className="row valign-wrapper"
    >
      <WrapperTransactionContainer.index className="col s2 m1">
        <span>{day.toString().padStart(2, '0')}</span>
      </WrapperTransactionContainer.index>
      <WrapperTransactionContainer.description className="col s8 m10">
        <WrapperTransactionContainer.strong>
          {category}
        </WrapperTransactionContainer.strong>
        <span>{description}</span>
      </WrapperTransactionContainer.description>
      <WrapperTransactionContainer.buttons className="col s2 m1 noPadding">
        <span
          className="waves-effect waves-light modal-trigger"
          data-target="modalUpdate"
          onClick={handleActionButton}
        >
          <WrapperTransactionContainer.icons
            className="material-icons "
            id="update"
          >
            create
          </WrapperTransactionContainer.icons>
        </span>
        <span className="waves-effect waves-light" onClick={handleActionButton}>
          <WrapperTransactionContainer.icons
            className="material-icons"
            id="delete"
          >
            delete
          </WrapperTransactionContainer.icons>
        </span>
      </WrapperTransactionContainer.buttons>
    </WrapperTransactionContainer>
  );
}
