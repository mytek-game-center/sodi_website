import styled from "styled-components";
import under_construction_1 from '../../images/under_construction_2.gif';


const FullWindow = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${under_construction_1});
  text-align: center;
  font-family: Agrandir-GrandBlack, sans-serif;
`;

const LogoWindow = styled.div`
  margin-top: 50px;
  display: inline-block;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  background-color: rgb(234 234 234 / 40%);
  border-radius: 300px;
`;

const Slogan = styled.p`
  font-size: 28px;
  color: white;
  margin-right: -150px;
  margin-top: 5px;
`;

const ComingSoonWindow = styled.div`
  display: block;
  margin-top: 280px;
`;

const HeaderText = styled.p`
  color: white;
  font-size: 32px;
`;
const FooterText = styled.div`
  color: khaki;
  font-size: 24px;
  margin-top: -30px;
  padding-left: 400px;
`;

export {FullWindow,Logo,Slogan,LogoWindow,ComingSoonWindow,HeaderText,FooterText}