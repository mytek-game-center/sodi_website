import styled from "styled-components";
import under_construction_1 from '../../images/under_construction_2.gif';


const FullWindow = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-image: url(${under_construction_1});
  text-align: center;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Agrandir-GrandBlack, sans-serif;
`;

const ComingSoonWindow = styled.div`
    display: inline-block;
  text-align: center;
  margin: auto;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
    display: inline-block;
`;

const Slogan = styled.div`
  display: inline-block;
`;

export {FullWindow,Logo,Slogan,ComingSoonWindow}