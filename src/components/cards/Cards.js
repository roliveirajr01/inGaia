import React, { Component, Fragment } from 'react'
import {ContainCard} from './Style'
class Cards extends Component {
    render() {
        const data = this.props
        return (
            <ContainCard>
                <img src={data.image} />
                <div className="infos-card">
                    <p>{data.name}</p>
                    <span>{data.species}</span>
                </div>

            </ContainCard>
        )
    }
}

export default Cards