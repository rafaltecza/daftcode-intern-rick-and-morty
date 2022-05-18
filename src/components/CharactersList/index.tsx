import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from "react";
import CharacterDemo from "../Character/Demo";
import useLocalStorage from "react-use-localstorage";
import Search from "../Search";
import Pagination from "../Pagination";
import {Loader} from "../Loader";

export enum CharactersType {
    ALL = 0,
    FAVOURITES = 1,
}

interface IRequiredCharactersProps {
    type: number
    updateCount: Dispatch<SetStateAction<number>>
    search?: string
    status?: string
    gender?: string
    species?: string
    pageNumber: number
    updatePageNumber: Dispatch<SetStateAction<number>>
}

const CharactersList = ({type, updateCount, search = "", status = "", gender = "", species = "", pageNumber, updatePageNumber}: IRequiredCharactersProps) => {
    const [isLoading, setIsLoading] = useState(true);

    const [data, setData] = useState({
        info: {
            count: 0,
            pages: 0,
            next: 0,
            prev: 0
        },
        results: []
    });

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {

        (async function () {
            switch (type) {
                case CharactersType.ALL:
                    await fetch(api).then((res) => res.json().then((myJson) => {
                        if (res.ok) {
                            setData(myJson)
                            updateCount(myJson['info']['count']);
                        } else {
                            setData({
                                info: {
                                    count: 1,
                                    pages: 1,
                                    next: 0,
                                    prev: 0
                                },
                                results: []
                            })
                        }
                        setIsLoading(false);
                    }).catch((error) => {}));
                    break;
                case CharactersType.FAVOURITES:
                    const items = JSON.parse(localStorage.getItem('favourites') as string);

                    if(!items) {
                        setIsLoading(false);
                        break;
                    }

                    const apiFavourites = "https://rickandmortyapi.com/api/character/[" + items + "]";
                    await fetch(apiFavourites).then((res) => res.json().then((myJson) => {
                        if (res.ok) {
                            setData({
                                info: {
                                    count: myJson.length,
                                    pages: 1,
                                    next: 0,
                                    prev: 0
                                },
                                results: myJson
                            });
                            updateCount(myJson.length);
                        } else {
                            setData({
                                info: {
                                    count: 1,
                                    pages: 1,
                                    next: 0,
                                    prev: 0
                                },
                                results: []
                            })
                        }
                        setIsLoading(false);
                    }).catch((error) => {}));
                }
        })();
    }, [api])

    let columnType = "col-3";
    switch (type) {
        case CharactersType.ALL:
            columnType = "col-6 col-md-4"
            break;
        case CharactersType.FAVOURITES:
            columnType = "col-6 col-md-4 col-lg-3"
            break;
    }

    return (
        <div>
            {isLoading ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                >
                    <Loader/>
                </div>
            ) : (
                <>
                    <div className={"row align-content-center"}>
                        {
                            data && data['results'].length > 0 && data['results'].map((item, index) => {
                                    return <div key={item["id"]} className={columnType + " my-2"}>
                                        <CharacterDemo id={item["id"]} name={item["name"]} image={item["image"]}/>
                                    </div>
                                }
                            )
                        }
                    </div>

                    <Pagination
                        info={data['info']}
                        pageNumber={pageNumber}
                        updatePageNumber={updatePageNumber}
                    />
                </>
            )}
        </div>
    )
}

export default CharactersList;
