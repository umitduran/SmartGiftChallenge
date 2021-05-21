import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${props => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
`;

const StyledModal = styled.div`
  box-shadow: 1px 1px 3px 1px;
  border-radius: 7px;
  background: #d3d3df;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
  padding: 10px 25px 25px 10px;
  max-width: calc(100vw - 40px);
  text-align: right;
`;

const StyledHeader = styled.header`
    background-size: contain;
    display: flex;
    flex-direction: column;
    flex-flow: row wrap;
    height: 2rem;
    min-width: 120px;
    width: 24rem;
    justify-content: center;
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.5rem;
    border: 1px solid;
    border-radius: 6px;
    background-color: #728495;
    color: ghostwhite;
`;

const StyledText = styled.label`
    color: #534343;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    font-size: larger;
`;

const StyledButton = styled.button`
    height: 30px;
    width: 40px;
    border: 1px solid;
    border-radius: 5px;
    color: #e57373;
    margin: 5px;
}
`;

const Modal = ({show,children}) => {
    return (
        <Wrapper show={show}>
            <StyledModal>{children}</StyledModal>
        </Wrapper>
    )
};

Modal.Header = ({children}) => <StyledHeader>{children}</StyledHeader>
Modal.Text = ({children}) => <StyledText>{children}</StyledText>
Modal.Button = ({onClick,children}) => <StyledButton onClick={onClick}>{children}</StyledButton>

export default Modal;
