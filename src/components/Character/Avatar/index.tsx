import React from 'react';
import {CharacterAvatarElement, CharacterAvatarImageElement, CharacterAvatarVideoElement} from "./AvatarElements";

interface ICharacterAvatarProps {
    url: string
}

const CharacterAvatar = (props: ICharacterAvatarProps) => {
    const { url } = props;

    return (
        <div className={"position-relative d-flex justify-content-center align-content-center"}>
            <CharacterAvatarVideoElement aria-hidden="true" loop autoPlay muted>
                <source src={"/images/portal.webm"} type="video/webm;"/>
            </CharacterAvatarVideoElement>
            <CharacterAvatarElement className={""}>
                <CharacterAvatarImageElement src={url}/>
            </CharacterAvatarElement>
        </div>
    );
};

export default CharacterAvatar;
