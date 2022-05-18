import React from 'react';
import {Link} from "react-router-dom";
import {Favourite} from "../../Favourite";
import {CharacterBackground, CharacterCard, CharacterFavourite, CharacterTitle} from "./DemoElements";
import useImageLoader from "../../Image";

interface IRequiredCharacterDemoProps {
    id: number
}

interface IOptionalCharacterDemoProps {
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

interface ICharactersDemoProps
    extends IRequiredCharacterDemoProps,
        IOptionalCharacterDemoProps {}

const defaultProps: IOptionalCharacterDemoProps = {
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

const CharacterDemo = (props: ICharactersDemoProps) => {
    const { id, name, status, species, type, gender, origin_name, origin_url, location_name, location_url,
        image, episode, url, created } = props;
    const img = useImageLoader("images/loader.gif", image);
    return (
        <div className={"character-demo"} >
                <CharacterCard className={"card hover-effect bg-transparent border-0 p-0"}>
                    <div className={"position-relative"}>
                            <div className={"card-body text-center"}>
                                <CharacterFavourite className={"hover-effect"} >
                                    <Favourite id={String(id)}/>
                                </CharacterFavourite>
                                <Link to={"../character/" + id}>
                                    <CharacterBackground className={"character-bg"} src={img[0]} alt={""}/>
                                    <CharacterTitle>{name}</CharacterTitle>
                                </Link>

                            </div>
                    </div>

                </CharacterCard>

        </div>
    );
};

CharacterDemo.defaultProps = defaultProps;

export default CharacterDemo;
