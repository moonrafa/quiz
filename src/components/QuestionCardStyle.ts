import styled from 'styled-components'

export const Wrapper = styled.div`
max-width: 1100px;
background: rgba(74, 47, 189, 1)
border-radius: 0.625rem;
border: 2px solid whitesmoke;
box-shadow: 0px 5px 10px rgba (0, 0, 0, 0.25);
text-align: center;
color: #fff;
padding: 1rem;

p {
  font-size: 1rem;
}

`
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
transition: all 0.3 ease;

hover {
  opacity: 0.5rem;
}

button {
  cursor: pointer;
  user-select: none;
  font-size: 0.8rem;
  width: 100%;
  height: 2.5rem;
  margin: 5px 0;
  background: ${({correct, userClicked})=> 
correct ? 'linear-gradient(90deg, #56ffa4, #59bc86)': !correct && userClicked ? 'linear-gradient(90deg, #ff5656, #c16868)': 'linear-gradient(rgba(74, 47, 189, 0.8), rgba(170, 54, 124, 0.8))'};
border: 3px solid #fff;
box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
border-radius: 0.625rem;
color: #fff;
text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25)
}

`
