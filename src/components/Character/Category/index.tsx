import React from 'react';
import {CharacterCategoryElement, CharacterCategoryTitleElement} from "./CategoryElements";
import Badge from "../../Badge";
import {TitleProps} from "../../Title";

interface ICharacterCategoryProps {
    content: string,
    count: number,
    backgroundStyle?: string,
}

const CharacterCategory = ({ content, count, backgroundStyle = "" }: ICharacterCategoryProps) => {
    return (
        <div className={"d-flex align-items-center mb-3"}>
            <CharacterCategoryTitleElement className={backgroundStyle + " me-3 mb-0"}>{ content } { count }</CharacterCategoryTitleElement>
        </div>
    );
}

export default CharacterCategory;
