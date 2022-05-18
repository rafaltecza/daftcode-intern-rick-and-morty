import React from 'react';
import {CharacterTitleElement, CharacterTitleTextElement} from "./TitleElements";

interface ICharactersDemoProps {
    name: string
}

const CharacterTitle = (props: ICharactersDemoProps) => {
    const { name } = props;

    return (
        <div>
            <CharacterTitleElement className={"d-flex mt-4 mb-2"}>
                <CharacterTitleTextElement className={"bg-animated-gradient-bp shadow-sm"}>{ name }</CharacterTitleTextElement>
            </CharacterTitleElement>
        </div>
    );
};

export default CharacterTitle;
