import styled from "styled-components";


export const List = styled.ul`
   display: flex;
   flex-direction: column;
   gap: 20px;

.contact-item {
   display: flex;
   flex-direction: column;
   gap: 10px;
}

.button-remove {
   width: 30px;
   text-align: center;
   cursor: pointer;
   border-radius: 30px;
   border: none;
   background-color: #b0a6d4;
}
.button-remove:hover, .button-submit:focus {
   background-color: #2c118c;
   color: #fff;
}

p {
   margin: 0;
}
`