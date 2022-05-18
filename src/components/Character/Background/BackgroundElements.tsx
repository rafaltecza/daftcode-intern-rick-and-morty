import styled from "styled-components";

export const CharacterBackgroundElement = styled.div`
    position: relative;
`;

export const CharacterBackgroundImageElement = styled.img`
    position: absolute;
    width: 120%;
    filter: blur(100px);
    left: -10vw;
    top: -200px;
    z-index: -1;
`;