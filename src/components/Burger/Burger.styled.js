import styled from "styled-components";


export const StyledBurger = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 3rem;
height: 3rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 100;
border-radius: 50%;
position: absolute;
top: 15%;

right: 10px;
&:focus{
    outline: 0px;
}
&:active{
    outline: 0px;
}
span {
    position: absolute;
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
        open ? "#EFFFFA" : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
    
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
 
      margin: 7px 0px;
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  @media screen and (min-width: 800px){
      display: none;
  }

`