import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  width: ${props => {
    switch (props.modalSize) {
        case "lg":
            return "800";
        default:
            return "480";
    }
}}px;
  margin: 40px auto;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    z-index: 1050;
    width: 100%;
    background-color: #fefefe;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    border: 3px solid white;
    border-radius: 15px;
    .box-content {
      padding: 24px;
      width: 100%;
    }
    .box-header {
      height: 20px;
      padding: 6px 12px;
      display: flex;
      
      background-color: lightgray;
      margin: 5px;
      border: 1px solid #f9f9f9;
      border-radius: 5px;
      color: white;
      
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #c7c7c7;
      .box-title {
        font-size: 24px;
        color: #315980;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      .close {
       background-color: lightcoral;
       margin: 5px;
       border: 1px solid #f9f9f9;
       border-radius: 5px;
       color: white;
        font-size: 20px;
        line-height: 20px;
        font-weight: 200;
        text-shadow: none;
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
    }
    .box-body {
      font-size: 14px;
      padding: 0px;
      width: auto;
      height: auto;
    }
    .box-footer {
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #c7c7c7;
    }
  }
`;

export default Modal;
