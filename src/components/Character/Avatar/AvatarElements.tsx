import styled from "styled-components";

export const CharacterAvatarElement = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin-top: 20%;
  margin-bottom: 20%;

  :after {
    content: "";
    background-image: radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 0%, rgb(144, 199, 74) 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const CharacterAvatarImageElement = styled.img`
  min-width: 100%;
  min-height: 100%;
  vertical-align: middle;
  opacity: .9;
`;


export const CharacterAvatarVideoElement = styled.video`
  position: absolute;
  top: -10%;
  z-index: -1;
`;


