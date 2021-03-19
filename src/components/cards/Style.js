import styled from 'styled-components'

export const ContainCard = styled.div `
    max-width: 254px;
    position: relative;
    margin-bottom: 24px;
    border-radius: 8px;
    overflow: hidden;
    filter: grayscale(1);
    border: solid 3px transparent;

    &:nth-child(1) {
        margin-top: 47px;
    }

    &:hover {
        filter: grayscale(0);
        border: solid 3px #CBD736
    }

    img {
        position: relative;
        top: 0;
        left: 0;
        z-index: 1;
        display: block;
        width: 100%;
    }
    .infos-card {
        position: absolute;
        width: 100%;
        bottom: 0;
        background-color: #1B1B1B;
        color: var(--white);
        z-index: 2;
        padding: 7px 13px;

        p {
            font-weight: bold;
            font-size: 20px;
            margin: 0;
            line-height: 24px;
        }
        span {
            font-size: 12px;
        }
    }
`