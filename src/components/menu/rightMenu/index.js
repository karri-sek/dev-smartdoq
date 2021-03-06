import styled from "styled-components";

const RightMenu = styled.input`
    right: 1%;
    top: 1%;
    width: 50px;
    position: absolute;
    outline: none;

    @media screen and (max-width: 1024px) and (orientation: portrait) {
      // width: 10%;
    }
    @media screen and (max-width: 1024px) and (orientation: landscape) {
      // width: 8%;
    }
`;

export default RightMenu;
