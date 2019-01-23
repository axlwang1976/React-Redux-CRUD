import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import AuthModal from './AuthModal';

const Header = () => (
  <>
    <Menu secondary pointing>
      <Link to="/" className="item">
        LOGO
      </Link>
      <Menu.Menu position="right">
        <Link to="/" className="item">
          All Posts
        </Link>
        <AuthModal />
      </Menu.Menu>
    </Menu>
  </>
);

export default Header;
