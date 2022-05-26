import React, {useCallback, useContext} from "react";
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background:  white;
  color:  royalblue;
  font-size: 1em;
  margin: 0px 0px 0px 10px ;
  padding: 0.25em 1em;
  border: 2px solid royalblue;
  border-radius: 3px;
`;
export default function MikeButton(props) {


    return (
        <Button props={props} onClick={props.onClick}>{props.children}</Button>
    )
}