import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 250px;
    height: auto;
    margin: 3rem;
    box-shadow: 0 1.5px 3.5px 1px rgba(0, 0, 0, 0.3);
    padding: 2rem 1rem;
`
export const CardImg = styled.img`
    width: 180px;
    margin-bottom: 1rem;
` 

export const DrinkTitle = styled.h4`
    font-weight: bold;
`

export const CardButton = styled.button`
    background-color: #6A57D5;
    border: none;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 25px;
    margin: 0.3rem;
    font-size: 0.9rem;
    width: 85%;

    &:hover {
        background-color: blue;
        cursor: pointer;
    }
`

export const CardButtonWrapper = styled.div`
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
`