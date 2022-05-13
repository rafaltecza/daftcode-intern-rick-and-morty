import React, {useRef} from "react";
import useLocalStorage from "react-use-localstorage";
import {Button} from "react-bootstrap";

export interface FavouriteProps {
    id: string
}

export const Favourite = ({
                              id,
                          }: FavouriteProps): JSX.Element | null => {
    const [storageItem, setStorageItem] = useLocalStorage(
        'DFX-favourites',
        JSON.stringify([]),
    )
    const storagedArray = useRef(JSON.parse(storageItem))
    const isFavourited = storagedArray.current.includes(id)

    const handleToggleFavourite = (): void => {
        if (!isFavourited) {
            storagedArray.current.push(id)
            setStorageItem(JSON.stringify(storagedArray.current))
        } else {
            const indexFavouritedId = storagedArray.current.indexOf(id)
            storagedArray.current.splice(indexFavouritedId, 1)
            setStorageItem(JSON.stringify(storagedArray.current))
        }
    }
    return (

        <div className={"favourite"}>
            <div className={"favourite-icon"}>
                <div className="Fav">
                    <input key={id} id={String("fav-checkbox" + id)} className="Fav-checkbox" type="checkbox" onClick={handleToggleFavourite} checked={isFavourited}/>
                    <label htmlFor={String("fav-checkbox" + id)} className="Fav-label"><span
                        className="Fav-label-text">Favourite</span></label>
                    <div className="Fav-bloom"/>
                    <div className="Fav-sparkle">
                        <div className="Fav-sparkle-line"/>
                        <div className="Fav-sparkle-line"/>
                        <div className="Fav-sparkle-line"/>
                        <div className="Fav-sparkle-line"/>
                        <div className="Fav-sparkle-line"/>
                    </div>
                    <svg className="Fav-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                        <title>Star Icon</title>
                        <path
                            d="M36.14,3.09l5.42,17.78H59.66a4.39,4.39,0,0,1,2.62,7.87L47.48,40.14,53,58.3a4.34,4.34,0,0,1-6.77,4.78L32,52l-14.26,11A4.34,4.34,0,0,1,11,58.27l5.55-18.13L1.72,28.75a4.39,4.39,0,0,1,2.62-7.87h18.1L27.86,3.09A4.32,4.32,0,0,1,36.14,3.09Z"/>
                    </svg>
                </div>

            </div>
        </div>


    )
}
