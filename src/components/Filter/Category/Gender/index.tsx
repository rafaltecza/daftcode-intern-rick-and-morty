import {Dispatch, SetStateAction} from "react";
import FilterButton from "../../Button";

interface ISpeciesProps {
    updateSpecies: Dispatch<SetStateAction<string>>
    updatePageNumber: Dispatch<SetStateAction<number>>
}
const Species = ({ updateSpecies, updatePageNumber }: ISpeciesProps) => {
    let species = [
        "Human", "Alien", "Humanoid",
        "Poopybutthole", "Mythological", "Unknown",
        "Animal", "Disease","Robot","Cronenberg","Planet",
    ];

    return (
        <div className="accordion-item ">
            <h2 className="accordion-header" id="headingTwo">
                <button
                    className="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo"
                > Species </button>
            </h2>
            <div
                id="collapseTwo" className="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {species.map((item, index) => {
                        return (
                            <FilterButton
                                name="species" index={index} key={index}
                                updatePageNumber={updatePageNumber}
                                task={updateSpecies} input={item}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )}

export default Species;