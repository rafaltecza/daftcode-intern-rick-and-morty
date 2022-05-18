import {Dispatch, SetStateAction} from "react";
import FilterButton from "../Button";
import { Accordion } from "react-bootstrap";

interface ICategoryProps {
    id: number,
    name: string,
    elements: string[],
    updateAction: Dispatch<SetStateAction<string>>,
    updatePageNumber: Dispatch<SetStateAction<number>>
}
const Category = ({ id, name, elements, updateAction, updatePageNumber }: ICategoryProps) => {

    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item className={"bg-dark " + (id === 0 ? ("first") : (""))} eventKey={String(id)}>
                <Accordion.Header>{ name[0].toUpperCase() + name.slice(1) }</Accordion.Header>
                <Accordion.Body className={"d-flex flex-wrap gap-3"}>
                    {elements.map((item, index) => {
                        return (
                            <FilterButton
                                name={name[0].toUpperCase() + name.slice(1)} index={index} key={index}
                                updatePageNumber={updatePageNumber}
                                task={updateAction} input={item}
                            />
                        );
                    })}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )}

export default Category;