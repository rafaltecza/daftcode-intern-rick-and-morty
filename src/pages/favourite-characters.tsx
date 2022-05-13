import React, {useEffect, useState} from 'react';
import CharacterDemo from "../components/Character/Demo";
import Characters from "../components/Characters/All";
import FavouritesCharacters, {CharactersType} from "../components/Characters/Favourites";

const PageFavouriteCharacters = () => {

    return (
        <div className={"container my-4"}
             style={{
                 display: 'flex',
                 justifyContent: 'center',
                 alignItems: 'center',
             }}
        >
            <FavouritesCharacters type={CharactersType.FAVOURITES}/>
        </div>
    );
};

export default PageFavouriteCharacters;
