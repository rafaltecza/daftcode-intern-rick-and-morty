import React, {Dispatch, SetStateAction} from "react";
import Category from "./Category";
import {CleanButtonElement, CleanIconElement} from "./FilterElements";

interface IFilterProps {
    pageNumber: number
    updatePageNumber: Dispatch<SetStateAction<number>>
    updateStatus: Dispatch<SetStateAction<string>>
    updateGender: Dispatch<SetStateAction<string>>
    updateSpecies: Dispatch<SetStateAction<string>>
}

const Filter = ({ pageNumber, updatePageNumber, updateStatus, updateGender, updateSpecies }: IFilterProps) => {

    let clear = () => {
        updateStatus("");
        updateGender("");
        updateSpecies("");
        updatePageNumber(1);
        window.location.reload();
    };

    let species = [
        "Human", "Alien", "Humanoid",
        "Poopybutthole", "Mythological", "Unknown",
        "Animal", "Disease","Robot","Cronenberg","Planet",
    ];
    let status = ["Alive", "Dead", "Unknown"];
    let genders = ["Female", "Male", "Genderless", "Unknown"];

    return (
        <div className="col-lg-3 col-12 mb-5 mt-4">
            <div className={"row justify-content-between align-items-center mb-3"}>
                <div className={"col-auto"}>
                    <h3 className="text-white">Filters</h3>
                </div>
                <div className={"col-auto"}>
                <CleanButtonElement onClick={clear} className={`btn bg-animated-gradient-bb fs-7 button-square hover-effect`}>
                    <CleanIconElement/>
                </CleanButtonElement>
                </div>
            </div>
            <div>
                <Category id={0} name={"status"} elements={status} updateAction={updateStatus} updatePageNumber={updatePageNumber}/>
                <Category id={1} name={"species"} elements={species} updateAction={updateSpecies} updatePageNumber={updatePageNumber}/>
                <Category id={2} name={"gender"} elements={genders} updateAction={updateGender} updatePageNumber={updatePageNumber}/>
            </div>
        </div>
    );
};

export default Filter;