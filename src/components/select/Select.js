import React, { useState } from 'react';
import { PERIODS } from '../../helpers/periodo';

export default function Select({ onChange }) {
  const [currentPeriod, setCurrentPeriod] = useState(PERIODS[0]);

  const handlePeriodSelect = (event) => {
    setCurrentPeriod(event.target.value);
  };

  onChange(currentPeriod);
  return (
    <div className="row">
      <div className={`col s4 offset-s4`}>
        <select value={currentPeriod} onChange={handlePeriodSelect}>
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
  );
}
