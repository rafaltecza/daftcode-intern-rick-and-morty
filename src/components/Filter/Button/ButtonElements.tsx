import styled from "styled-components";
import {FaSearch} from "react-icons/fa";

export const FilterButtonElement = styled.div`
  input[type="radio"] + label {
    background-color:#add8e6;
  }

  input[type="radio"]:checked + label {
    background-color: #90ee90;
  }
  
  input[type="radio"] { 
    display: none; 
    position: absolute;
  }
`;
