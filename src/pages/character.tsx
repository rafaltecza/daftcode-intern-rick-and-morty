import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import CharacterFull from "../components/Character/Full";

interface RouteParams {
    id: string
}

const PageCharacter = () => {

    const { id } = useParams<{id: string}>();

    const [data, setData] = useState({
        id: 0,
        name: "Unknown",
        status: "Unknown",
        species: "Unknown",
        type: "Unknown",
        gender: "Unknown",
        origin_name: "Unknown",
        origin_url: "Unknown",
        location_name: "Unknown",
        location_url: "Unknown",
        image: "Unknown",
        episode: ["Unknown"],
        url: "Unknown",
        created: "Unknown",
    });
    const [isLoading, setIsLoading] = useState(true);


    const getData = () => {
        fetch('https://rickandmortyapi.com/api/character/' + id
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getData()

    }, [data])



    return (
        <div>
            { isLoading ? (
                    <div className='spinner-border text-primary' role='status'>
                        {' '}
                        <span className='sr-only'>Loading...</span>{' '}
                    </div>
                ) : (
                    <div className={"container my-4"}>
                        <div className={"row my-3"}>
                            <div className={"col-12"}>
                                <h1>Character</h1>
                            </div>
                        </div>

                        <div className={"row"}>
                            <CharacterFull id={data['id']}
                                           name={data['name']}
                                           status={data['status']}
                                           species={data['species']}
                                           type={data['type']}
                                           gender={data['gender']}
                                           origin_name={data['origin_name']}
                                           origin_url={data['origin_url']}
                                           location_name={data['location_name']}
                                           location_url={data['location_url']}
                                           image={data['image']}
                                           episode={data['episode']}
                                           url={data['url']}
                                           created={data['created']}/>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default PageCharacter;
