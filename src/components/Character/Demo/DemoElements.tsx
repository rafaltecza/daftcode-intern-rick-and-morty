import styled from "styled-components";

export const CharacterTitle = styled.h4`
  position: absolute;
  bottom: 5%;
  right: 7%;
  background-color: rgb(14, 17, 22, 0.75);
  border-radius: 12px;
  padding: 8px;
  text-decoration: none;
  color: white;
  line-height: 1.5em;
  max-height: 3.4em;
  min-height: 1.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 60%;
`;

export const CharacterCard = styled.div`
  border-radius: 12px;
  overflow: auto;

`;

export const CharacterBackground = styled.img`
  z-index: -1;
  width: 100%;
  border-radius: 12px;
`;

export const CharacterFavourite = styled.div`
    position: absolute;
    left: 8%;
    bottom: 7.5%;
    z-index: 10;
    background-color: rgb(14, 17, 22, .75);
    border-radius: 50%;
`;