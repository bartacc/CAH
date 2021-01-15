import './style.scss';

import { Close } from '@icon-park/react';
import React from 'react';

export const DeckPreview = ({
  id,
  author,
  title,
  description,
  createdAt,
  isInDeckPanel,
  addDeck,
  removeDeck,
  isDeckChosen,
}) => {
  const date = `${createdAt.getDate()} ${createdAt.getMonth()} ${createdAt.getFullYear()}`;
  let rightUpElem = <p>{date}</p>;
  if (!isInDeckPanel) {
    rightUpElem = (
      <button onClick={() => removeDeck(id)}>
        <Close theme="filled" strokeWidth={3} />
      </button>
    );
  }
  return (
    <div
      className="card-preview"
      onClick={() => (isInDeckPanel && !isDeckChosen ? addDeck(id) : '')}
    >
      <div className="left-up">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="right-up">{rightUpElem}</div>
      <div className="left-bottom">
        <p>{author}</p>
      </div>
      <div className="right-bottom">
        <span>Card count</span>
      </div>
    </div>
  );
};
