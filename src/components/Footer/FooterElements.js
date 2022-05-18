import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

export const Footer = styled.footer`
  background: #000;
  color: white;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const FooterLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  
  img {
    margin-right: 10px;
    width: 50px;
    height: 50px;
  }
  
  &:hover {
    color: inherit;
  }

`;

export const FooterText = styled.p`
  color: #fff;
  font-size: 12px;
`;

export const FooterColumn = styled.div`
  text-decoration: none;
`;

export const FooterUl = styled.ul`
  list-style:none;
  padding:0;
  margin:0;
`;