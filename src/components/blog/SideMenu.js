import { faBoxes, faChild, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';

// TODO: spravit genericke, s ikonkami a urovnami
export default ({ items }) => (
  <div className="menu sticky">
    <ul className="menu-list">
      <li>
        <Link to="/">
          <FontAwesomeIcon
            icon={faHome}
            className="menu-icon"
          />
          Home
        </Link>
      </li>
      <li>
        <Link to="/">
          <FontAwesomeIcon
            icon={faBoxes}
            className="menu-icon"
          />
          Categories
        </Link>
        <ul>
          <li>
            <Link to="/" state={{ category: 'general' }}>
              General
            </Link>
          </li>
          <li>
            <Link to="/" state={{ category: '1W1T' }}>
              {/* 1 week 1 technology */}
              Secret no. 1
            </Link>
          </li>
          <li>
            <Link to="/" state={{ category: 'DevOps' }}>
              {/* DevOps series */}
              Secret no. 2
            </Link>
          </li>
          <li>
            <Link to="/" state={{ category: 'smithereens' }}>
              {/* smithereens */}
              Secret no. 3
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/about">
          <FontAwesomeIcon
            icon={faChild}
            className="menu-icon"
          />
          {' '}
          About
        </Link>
      </li>
    </ul>
  </div>
);
