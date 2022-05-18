import React from "react";
import {SearchButton, SearchIcon, SearchInputElement} from "./SearchElements";
import {TextField} from "@mui/material";
import styled from "@emotion/styled";
import {FaSearch} from "react-icons/fa";

class Search extends React.Component<{ setSearch: any, updatePageNumber: any }> {
    render() {
        let {setSearch, updatePageNumber} = this.props;

        let searchBtn = (e: { preventDefault: () => void; }) => {
            e.preventDefault();
        };

        return (
            <form
                className={`d-flex flex-sm-row flex-column align-items-center justify-content-center gap-3`}
            >
                <SearchInputElement className={"form-control"}
                                 onChange={(e) => {
                                     updatePageNumber(1);
                                     setSearch(e.target.value);
                                 }}
                                 type="text"/>

                <SearchButton onClick={searchBtn}
                    className={`btn bg-animated-gradient-bb fs-7 button-square hover-effect`}>
                    <SearchIcon/>
                </SearchButton>
            </form>
        );


    }
}

export default Search;