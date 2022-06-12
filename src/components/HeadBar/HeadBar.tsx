import { Container, ContainerFluid } from "../../styles/global";
import { HeadArea, ContactArea, HeadNav, ContactItem, HeadNavList, HeadNavItem, SelectLink, HeadNavLink } from "./HeadBar.style";

//Icones
import {MdOutlineEmail} from 'react-icons/md';
import {AiOutlinePhone, AiOutlineHeart} from 'react-icons/ai';
import {FiUser, FiShoppingCart} from 'react-icons/fi';

const HeadBar = () =>{
    return(
        <ContainerFluid color="purple">
            <Container>
                <HeadArea>
                    <ContactArea>
                        <ContactItem>
                            <MdOutlineEmail/>
                            <p>mhhasanul@gmail.com</p>
                        </ContactItem>
                        <ContactItem>
                            <AiOutlinePhone/>
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
                                <HeadNavLink to="/account" >
                                    <span>Login</span>
                                    <FiUser/>
                                </HeadNavLink>
                            </HeadNavItem>
                            <HeadNavItem>
                                <HeadNavLink to="/whishlist"  >
                                    <span>Wishlist</span>
                                    <AiOutlineHeart/>
                                </HeadNavLink>  
                            </HeadNavItem>
                            <HeadNavItem>
                                <HeadNavLink to="/cart" >
                                    <FiShoppingCart/>
                                </HeadNavLink>  
                            </HeadNavItem>
                        </HeadNavList>
                    </HeadNav>
                </HeadArea>
            </Container>
        </ContainerFluid>
    )

};

export default HeadBar;