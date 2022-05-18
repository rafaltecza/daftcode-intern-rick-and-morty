import React from 'react';
import {Favourite} from "../../Favourite";
import {CharacterFavouriteElement} from "./FavouriteElements"

interface ICharacterFavouriteProps {
    id: number
}

const CharacterFavourite = (props: ICharacterFavouriteProps) => {
    const { id } = props;

    return (
        <div>
            <CharacterFavouriteElement className={"hover-effect"} >
                <Favourite id={String(id)}/>
            </CharacterFavouriteElement>
        </div>
    );
};

export default CharacterFavourite;
