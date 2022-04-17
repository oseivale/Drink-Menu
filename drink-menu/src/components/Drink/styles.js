import styled from 'styled-components'

export const DrinkSection = styled.section`
    max-width: 950px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
`

export const FeatureImg = styled.img`
    width: 400px;
    margin: 2rem;
`

export const TextWrapper = styled.div`
    margin: 1rem;
`

export const Button = styled.button`
    border: none;
    padding: 1rem 2rem;
    background-color: #6A57D5;
    color: #ffffff;
    border-radius: 25px;

    &:hover {
        filter: brightness(85%);
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
`