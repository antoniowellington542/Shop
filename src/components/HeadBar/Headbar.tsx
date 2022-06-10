import { Container, ContainerFluid } from "../../styles/global";
import { HeadArea, ContactArea, HeadNav, ContactItem, HeadNavList, HeadNavItem, SelectLink } from "./HeadBar.style";
import { Link } from "react-router-dom";
//Imagens
import emailIcon from '../../Imgs/icons/email_icon.svg';
import phoneIcon from '../../Imgs/icons/phone_call_icon.svg';
import userIcon from '../../Imgs/icons/user_icon.svg';
import whishListIcon from '../../Imgs/icons/heart_icon.svg';
import cartIcon from '../../Imgs/icons/shop_cart_icon.svg';
declare module "*.svg";


const HeadBar = () =>{
    return(
        <ContainerFluid color="purple">
            <Container>
                <HeadArea>
                    <ContactArea>
                        <ContactItem>
                            <img 
                                style={{marginTop: '2px'}} 
                                src={emailIcon} 
                                alt="email_icon" 
                            />
                            <p>mhhasanul@gmail.com</p>
                        </ContactItem>
                        <ContactItem>
                            <img 
                                style={{marginTop: '2px'}} 
                                src={phoneIcon} 
                                alt="phone_icon" 
                            />
                            <p>(12345)67890</p>
                        </ContactItem>
                    </ContactArea>
                    <HeadNav>
                        <HeadNavList>
                            <HeadNavItem>
                                <SelectLink name="language">
                                    <option value="english" selected>English</option>
                                    <option value="portuguese">Portuguese</option>
                                </SelectLink>
                            </HeadNavItem>
                            <HeadNavItem>
                                <SelectLink name="coin">
                                    <option value="usd" selected>USD</option>
                                    <option value="brl">BRL</option>
                                </SelectLink>
                            </HeadNavItem>
                            <HeadNavItem>
                                <Link 
                                    to="/account" 
                                    style={{ 
                                            color: '#FFFFFF',
                                            textDecoration: 'none',
                                    }}>
                                    <span>Login</span>
                                    <img src={userIcon} alt="user_icon" />
                                </Link>
                            </HeadNavItem>
                            <HeadNavItem>
                                <Link 
                                    to="/whishlist" 
                                    style={{ 
                                        color: '#FFFFFF',
                                        textDecoration: 'none',
                                    }}
                                    >
                                    <span>Wishlist</span>
                                    <img src={whishListIcon} alt="whishlist_icon" />
                                </Link>  
                            </HeadNavItem>
                            <HeadNavItem>
                                <Link 
                                    to="/cart" 
                                    style={{ 
                                        color: '#FFFFFF',
                                        textDecoration: 'none',
                                    }}
                                    >
                                    <img src={cartIcon} alt="cart_icon"/>   
                                </Link>  
                            </HeadNavItem>
                        </HeadNavList>
                    </HeadNav>
                </HeadArea>
            </Container>
        </ContainerFluid>
    )

};

export default HeadBar;