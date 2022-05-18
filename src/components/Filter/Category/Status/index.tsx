import {Dispatch, SetStateAction} from "react";
import FilterButton from "../../Button";

interface IStatusProps {
    updateStatus: Dispatch<SetStateAction<string>>
    updatePageNumber: Dispatch<SetStateAction<number>>
}

const Status = ({ updateStatus, updatePageNumber }: IStatusProps) => {
    let status = ["Alive", "Dead", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne"
                > Status </button>
            </h2>
            <div
                id="collapseOne" className="accordion-collapse collapse show"
                aria-labelledby="headingOne" data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {status.map((item, index) => (
                        <FilterButton
                            key={index}
                            index={index}
                            name="status"
                            task={updateStatus}
                            updatePageNumber={updatePageNumber}
                            input={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Status;