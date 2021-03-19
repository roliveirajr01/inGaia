import React, { useState, Fragment } from "react";
import { ContainCard } from "./Style";
import LightBox from "../lightbox/lightbox"

const Cards = function(props) {
    const data = props;
    const [showInfo, setshowInfo] = useState(false)
    const buttonHandle = function() {
        setshowInfo(current => !current)
    }

    return (
        <Fragment>
            <ContainCard
                onClick={buttonHandle}
            >
            <img src={data.image} alt={data.name} />
            <div className="infos-card">
                <p>{data.name}</p>
                <span>{data.species}</span>
            </div>
            </ContainCard>
            { showInfo ? <LightBox data={data} statusLightbox={buttonHandle} /> : null }
        </Fragment>
      );
}

export default Cards;
