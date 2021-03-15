import styled from 'styled-components'

export const ContainerThumbs = styled.div `
    .top-thumb {
        padding: 2rem 0px;
        display: flex;
        flex-flow: wrap;
        justify-content: center;
    }

    .description-thumb {
        background-color: var(--white);
        max-height: 68px;                                                                                                                   
        overflow: hidden;
        transition: max-height .3s ease;
        &.show {
            max-height: 128px;
            transition: max-height .3s ease;
        }
    }

    h3 {
        text-align: center;
        color: var(--white);
        font-weight: 300;
        font-size: 1.6rem;
        max-width: 80%;
        margin-bottom: 0;
    }

    .button {
        display: flex;
        justify-content: flex-end;
        flex-basis: 100%;
        margin: 1rem;
        button {
            border: none;
            padding: 0.5rem 1.2rem;
            font-size: 1rem;
            color: white;
        }
    }

    & > div {
        background-color: var(--white);
        padding-bottom: 1em;
    }
`
export const ThumbDesktop = styled.div `
    .top-thumb, button {
        background-color: var(--rose)
    }
`

export const ThumbMobile = styled.div `
    .top-thumb, button{
        background-color: var(--yellow)
    }
`

export const ThumbTablet = styled.div `
    .top-thumb, button {
        background-color: var(--purple)
    }
`