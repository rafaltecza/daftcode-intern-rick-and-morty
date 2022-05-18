import React from 'react';

const PageHome = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <div className={"card bg-animated-gradient-bb"}>
                <div className={"card-body"}>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <h1 className={"text-white"}>Home</h1>
                        </div>
                        <div className={"col-12"}>
                            <h4 className={"text-white"}>This view is not included.</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHome;
