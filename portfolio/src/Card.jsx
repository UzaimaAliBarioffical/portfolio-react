import React from 'react';

function Card({ title, description, imageUrl, link }) {
  return (
    <div className="card m-3" style={{ width: '18rem' }}>
      <img  src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Open Project
        </a>
      </div>
    </div>
  );
}

export default Card;