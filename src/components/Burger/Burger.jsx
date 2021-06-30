import React from 'react';
import { StyledBurger } from './Burger.styled';

function BurgerMenu({ open, setIsOpen, ...otherProps }) {
  const isExpanded = open ? true : false;
  return (

    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setIsOpen(prev => !prev)}
      {...otherProps}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledBurger>


  )
}

export default BurgerMenu;
