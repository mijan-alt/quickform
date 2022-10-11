import { FaFacebook} from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";
import styled from 'styled-components'


const SocialIcons = () => {
    return ( 
         <StyledSocialIcons>

            <div>
                <a href="https://google.com"><img src="./images/icons8-google.svg" alt="" /><span>Goggle</span></a>
            </div>
            
            <div>
                <a className="facebook" href="https://facebook.com"><Facebook/><span>Facebook</span></a>
            </div>

      </StyledSocialIcons>
        );
    
    }




    const Facebook= styled(FaFacebook)`
      color: #0052FF;

    `;
 
export default SocialIcons ;