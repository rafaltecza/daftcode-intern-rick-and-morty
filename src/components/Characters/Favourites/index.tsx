import React, {useEffect, useRef, useState} from "react";
import CharacterDemo from "../../Character/Demo";
import useLocalStorage from "react-use-localstorage";

export enum CharactersType {
    ALL = 0,
    FAVOURITES = 1,
}

interface IRequiredCharactersProps {
    type: number
}

const FavouritesCharacters = ({type}: IRequiredCharactersProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    function getAllData() {
        fetch('https://rickandmortyapi.com/api/character', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson.results);
                setData(myJson.results);
                setIsLoading(false);
            });
    }

    const getFavouritesData = () => {

        fetch('https://rickandmortyapi.com/api/character', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson.results);

                const items = JSON.parse(localStorage.getItem('DFX-favourites') as string);
                if (items) {

                    let newArray = [{}];
                    newArray = [];
                    const deleteItem = (id: number) => {
                        console.log("ROBIE " + id);
                        console.log(myJson.results)
                        const test = myJson.results;
                        test.map((item: any) => {
                            if(item["id"] == id) {
                                newArray.push(item)
                            }
                        })
                    }

                    items.map((item: number) => {
                        deleteItem(item);
                    })

                    const json = JSON.stringify(newArray);
                    setData(JSON.parse(json));
                    console.log("TEST");
                    console.log(json);

                }

                setIsLoading(false);
            });


    }

    useEffect(() => {
        switch (type) {
            case CharactersType.ALL:
                getAllData();
                break;
            case CharactersType.FAVOURITES:
                getFavouritesData();
                break;
        }
    }, [])

    return (
        <div>
            {isLoading ? (
                <div className='spinner-border text-primary' role='status'>
                    {' '}
                    <span className='sr-only'>Loading...</span>{' '}
                </div>
            ) : (
                <>
                    <div className={"row my-3"}>
                        <div className={"col-12"}>
                            <h1>Characters {data.length}</h1>
                        </div>
                    </div>

                    <div className={"row"}>
                        {
                            data && data.length > 0 && data.map((item, index) => {
                                    return <div key={item["id"]} className={"col-4 my-2"}>
                                        <CharacterDemo id={item["id"]} name={item["name"]} image={item["image"]}/>
                                    </div>
                                }
                            )
                        }
                    </div>
                </>
            )}
        </div>
    )
}

export default FavouritesCharacters;
