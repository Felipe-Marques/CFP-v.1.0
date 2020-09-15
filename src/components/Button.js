import React from 'react';

export default function Button() {
  return (
    <button
      className=" waves-effect waves-light btn-small textButton modal-trigger"
      data-target="modalNew"
    >
      {/* <i className="material-icons left noMargin">add</i> */}
      Novo Lançamento
    </button>
  );
}
