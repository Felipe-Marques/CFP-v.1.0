import React, { useState, useEffect } from 'react';
import TransactionDataService from '../src/services/transactionService';
import M from 'materialize-css';
import { PERIODS } from '../src/helpers/periodo';

//Components
import PageDefault from './components/PageDefault/index';
import PainelInfo from './components/info/PainelInfo';
import Filtro from './components/Filtro/Filtro';
import Button from './components/Button';
import ModalNew from './components/ModalNew';
import ModalUpdate from './components/ModalUpdate';
import Lancamentos from './components/info/Lancamentos';

//css Modules
import './components/components.modules.css';

export default function App() {
  const [searchByDescription, setSearchBydescription] = useState('');
  const [currentPeriod, setCurrentPeriod] = useState(PERIODS[0]);
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [dropdown, setDropdown] = useState('');
  const [statusModal, setStatusModal] = useState(false);
  const [removed, setRemoved] = useState();

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await TransactionDataService.getAll(
        currentPeriod,
        searchByDescription
      );
      setTransactions(data);
    };

    fetchTransactions();
    M.AutoInit();
  }, [currentPeriod, searchByDescription, statusModal, removed]);

  const handlePeriodSelect = (event) => {
    setCurrentPeriod(event.target.value);
  };

  const showDropdown = () => {
    setDropdown('show');
    document.addEventListener('click', closeDropdown);
  };

  const closeDropdown = () => {
    setDropdown('');
    document.removeEventListener('click', closeDropdown);
  };

  const handleInputDescription = (newText) => {
    setSearchBydescription(newText);
  };

  const handleStatusModal = (status) => {
    if (status === true && statusModal === true) {
      setStatusModal(false);
    } else {
      setStatusModal(true);
    }
  };

  const handleAction = (action, transaction) => {
    const { _id } = transaction;
    if (action === 'delete') {
      TransactionDataService.remove(_id)
        .then((response) => {
          setRemoved(_id);
        })
        .catch((e) => {
          // console.log(e);
        });
    } else {
      setDropdown('show');
      setTransaction(transaction);
    }
  };

  return (
    <PageDefault>
      <div className="container">
        <div className="row">
          <div className={`col s4 offset-s4`}>
            <select valor={currentPeriod} onChange={handlePeriodSelect}>
              {PERIODS.map((period) => {
                return (
                  <option key={period} value={period}>
                    {period}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <PainelInfo transactions={transactions} />
        <div className="row valign-wrapper">
          <div className="col s6  m3  noPadding">
            <Button onClick={showDropdown} />
            <ModalNew
              onChange={handleStatusModal}
              updateTransaction={false}
              className={dropdown}
            />
            <ModalUpdate
              onChange={handleStatusModal}
              transaction={transaction}
              className={dropdown}
            />
          </div>
          <div className="col s6 m9 noPadding">
            <Filtro onChange={handleInputDescription} />
          </div>
        </div>
        <Lancamentos handleAction={handleAction} transactions={transactions} />
      </div>
    </PageDefault>
  );
}
