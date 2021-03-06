import './style.css';

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useConnection } from '../../contexts/connection';

const Navigation = () => {
  const { rpc } = useConnection();
  const { pathname } = useLocation();

  return (
    <nav className={`navigation ${rpc ? 'hidden' : ''}`}>
      <ul>
        <li className={pathname == '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={pathname == '/deckCreator' ? 'active' : ''}>
          <Link to="/deckCreator">Deck Creator</Link>
        </li>
        <li className={pathname == '/room' ? 'active' : ''}>
          <Link to="/room">Room</Link>
        </li>
        <li className={pathname == '/roomList' ? 'active' : ''}>
          <Link to="/roomList">Room List</Link>
        </li>
        <li className={pathname == '/game' ? 'active' : ''}>
          <Link to="/game">Game</Link>
        </li>
        <li className={pathname == '/game' ? 'active' : ''}></li>
      </ul>
    </nav>
  );
};
export { Navigation };
