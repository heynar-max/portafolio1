import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --fondo-rojo: #BD4451;
    --negro: #000;
    --blanco: #fff;
    --blanco-trasparente: #ffffff82;

}
*{
    padding: 0;
    margin: 0;
}
body{
    /* background-color: var(--negro); */
}
`;

export default GlobalStyle