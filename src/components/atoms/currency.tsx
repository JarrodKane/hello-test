import React from 'react';

interface CurrencyProps {
  value: number;
  currency?: string;
  className?: string;
}

// Would be good to expand this out in the future to accept the currency to accurately display the correct currency symbol

const Currency: React.FC<CurrencyProps> = ({ value, className }) => {
  if (!value) {
    return <span className='text-red-500'>N/A</span>;
  }

  return <span className={className}>${value.toFixed(2)}</span>;
};

export default Currency;
