import React, {Dispatch, SetStateAction} from "react";
import {FilterButtonElement} from "./ButtonElements";

interface IFilterButtonProps {
    input: string
    task: Dispatch<SetStateAction<string>>
    updatePageNumber: Dispatch<SetStateAction<number>>
    index: number,
    name: string
}

const FilterButton = ({ input, task, updatePageNumber, index, name }: IFilterButtonProps) => {
    return (
        <FilterButtonElement>
            <input
                className="form-check-input x" type="radio"
                name={name} id={`${name}-${index}`}
            />
            <label
                onClick={(x) => {
                    task(input);
                    updatePageNumber(1);
                }}
                className="btn btn-outline-primary"
                htmlFor={`${name}-${index}`}
            > {input} </label>
        </FilterButtonElement>
    );
};

export default FilterButton;