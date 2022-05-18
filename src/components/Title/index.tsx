import React from "react";
import {TitleElement} from "./TitleElements";
import Badge from "../Badge";

export interface TitleProps {
    content: string,
    badgeStyle: string,
    count?: number
}

const Title = ({ content, badgeStyle, count = 0}: TitleProps) => {
    const badge = count !== -1 ? (
        <Badge type={String(badgeStyle + " text-white")} content={count}/>
    ) : ("");
    return (
        <div className={"d-flex"}>
            <TitleElement className={"me-3"}>{ content }</TitleElement>
            {badge}
        </div>
    );
}

export default Title;

