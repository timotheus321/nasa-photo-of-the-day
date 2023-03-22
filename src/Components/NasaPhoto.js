import React from "react";
import styled from 'styled-components';


const Title = styled.h3`
 color: blue;
`;

const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <Title>{props.photo.title}</Title>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className="explanation">{props.photo.explanation}</p>

        </div>

    )
}

export default NasaPhoto;

