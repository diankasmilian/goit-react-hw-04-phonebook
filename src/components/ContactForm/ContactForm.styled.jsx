import styled from "styled-components";

 export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 15px;

.button-submit {
   width: 200px;
   cursor: pointer;
   border-radius: 30px;
   border: none;
   background-color: #b0a6d4;
}

.button-submit:hover, .button-submit:focus {
   background-color: #2c118c;
   color: #fff;
}
`