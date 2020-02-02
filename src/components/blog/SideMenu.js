import { faBoxes, faChild, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default () => (
  <div class="menu sticky">
    <ul class="menu-list">
      <li>
        <a>
          <FontAwesomeIcon
            icon={faHome}
            className="menu-icon"
          ></FontAwesomeIcon>
          Home
        </a>
      </li>
      <li>
        <a>
          <FontAwesomeIcon
            icon={faBoxes}
            className="menu-icon"
          ></FontAwesomeIcon>
          Categories
        </a>
        <ul>
          <li>
            <a>General</a>
          </li>
          <li>
            <a>1 week 1 technology</a>
          </li>
          <li>
            <a>DevOps series</a>
          </li>
        </ul>
      </li>
      <li>
        <a>
          <FontAwesomeIcon
            icon={faChild}
            className="menu-icon"
          ></FontAwesomeIcon>{' '}
          About
        </a>
      </li>
    </ul>
  </div>
);
