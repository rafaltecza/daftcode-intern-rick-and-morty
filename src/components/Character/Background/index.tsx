import React from 'react';
import {CharacterBackgroundElement, CharacterBackgroundImageElement} from "./BackgroundElements";

interface ICharactersDemoProps {
    url: string
}

const CharacterBackground = (props: ICharactersDemoProps) => {
    const { url } = props;

    return (
        <CharacterBackgroundElement>
            <CharacterBackgroundImageElement src={url} alt={""}/>
        </CharacterBackgroundElement>
    );
};

export default CharacterBackground;
