import React from 'react';
import {Link} from "react-router-dom";
import {Favourite} from "../../Favourite";

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

    return (
        <div>
            <Favourite id={String(id)}/>

            <Link to={"../character/" + id}>
                <div className={"card"}>
                    <div className={"card-body text-center"}>



                        <img src={image} alt={""}/>
                        <h3>{name}</h3>
                    </div>
                </div>
            </Link>

        </div>
    );
};

CharacterDemo.defaultProps = defaultProps;

export default CharacterDemo;
