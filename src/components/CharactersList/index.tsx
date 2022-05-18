import React, {useEffect, useRef, useState} from "react";
import CharacterDemo from "../Character/Demo";
import useLocalStorage from "react-use-localstorage";
import Search from "../Search";
import Pagination from "../Pagination";

export enum CharactersType {
    ALL = 0,
    FAVOURITES = 1,
}

interface IRequiredCharactersProps {
    type: number
}

const Characters = ({type}: IRequiredCharactersProps) => {
    const [isLoading, setIsLoading] = useState(true);
    let [pageNumber, updatePageNumber] = useState(1);
    let [search, setSearch] = useState("");


    const [data, setData] = useState({
        info: {
            count: 0,
            pages: 0,
            next: 0,
            prev: 0
        },
        results: []
    });


    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;


    useEffect(() => {


        switch (type) {
            case CharactersType.ALL:
                (async function () {
                    let data = await fetch(api).then((res) => res.json());
                    setData(data);
                    setIsLoading(false);
                })();
                break;
            case CharactersType.FAVOURITES:
                getFavouritesData();
                break;
        }

    }, [api])

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

    return (
        <div>
            {isLoading ? (
                <div className='spinner-border text-primary' role='status'>
                    {' '}
                    <span className='sr-only'>Loading...</span>{' '}
                </div>
            ) : (
                <>
                    <div className={"row my-3 align-content-between"}>
                        <div className={"col"}>
                            <h1>Characters { data['info']['count'] }</h1>
                        </div>
                        <div className={"col-auto"}>
                            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
                        </div>
                    </div>


                    <div className={"row"}>
                        {
                            data && data['results'].length > 0 && data['results'].map((item, index) => {
                                    return <div key={item["id"]} className={"col-4 my-2"}>
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

export default Characters;
