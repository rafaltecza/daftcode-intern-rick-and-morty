import styled from "styled-components";
import {FaSearch} from "react-icons/fa";

export const SearchInputElement = styled.input`
  background-color: rgba(255,255,255,.9);
  border-radius: 8px;
  box-shadow: 1px 3px 9px rgba($color: #000000, $alpha: 0.25);
  padding: 10px 15px;
  &:focus { outline: none; }
`;

export const SearchIcon = styled(FaSearch)`
    color: white;
`;

export const SearchButton = styled.button`
    color: white;
    border-radius: 8px;
`;