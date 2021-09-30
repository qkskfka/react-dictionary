import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import { useSelector } from 'react-redux';

const BucketList = (props) => {
    let history = useHistory();
    //console.log(props);
    //const my_lists = props.list;
    const my_lists = useSelector((state) => state.bucket.list);

    return (
        <ListStyle>
            {
                my_lists.map((list, index) => {
                    return (
                        <ItemStyle
                            className="list_item"
                            key={index}
                            onClick={() => {
                                history.push("/detail");
                            }}>
                            
                            <h1>이름:{list.a}</h1> 
                            <h1>특성:{list.b}</h1>
                            <h1>설명:{list.c}</h1>
                        </ItemStyle>
                    );
                })
            }
        </ListStyle>
    );
};

const ListStyle = styled.div `
display: flex;
flex-direction: column;
height: 100%;
overflow-x: hidden;
overflow-y: auto;
`;

const ItemStyle = styled.div `
padding: 100px;
margin: 8px;
background-color: aliceblue;
`;

export default BucketList;