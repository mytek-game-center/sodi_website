import {FullWindow, Logo, Slogan, ComingSoonWindow} from "./StyledComponent";
import sodi_studio_logo from '../../images/SODI_studio_white.png';

function ComingSoon () {
    return (
        <FullWindow>
            <ComingSoonWindow>
                <Logo>
                    <img height={300} src={sodi_studio_logo}></img>
                </Logo>
                <Slogan>Touch The Future</Slogan>
            </ComingSoonWindow>
        </FullWindow>
    );
}

export default ComingSoon;