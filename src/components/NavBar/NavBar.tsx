import { useState } from "react";
import { Container } from "../../styles/global"
import { Search } from "../Search/Search";
import {VscMenu} from 'react-icons/vsc';
import {AiOutlineClose} from 'react-icons/ai';
import {
    NavBarArea, 
    NavMenu, 
    Logo, 
    NavMenuItens, 
    NavMenuLink, 
    NavMenuList, 
    NavMenuArea,
    NavMenuToggle
} from './NavBar.styles'
const NavBar = () =>{

    const[homeActive, setHomeActive] = useState(true);
    const[pagesActive, setPagesActive] = useState(false);
    const[productsActive, setProductsActive] = useState(false);
    const[shopActive, setShopActive] = useState(false);
    const[blogActive, setBlogActive] = useState(false);
    const[contactActive, setContactActive] = useState(false);
    const [activeMenuToggle, setActiveMenuToggle] = useState(false);
    function activeItemMenu(e: any){
        setHomeActive(false);
        setPagesActive(false);
        setProductsActive(false);
        setShopActive(false);
        setBlogActive(false);
        setContactActive(false);
        setActiveMenuToggle(false);
        switch(e.target.innerHTML){
            case 'Home':
                setHomeActive(true);
                break; 
            case 'Pages':
                setPagesActive(true);
                break;
            case 'Items':
                setProductsActive(true);
                break;
            case 'Shop':
                setShopActive(true);
                break;
            case 'Blog':
                setBlogActive(true);
                break; 
            case 'Contact':
                setContactActive(true);
                break;   
        }


    }

    return(
        <Container>
            <NavBarArea>
                <NavMenuArea>
                    <Logo>
                        
                            Hekto
                        
                    </Logo>
                    <NavMenuToggle onClick={()=>setActiveMenuToggle(!activeMenuToggle)}>
                        {activeMenuToggle === true ? <AiOutlineClose size={40}/>: <VscMenu size={40}/>}
                    </NavMenuToggle>        
                    <NavMenu activeMenuToggle={activeMenuToggle} className={activeMenuToggle === true ? 'drop': ''}>
                        <NavMenuList id="menu">
                            <NavMenuItens >
                                <NavMenuLink  id="home" selectItemMenu={homeActive} onClick={(e)=>activeItemMenu(e)} to="/" >
                                    Home
                                </NavMenuLink>
                            </NavMenuItens>
                            <NavMenuItens>
                                <NavMenuLink id="pages" selectItemMenu={pagesActive} onClick={(e)=>activeItemMenu(e)} to="/blog2">
                                    Pages
                                </NavMenuLink>
                            </NavMenuItens>
                            <NavMenuItens>
                                <NavMenuLink id="Items" selectItemMenu={productsActive} onClick={(e)=>activeItemMenu(e)} to="/products">
                                    Items
                                </NavMenuLink>
                            </NavMenuItens>
                            <NavMenuItens>
                                <NavMenuLink id="blog" selectItemMenu={blogActive} onClick={(e)=>activeItemMenu(e)} to="/blog">
                                    Blog
                                </NavMenuLink>
                            </NavMenuItens>
                            <NavMenuItens>
                                <NavMenuLink id="shop" selectItemMenu={shopActive} onClick={(e)=>activeItemMenu(e)} to="/shop">
                                    Shop
                                </NavMenuLink>
                            </NavMenuItens>
                            <NavMenuItens>
                                <NavMenuLink id="Call" selectItemMenu={contactActive} onClick={(e)=>activeItemMenu(e)} to="/contact">
                                    Call
                                </NavMenuLink>
                            </NavMenuItens>
                        </NavMenuList>
                        <Search/>
                    </NavMenu>
                </NavMenuArea>
            </NavBarArea>
        </Container>
    )
}

export default NavBar;