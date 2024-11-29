import React from 'react'
import * as jnb from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
export const CommonPageHeading = (props) => {
    const { heading, navigateData, path } = props;

    let navigate = useNavigate();
    return (
        <jnb.Container>
            <jnb.Row >
                <jnb.Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="page-titlespacing d-flex justify-content-between px-0">
                    <div className="inner-herbpage-service-title1">
                        <h1>{heading} </h1>
                    </div>
                    <div className="text-right  mb-4">
                        {path !== undefined ?
                            <button className="btn btn-secondary btn-sm" onClick={() => { navigate(path, { state: { data: navigateData } }) }}>Back</button> :
                            <button className="btn btn-secondary btn-sm" onClick={() => { navigate(-1) }}>Back</button>
                        }


                    </div>
                </jnb.Col>
            </jnb.Row>
        </jnb.Container>
    )

}
