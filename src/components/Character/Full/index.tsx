import React from 'react';
import CharacterParameter from "./Parameter";

interface IRequiredCharacterFullProps {
    id: number
}

interface IOptionalCharacterFullProps {
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin_name: string,
    origin_url: string,
    location_name: string,
    location_url: string,
    image: string,
    episode: string[],
    url: string,
    created: string,
}

interface ICharactersFullProps
    extends IRequiredCharacterFullProps,
        IOptionalCharacterFullProps {}

const defaultProps: IOptionalCharacterFullProps = {
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
};

const CharacterFull = (props: ICharactersFullProps) => {
    const { id, name, status, species, type, gender, origin_name, origin_url, location_name, location_url,
        image, episode, url, created } = props;

    return (
        <>
            <div className={"card"}>
                <div className={"card-body"}>
                    <h3>{name}</h3>

                    <div className={"row"}>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Id"} parameter={id}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Status"} parameter={status}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Species"} parameter={species}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Gender"} parameter={gender}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Origin"} parameter={origin_name}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Origin"} parameter={origin_url}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Image"} parameter={image}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Episode"} parameter={episode}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Url"} parameter={url}/>
                        </div>
                        <div className={"col-3"}>
                            <CharacterParameter icon={"I"} label={"Created"} parameter={created}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

CharacterFull.defaultProps = defaultProps;

export default CharacterFull;
