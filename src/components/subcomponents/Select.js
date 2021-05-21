import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  font-size: 14px;
  margin: 10px;
  border: 1px solid;
  border-radius: 5px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
    margin:5px;
  }
`;


const Select = ({onChange,value, children}) => {
    return <StyledSelect
        value={value}
        onChange={onChange}>{children}</StyledSelect>
};

export default Select;
