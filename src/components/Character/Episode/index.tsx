import React, {useEffect, useState} from 'react';
import {
    CharacterEpisodeElement,
    CharacterEpisodeLive,
    CharacterEpisodeParameter,
    CharacterEpisodeTitle
} from "./EpisodeElements";
import {Loader} from "../../Loader";

interface ICharacterEpisodeProps {
    url: string
}

const CharacterEpisode = (props: ICharacterEpisodeProps) => {
    const { url } = props;

    const [data, setData] =  useState({
        id: 0,
        name: "Unknown",
        air_date: "Unknown",
        episode: "Unknown",
        characters: "Unknown",
        url: "Unknown",
        created: "Unknown",
    });
    const [isLoading, setIsLoading] = useState(true);

    const getData = () => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
                setIsLoading(false);
            });
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            { isLoading ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '150px'
                    }}
                >
                    <Loader/>
                </div>
                ) : (
                    <div className={"me-2"}>
                        <CharacterEpisodeElement className={"card"}>
                            <div className={"card-body"}>
                                <div className={"d-flex"}>
                                    <CharacterEpisodeTitle className={"px-3 py-2 text-white"}>{ data['name'] }</CharacterEpisodeTitle>
                                </div>
                                <CharacterEpisodeParameter>
                                    <div className={"d-flex"}>
                                        <CharacterEpisodeLive className={"px-3 text-white"}>{ data['episode'] }</CharacterEpisodeLive>
                                    </div>
                                </CharacterEpisodeParameter>
                                <CharacterEpisodeParameter>{ data['air_date'] }</CharacterEpisodeParameter>
                            </div>
                        </CharacterEpisodeElement>
                    </div>
                )
            }
        </div>
    )
};

export default CharacterEpisode;
