import React from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Input = ({placeholder,value,onChange}) => {

    return <StyledInput
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
    />;
};

export default Input;

