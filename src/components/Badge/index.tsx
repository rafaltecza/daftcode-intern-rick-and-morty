import React from "react";
import {BadgeElement} from "./BadgeElements";

export interface BadgeProps {
    type?: string,
    content: number | string
}

const Badge = ({ type = "", content = 0}: BadgeProps) => {
    return (
        <BadgeElement className={"my-auto " + type}><h2 className={"mb-0"}>{content}</h2></BadgeElement>
    );
}

export default Badge;

