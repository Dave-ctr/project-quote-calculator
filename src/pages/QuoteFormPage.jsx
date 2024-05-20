import React from 'react';
import { Link } from 'react-router-dom';

function QuoteFormPage() {
  return (
    <div>
      QuoteFormPage
      <Link to='/'>
        <button>Back to Quote</button>
      </Link>
    </div>
  );
}

export default QuoteFormPage;
