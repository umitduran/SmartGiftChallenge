import React from 'react';
import styled from 'styled-components';

const StyledText = styled.label`
    color: #8d8d8d;
    background: #ffffff;
    font-size: 1rem;
`;

const Text = ({children}) => {
    return <StyledText >Running Shoes</StyledText>
}

export default Text;
