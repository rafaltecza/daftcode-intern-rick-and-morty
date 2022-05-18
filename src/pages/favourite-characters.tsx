import React, {useEffect, useState} from 'react';
import CharactersList, {CharactersType} from "../components/CharactersList";
import Title from "../components/Title";

const PageFavouriteCharacters = () => {
    let [count, setCount] = useState(0);
    let [pageNumber, updatePageNumber] = useState(1);

    return (
        <div className={"container my-4"} style={{
            minHeight: "90vh"
        }}>
            <div className={"row my-3 align-content-between"}>
                <div className={"col"}>
                    <Title content={"Favourite Characters"} badgeStyle={"bg-animated-gradient-gy"} count={count}/>
                </div>
            </div>
            <CharactersList type={CharactersType.FAVOURITES}
                            updateCount={setCount}
                            pageNumber={pageNumber}
                            updatePageNumber={updatePageNumber}/>
        </div>
    );
};

export default PageFavouriteCharacters;
