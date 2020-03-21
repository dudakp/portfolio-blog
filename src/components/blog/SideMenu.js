import { faBoxes, faChild, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';

// TODO: spravit genericke, s ikonkami a urovnami
export default ({ items }) => {
  return (
    <div className="menu sticky">
      <ul className="menu-list">
        <li>
          <Link to="/blog" state={{ category: 'all' }}>
            <FontAwesomeIcon
              icon={faHome}
              className="menu-icon"
            ></FontAwesomeIcon>
            Home
          </Link>
        </li>
        <li>
          <Link to={'/blog'} state={{ category: 'all' }}>
            <FontAwesomeIcon
              icon={faBoxes}
              className="menu-icon"
            ></FontAwesomeIcon>
            Categories
          </Link>
          <ul>
            <li>
              <Link to={'/blog'} state={{ category: 'general' }}>
                General
              </Link>
            </li>
            <li>
              <Link to={'/blog'} state={{ category: '1W1T' }}>
                1 week 1 technology
              </Link>
            </li>
            <li>
              <Link to={'/blog'} state={{ category: 'DevOps' }}>
                DevOps series
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/blog/about">
            <FontAwesomeIcon
              icon={faChild}
              className="menu-icon"
            ></FontAwesomeIcon>{' '}
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
