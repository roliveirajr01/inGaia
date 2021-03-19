import styled from 'styled-components'

export const ContainerThumbs = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(49, 49, 49, 0.9);
    z-index: 3;
    overflow: scroll;
`

export const ContainerInfos = styled.div `
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    flex-flow: wrap;
`

export const InternalCard = styled.div `
    max-width: 258px;
    position: relative;
    img {
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

        p {
            font-weight: bold;
            font-size: 20px;
            margin: 0;
            line-height: 24px;
            padding: 7px 13px;
            padding-bottom: 0;
        }
        span {
            font-size: 12px;
            padding: 7px 13px;
            padding-top: 0;
            display: block;
        }
    }
`

export const DescriptionPerson = styled.div `

`

export const SectionInfos = styled.div `
    .title-description {
        color: #CBD736;
        letter-spacing: 0.65em;
        margin-top: 30px;
    }
`

export const ButtonClose = styled.div `
    font-size: 50px;
    color: var(--white);
    transform: rotateX(38deg);
    margin-left: 30px;
`