import React, {useEffect, useState} from 'react';
import CharactersList, {CharactersType} from "../components/CharactersList";
import Title from "../components/Title";
import Search from "../components/Search";
import Filter from "../components/Filter";

const PageCharacters = () => {
    let [count, setCount] = useState(0);
    let [search, setSearch] = useState("");
    let [pageNumber, updatePageNumber] = useState(1);
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");

    return (
        <div className={"container my-4"} style={{
            minHeight: "90vh"
        }}>
            <div className={"row my-3 align-content-between"}>
                <div className={"col"}>
                    <Title content={"Characters"} badgeStyle={"bg-animated-gradient-bm"} count={count}/>
                </div>
                <div className={"col-auto"}>
                    <div>
                        <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
                    </div>
                </div>
            </div>

            <div className={"row"}>
                    <Filter
                        pageNumber={pageNumber}
                        updateStatus={updateStatus}
                        updateGender={updateGender}
                        updateSpecies={updateSpecies}
                        updatePageNumber={updatePageNumber}
                    />
                <div className={"col-12 col-lg-9"}>
                    <CharactersList type={CharactersType.ALL}
                                    updateCount={setCount}
                                    pageNumber={pageNumber}
                                    search={search}
                                    updatePageNumber={updatePageNumber}
                                    status={status}
                                    species={species}
                                    gender={gender}/>
                </div>
            </div>


        </div>
    );
};

export default PageCharacters;
