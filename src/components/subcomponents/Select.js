import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  margin: 10px;

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


const Select = ({onChange, children}) => {
    return <StyledSelect onChange={onChange}>{children}</StyledSelect>
};

export default Select;
