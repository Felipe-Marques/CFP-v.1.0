import React, { useState, useEffect } from 'react';
import TransactionDataService from '../services/transactionService.js';

export default function ModalNew({ onChange }) {
  const initialTransactionState = {
    description: '',
    value: '',
    category: '',
    yearMonthDay: '',
    type: '',
  };

  const controlledDate = {
    minValue: '2019-01-01',
    maxValue: '2021-12-31',
  };

  const [newTransaction, setNewTransaction] = useState(initialTransactionState);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleDate = () => {
      const { yearMonthDay } = newTransaction;
      const { minValue, maxValue } = controlledDate;

      if (yearMonthDay < minValue || yearMonthDay > maxValue) {
        setErrorMessage(
          `O Periodo aceito é entre 01-01-2019 e 31-12-2021 (inclusive)`
        );
        return;
      }
      setErrorMessage('');
    };

    handleDate();
  }, [controlledDate, newTransaction]);

  const handleRadio = (event) => {
    const { name, value } = event.target;
    let type = '-';
    if (value === 'Receita') {
      type = '+';
    }
    setNewTransaction({ ...newTransaction, [name]: type });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = () => {
    var data = {
      description: newTransaction.description,
      category: newTransaction.category,
      value: newTransaction.value,
      yearMonthDay: newTransaction.yearMonthDay,
      type: newTransaction.type,
    };

    TransactionDataService.insertTransaction(data)
      .then((response) => {
        setNewTransaction({
          description: response.data.description,
          category: response.data.category,
          value: response.data.value,
          yearMonthDay: response.data.yearMonthDay,
          type: response.data.type,
        });
        setSubmitted(true);
        setNewTransaction(initialTransactionState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCloseButton = () => {
    setNewTransaction(initialTransactionState);
    setSubmitted(false);
    onChange(submitted);
  };

  const handleNewTransaction = () => {
    setNewTransaction(initialTransactionState);
    setSubmitted(false);
  };

  const { minValue, maxValue } = controlledDate;

  return (
    <div className="submit-form">
      {submitted ? (
        <div id="modalNew" className="modal">
          <div className="modal-title valign-wrapper">
            <h5>Incluir Lançamento</h5>
            <button
              onClick={handleCloseButton}
              className="modal-close waves-effect waves-red btn-flat red"
            >
              X
            </button>
          </div>
          <div className="modal-content modal-success">
            <h6>Lançamento registrado com sucesso!</h6>
          </div>
          <div className="modal-footer">
            <button
              className="waves-effect waves-green btn-flat teal white-text"
              onClick={handleNewTransaction}
            >
              Novo
            </button>
          </div>
        </div>
      ) : (
        <div id="modalNew" className="modal">
          <div className="modal-title valign-wrapper">
            <h5>Incluir Lançamento</h5>
            <button
              onClick={handleCloseButton}
              className="modal-close waves-effect waves-red btn-flat red"
            >
              X
            </button>
          </div>
          <div className="modal-content">
            <div className="tipoLancamento form-group">
              <label>
                <input
                  name="type"
                  type="radio"
                  className="form-control"
                  value="Despesa"
                  onChange={handleRadio}
                />
                <span className="red-text">Despesa</span>
              </label>

              <label>
                <input
                  name="type"
                  type="radio"
                  className="form-control"
                  value="Receita"
                  onChange={handleRadio}
                />
                <span className="teal-text">Receita</span>
              </label>
            </div>

            <div className="input-field form-group">
              <input
                id="description"
                name="description"
                type="text"
                className="validate form-control"
                value={newTransaction.description}
                onChange={handleInputChange}
                autoFocus
              />
              <label htmlFor="description">Descrição</label>
            </div>
            <div className="input-field form-group">
              <input
                id="category"
                name="category"
                type="text"
                className="validate form-control"
                value={newTransaction.category}
                onChange={handleInputChange}
              />
              <label htmlFor="category">Categoria</label>
            </div>
            <div className="row valign-wrapper noMargin">
              <div className="input-field col s6 form-group">
                <input
                  id="value"
                  name="value"
                  type="number"
                  value={newTransaction.value}
                  onChange={handleInputChange}
                  className="validate form-control"
                />
                <label htmlFor="value">Valor</label>
              </div>
              <div className="col s6 form-group">
                <input
                  name="yearMonthDay"
                  type="date"
                  className="form-control"
                  min={minValue}
                  max={maxValue}
                  value={newTransaction.yearMonthDay}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <span style={{ color: 'red', marginLeft: '20px' }}>
              {errorMessage}
            </span>
          </div>
          <div className="modal-footer noPadding">
            <button
              type="submit"
              className="waves-effect waves-green btn-flat teal white-text"
              onClick={handleSubmit}
              disabled={errorMessage.trim() !== ''}
            >
              Salvar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
