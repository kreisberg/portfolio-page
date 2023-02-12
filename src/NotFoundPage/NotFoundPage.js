import React from 'react';
import '../NotFoundPage/NotFoundPage.scss';

export default function NotFoundPage() {
  return (
    <div className='notFoundPage'>
      <h1>Page not found</h1>
      <a href="/" className="home-link">
        HOME PAGE
      </a>
    </div>
  )
}

