import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import GoogleAuth from './GoogleAuth';

const Header = () => (
  <>
    <Menu secondary pointing>
      <Link to="/" className="item">
        LOGO
      </Link>
      <Menu.Menu position="right">
        <Link to="/" className="item">
          All Videos
        </Link>
        <GoogleAuth />
      </Menu.Menu>
    </Menu>
  </>
);

export default Header;
