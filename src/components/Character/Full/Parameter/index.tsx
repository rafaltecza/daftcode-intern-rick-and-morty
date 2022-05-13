import React from "react";

interface ICharactersParameterProps {
    icon: string,
    label?: string,
    parameter: string | number | string[]
}

const CharacterParameter = ({icon, label = "", parameter}: ICharactersParameterProps) => {
    return (
        <>
            <label>{label}</label>
            <div className={"card"}>
                <div className={"card-body"}>
                    <div className={"row justify-content-between"}>
                        <div className={"col-2"}>
                            {icon}
                        </div>
                        <div className={"col-auto"}>
                            {parameter}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};



export default CharacterParameter;
