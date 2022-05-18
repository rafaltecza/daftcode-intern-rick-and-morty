import React from 'react';
import {CharacterSubTitleElement, CharacterSubTitleTextElement} from "./SubtitleElements";

interface ICharactersDemoProps {
    name: string
}

const CharacterSubtitle = (props: ICharactersDemoProps) => {
    const { name } = props;

    return (
        <div>
            <CharacterSubTitleElement className={"d-flex mb-2"}>
                <CharacterSubTitleTextElement>{ name }</CharacterSubTitleTextElement>
            </CharacterSubTitleElement>
        </div>
    );
};

export default CharacterSubtitle;
