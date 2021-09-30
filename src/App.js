import React from "react";
import "./App.css"
import styled from "styled-components";
import {Route, Link} from "react-router-dom";
import BucketList from "./BucketList";
import Detail from "./Detail";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux"
function App() {

    const history=useHistory();
    const [list, setList] = React.useState([
        {a : "흰탄", b : "물리", c : "1단계" },
        {a : "녹탄", b : "물리", c : "2단계" },
        {a : "보라탄", b : "물리", c : "3단계" },
    ]);
    const text = React.useRef(null);

    const addBucketList = () => {
        setList([
            ...list,
            text.current.value
        ]);
    }

    console.log(list);
    return (
        <div className="App">
            <Container>
                <Title>Destiny</Title>
                <Line /> 
                <Route path="/" exact>
                    <BucketList list={list} />
                    <button onClick={()=>{
                    history.push("/detail")
                }}>추가하기</button>
                </Route>                   
                <Route path="/detail"> 
                    <Detail />
                </Route>
            </Container>
            
            
        </div>
    );
}


const Container = styled.div `
max-width: 400px;
min-height: 20xp;
background-color: skyblue;
padding: 14px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1 `
color: slateblue;
text-align: center;
`;

const Line = styled.hr `
margin: 16px 0px;
border: 1px dotted #ddd;
`;

export default App;