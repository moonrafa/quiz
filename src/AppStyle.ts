import styled, {createGlobalStyle} from 'styled-components'
import background from './assets/bg.png'

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}
body {
  background-image: url(${background});
  background-size: cover;
  margin: 0;
  padding: 0 1.25rem;
  display: flex;
  justify-content: center;
}
* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
  color: #fff;
}

.score {
  color: #FFF;
  font-size: 2rem;
  margin: 0;
  background-image: linear-gradient(rgba(74, 47, 189), rgba(170, 54, 124));
  border-radius: 0.3125rem;
  padding: 0.3rem 1rem;
  margin-bottom: 1rem;
  
}
> h1 {
background-image: linear-gradient(rgba(74, 47, 189), rgba(170, 54, 124));
background-size: 100%;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-background-clip: text;
-moz-text-fill-color: transparent;
filter: drop-shadow(2px 2px #0085a3);
font-weight: 700;
font-size: 4rem;
text-align: center;
margin: 1.25rem;}

.next, .start {
  color: #fff;
  cursor: pointer;
  background: linear-gradient(rgba(74, 47, 189), rgba(170, 54, 124));
  border: 1px solid #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  height: 2.5rem;
  margin: 1.25rem 0;
  padding: 0 2.5rem;


}
.start {
  max-width: 12.5rem;
}
` 