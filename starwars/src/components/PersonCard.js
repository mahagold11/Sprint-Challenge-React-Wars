import React from "react";
import styled from 'styled-components'

const CharacterName = styled.h2`
    padding: 6px 10px;
    margin: 5px;
    border: none;
    border-radius: 3px;
    color: white;

    &:hover {
        color: black;
        font-size: 2rem;
    }
`;

const CardBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 5em 25px 5em;
    border: 6px solid #fe53bb;

    ${props => (props.type === 'male' ? `background: #1B7CED;` : null)}
    ${props => (props.type === 'female' ? `background: #fe53bb;` : null)}
    ${props => (props.type === 'n/a' ? `background: #778899;` : null)}

    ${props => (props.type === 'male' ? `border-color: blue;` : null)}
    ${props => (props.type === 'female' ? `border-color: pink;` : null)}
    ${props => (props.type === 'n/a' ? `border-color: gray;` : null)}



`;

const ChacterList = styled.div`
    display: flex;
    align-items:center;
    color: black;
    font-size: 1rem;
`;





export const PersonCard = props => {


    return (
        <CardBorder type={props.person.gender}>
            <CharacterName>{props.person.name}</CharacterName>
            <ChacterList>
                <ul>height: {props.person.height}</ul>
                <ul>weight: {props.person.mass}</ul>
                <ul>hair: {props.person.hair_color}</ul>
                <ul>gender: {props.person.gender}</ul>
            </ChacterList>
        </CardBorder>
    );
}

export default PersonCard