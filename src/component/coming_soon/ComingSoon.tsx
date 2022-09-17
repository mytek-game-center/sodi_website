import {FullWindow, Logo, Slogan, LogoWindow, ComingSoonWindow, HeaderText, FooterText} from "./StyledComponent";
import sodi_studio_logo from '../../images/SODI_studio_black.png';

function ComingSoon () {
    return (
        <FullWindow>
            <LogoWindow>
                <Logo>
                    <img width={400} src={sodi_studio_logo}></img>
                </Logo>
                <Slogan>Touch The Future</Slogan>
            </LogoWindow>
            <ComingSoonWindow>
                <HeaderText>This website is under construction.</HeaderText>
                <FooterText>Please come back later.</FooterText>
            </ComingSoonWindow>
        </FullWindow>
    );
}

export default ComingSoon;