import { MainContainer } from "./styles/Form.styled";
import { StyledForm, Remember , Button} from "./styles/Form.styled";
import SocialIcons from "./SocialIcons";
import { Input } from "./styles/Input.styled";



const  Form = () => {
    return ( 
        
        <StyledForm>
            <MainContainer>
                <div>
                    <h2>Welcome Back</h2>
                    <h3>Login to your account</h3>
                </div>

                <SocialIcons/>
                
               <hr /> <p>Or continue with</p>

                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>

                <Remember>
                    <p>Remember me</p>
                    <p>Recover password</p>
                </Remember>

                <Button>Log in</Button>


            </ MainContainer>

        </StyledForm>
    
     );
}
 
export default  Form;