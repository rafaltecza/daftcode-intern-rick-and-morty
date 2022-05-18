import React from 'react';
import {Footer, FooterColumn, FooterLink, FooterText, FooterUl} from "./FooterElements";

const Index = () => {
    return (
        <Footer>
            <div className={"row mb-2"}>
                <FooterColumn className={"col-sm-3 col-md-6"}>
                    <h6 className={"my-3"}><b>Navigation</b></h6>
                    <FooterUl>
                        <li>
                            <FooterLink to="/characters">
                                <FooterText>Characters</FooterText>
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/favourite-characters">
                                <FooterText>Favourites</FooterText>
                            </FooterLink>
                        </li>
                    </FooterUl>
                </FooterColumn>

                <FooterColumn className={"col-sm-3 col-md-6"}>
                    <h6 className={"my-3"}><b>Repo</b></h6>
                    <FooterUl>
                        <li>
                            <a href="https://github.com/rafaltecza/daftcode-intern-rick-and-morty">
                                <FooterText>Github</FooterText>
                            </a>
                        </li>
                    </FooterUl>
                </FooterColumn>

            </div>
            <hr/>
            <div className={"row"}>
                <div className={"col-sm-12 col-md-4"}>
                    <FooterLink to="/">
                        <h3>Rick and Morty</h3>
                    </FooterLink>
                </div>
                <div className={"col-sm-12 col-md-8"}>
                    <FooterText>
                        ©{(new Date().getFullYear())} Rafał Tęcza. All Rights Reserved. A project made for recruitment in the <b>DaftCode</b> group in 2022.
                    </FooterText>
                </div>
            </div>
        </Footer>
    );
};

export default Index;