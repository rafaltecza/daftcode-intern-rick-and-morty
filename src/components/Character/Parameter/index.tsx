import React from "react";
import {CharacterParameterCardElement} from "./ParameterElements";

interface ICharactersParameterProps {
    icon: any,
    label?: string,
    parameter: string
}

const CharacterParameter = ({icon, label = "", parameter}: ICharactersParameterProps) => {

    if(parameter) {
        return (
            <div className={"col-6"}>
                <label>{label}</label>
                <CharacterParameterCardElement className={"card shadow-sm"}>
                    <div className={"card-body my-2 mx-2"}>
                        <div className={"row justify-content-between align-items-center"}>
                            <div className={"col-2"}>
                                <h2 className={""}>{icon}</h2>
                            </div>
                            <div className={"col-auto"}>
                                <h5 className={""}>{parameter[0].toUpperCase() + parameter.slice(1)}</h5>
                            </div>
                        </div>
                    </div>
                </CharacterParameterCardElement>
            </div>
        );
    } else {
        return(<></>)
    }


};



export default CharacterParameter;
