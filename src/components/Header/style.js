import styled from 'styled-components';

export const HeaderWrapper = styled.header`

width: 100%;

header{
  width: 90%;
  margin: 10px  auto;
  background: transparent;
  border-radius: 40px;
  border: 1px solid ${({ theme }) => theme.toggleBorder};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .nav-links-section{
    @media screen  and (max-width: 800px){
    display: none;
  }
  }
  .cv-section{
    @media screen  and (max-width: 800px){
    display: none;
  }
  }

}

`
export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: ${({ open }) => open ? 'column' : 'row'};;
  align-items: center;

`
export const List = styled.li`
  /* margin: 0px 10px; */
  margin : ${({ open }) => open ? '4rem 0px' : '0px 10px'};
  font-size: ${({ open }) => open && '2.5rem'};

`
export const CvButton = styled.button`
 cursor: pointer;
 background: transparent;
 outline: 0;
 color: ${({ theme }) => theme.downloadBorder};
 border: 1.6px solid ${(p) => p.theme.downloadBorder};
 display: flex;
 align-items: center;
 padding: 10px;
 border-radius: 20px;
 margin: 0px 5px;

 img{
   width: 15px;
   height: 15px;
   margin: 0px 5px;
   
 }

`
export const DropDownMenu = styled.div`
width: 100%;
place-items: center;
height: 100vh;
flex-direction: column;
align-items: center;
z-index: 20;
display:  ${({ open }) => open ? 'flex' : 'none'};
opacity:  ${({ open }) => open ? 1 : 0};
transition: opacity 0.4s ease-in;
@media screen and (min-width: 800px){
      display: none;
  }
`