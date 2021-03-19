import styled from 'styled-components'

export const DescriptionContain = styled.div `
    font-weight: 300;
    h1 {
        font-size: 2.5rem;
        line-height: 4rem;
        text-align: center;
        color: var(--green);
        font-weight: 300;
    }

    p {
        font-size: 1.4rem;
        line-height: 2.6rem;
        text-align: center;
        color: var(--black)
    }
`

export const ImageLogo = styled.img `
    max-width: 240px;
    margin: 0 auto;
    display: block;
`

export const FormSearch = styled.form `
    display: flex;
    justify-content: center;
    margin-top: 47px;
    input, button {
        max-width: 164px;
        padding: 16px;
        border: solid 2px var(--white);
        font-size: 16px;
        background-color: transparent;
        color: var(--white);
        border-radius: 8px;
        font-weight: bold;
        
    }

    button {
        margin-left: 8px;
        &:hover {
            background-color: var(--white);
            color: black;
            button: pointer;
        }
    }
`

export const ContainerList = styled.div `
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`