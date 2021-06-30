import BurgerMenu from '@components/Burger/Burger';
import DownloadSvg from '@images/download.png';
import { useState } from 'react';
import {
  CvButton, DropDownMenu, HeaderWrapper,
  LinksWrapper,
  List
} from './style';



function NavLinks({ open }) {
  const listDetails = [
    { name: "Home" },
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contacts" }
  ]
  return (<LinksWrapper open={open}>
    {listDetails.map((list, index) => <List key={index} open={open}>{list.name}</List>)}
  </LinksWrapper>);
}



function DownLoadCv() {
  return (<CvButton>
    Download Cv
    <img src={DownloadSvg} alt="" />
  </CvButton>);
}


const Header = () => {

  const [open, setIsOpen] = useState(false);

  return (

    <HeaderWrapper>
      <header>
        {/* Logo Area */}
        <h4>Logo</h4>

        {/* Nav Links */}
        <section className="nav-links-section">
          <NavLinks></NavLinks>
        </section>

        {/* Download Cv Button */}
        <section className="cv-section">
          <DownLoadCv />
        </section>

        {/* Burgder */}
        <BurgerMenu open={open} setIsOpen={setIsOpen} />


      </header>

      {/* Burger DropDownMenu */}
      <DropDownMenu open={open}>
        <NavLinks open={open} />
      </DropDownMenu>


    </HeaderWrapper>
  )
}

export default Header;