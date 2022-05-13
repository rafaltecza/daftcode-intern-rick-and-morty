import React, {useEffect, useState} from "react";
import CharacterDemo from "../../Character/Demo";

function Characters() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = () => {
        fetch('https://rickandmortyapi.com/api/character'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson.results);
                setData(myJson.results);
                setIsLoading(false);
            });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {isLoading ? (
                <div className='spinner-border text-primary' role='status'>
                    {' '}
                    <span className='sr-only'>Loading...</span>{' '}
                </div>
            ) : (
                <>
                    <div className={"row my-3"}>
                        <div className={"col-12"}>
                            <h1>Characters { data.length }</h1>
                        </div>
                    </div>

                    <div className={"row"}>
                        {
                            data && data.length > 0 && data.map((item, index) => {
                                return <div key={item["id"]} className={"col-4 my-2"}>
                                    <CharacterDemo id={item["id"]} name={item["name"]} image={item["image"]}/>
                                </div>
                            }

                            )
                        }
                    </div>
                </>
            )}
        </div>
    );
}

export default Characters;
