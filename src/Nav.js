
import { StyledNav , Logo, Sign} from "./components/styles/Nav.styled";
import { Container } from "./components/styles/Container.styled";
const Nav= () => {
    return ( 
        <StyledNav>
            <Container>
                <Logo>
                    <span className="quick">Quick</span>
                    <span className="baya">Baya</span>
                </Logo>

                <Sign>
                    <span className="have-account">Don't have an account? </span>
                    <span className="sign-up">Sign up</span>
                </Sign>
            </Container>
               
        </StyledNav>

     );
}
 
export default Nav;
