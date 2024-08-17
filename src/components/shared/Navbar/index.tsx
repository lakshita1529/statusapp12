
import React from 'react';
import { NavbarContainer, NavbarContent, NavbarTitle, SignOutButton } from '../../shared/AppStyle';
import { handleSignOut } from '../../../lib/utils/firebase';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarTitle>Dashboard</NavbarTitle>
        <SignOutButton onClick={handleSignOut}>Log Out</SignOutButton>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
