import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Carousel from "react-multi-carousel";
import CharacterBackground from "../components/Character/Background";
import CharacterTitle from "../components/Character/Title";
import CharacterParameter from "../components/Character/Parameter";
import CharacterCategory from "../components/Character/Category";
import CharacterAvatar from "../components/Character/Avatar";
import CharacterEpisode from "../components/Character/Episode";
import {Loader} from "../components/Loader";
import {FaQuestion, FaMale, FaFemale, FaGenderless, FaDisease, FaRobot, FaBookDead, FaHeart} from "react-icons/fa";
import {ImEarth} from "react-icons/im";
import {BiPlanet} from "react-icons/bi";
import {RiAliensFill} from "react-icons/ri"
import {GiFishMonster, GiAlienBug, GiEvilBook, GiWolfHowl, GiMonsterGrasp} from "react-icons/gi"
import CharacterSubtitle from "../components/Character/Subtitle";
import CharacterFavourite from "../components/Character/Favourite";

interface RouteParams {
    id: string
}

const PageCharacter = () => {

    const { id } = useParams<{id: string}>();

    const [data, setData] = useState({
        id: 0,
        name: "Unknown",
        status: "Unknown",
        species: "Unknown",
        type: "Unknown",
        gender: "Unknown",
        origin_name: "Unknown",
        origin_url: "Unknown",
        location_name: "Unknown",
        location_url: "Unknown",
        image: "Unknown",
        episode: ["Unknown"],
        url: "Unknown",
        created: "Unknown",
    });
    const [isLoading, setIsLoading] = useState(true);


    const getData = () => {
        fetch('https://rickandmortyapi.com/api/character/' + id
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getData()

    }, [data])

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    let genderIcon;
    switch(data['gender']) {
        case "Male":
            genderIcon = <FaMale/>
            break;
        case "Female":
            genderIcon = <FaFemale/>
            break;
        case "Genderless":
            genderIcon = <FaGenderless/>
            break;
        case "unknown":
            genderIcon = <FaQuestion/>
            break;
    }

    let speciesIcon;
    switch(data['species']) {
        case "Human":
            speciesIcon = <ImEarth/>
            break;
        case "Alien":
            speciesIcon = <RiAliensFill/>
            break;
        case "Humanoid":
            speciesIcon = <GiFishMonster/>
            break;
        case "Poopybutthole":
            speciesIcon = <GiAlienBug/>
            break;
        case "Mythological":
            speciesIcon = <GiEvilBook/>
            break;
        case "Unknown":
            speciesIcon = <FaQuestion/>
            break;
        case "Animal":
            speciesIcon = <GiWolfHowl/>
            break;
        case "Disease":
            speciesIcon = <FaDisease/>
            break;
        case "Robot":
            speciesIcon = <FaRobot/>
            break;
        case "Cronenberg":
            speciesIcon = <GiMonsterGrasp/>
            break;
        case "Planet":
            speciesIcon = <BiPlanet/>
            break;
    }

    let statusIcon;
    switch(data['status']) {
        case "Alive":
            statusIcon = <FaHeart/>
            break;
        case "Dead":
            statusIcon = <FaBookDead/>
            break;
        case "unknown":
            statusIcon = <FaQuestion/>
            break;
    }

    let subtitle;
    if(data['type'].length > 0) {
        subtitle = <CharacterSubtitle name={data['type']}/>
    }

    return (
        <div>
            { isLoading ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '90vh'
                    }}
                >
                    <Loader/>
                </div>
                ) : (
                    <div style={{
                        minHeight: "140vh"
                    }}>
                        <CharacterBackground url={data['image']}/>

                        <div className={"container my-4"}>
                            <div className={"row align-content-center justify-content-center align-items-center"}>
                                <div className={"col-12 col-lg-6"}>
                                    <CharacterAvatar url={data['image']}/>
                                </div>
                                <div className={"col-12 col-lg-6"}>
                                    <div className={"d-flex align-items-center"} style={{
                                        columnGap: "20px"
                                    }}>
                                        <CharacterTitle name={data['name']}/>
                                        <CharacterFavourite id={Number(id)}/>
                                    </div>
                                    { subtitle }

                                    <div className={"row"}>
                                        <CharacterParameter icon={statusIcon} parameter={data['status']}/>
                                        <CharacterParameter icon={speciesIcon} parameter={data['species']}/>
                                        <CharacterParameter icon={genderIcon} parameter={data['gender']}/>
                                        <CharacterParameter icon={"X"} parameter={data['origin_name']}/>
                                        <CharacterParameter icon={"X"} parameter={data['location_name']}/>
                                    </div>
                                </div>
                            </div>

                            <div className={"row mt-5 mt-lg-3"}>
                                <div className={"col-auto"}>
                                    <CharacterCategory content={"Episodes"} count={data['episode'].length}
                                                       backgroundStyle={"bg-animated-gradient-gy"}/>
                                </div>
                            </div>

                            <div className={"mb-5"}>
                                <Carousel responsive={responsive}
                                          swipeable={true}
                                          draggable={true}
                                          showDots={false}
                                          ssr={true}
                                          infinite={false}
                                          keyBoardControl={true}
                                          containerClass="carousel-container"
                                          itemClass="carousel-item-padding-40-px">
                                    { data['episode'].map((item, index) => {
                                        return <CharacterEpisode url={item}/>
                                    })
                                    }
                                </Carousel>
                            </div>

                        </div>
                    </div>
                )}
        </div>
    );
}

export default PageCharacter;
