import Buttons from "assets/Buttons";
import { StContainer, StNormalBox } from "assets/StNormalBox";
import React, { useState } from "react";
import styled from "styled-components";

const StInputBox = styled.input`
    border-radius: 10px;
    width: 300px;
    height: 50px;
`;

function InputArea() {
    const [content, setContent] = useState({
        name: "",
        price: 0,
    });

    // 이거 안되면 split 써보자
    const contentHandler = (e) => {
        if (e.target.name === "name") {
            setContent({ ...content, name: e.target.value });
        } else {
            if (e.target.value[0] === "0") {
                e.target.value = e.target.value.slice(1);
            }
            setContent({
                ...content,
                price: e.target.value
                    .replace(/[^0-9]/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
            });
        }
    };

    const onSubmitHandler = (event) => {
        if (content.name === "" || content.price === "") {
            event.preventDefault();
            return;
        } else {
            event.preventDefault();
            alert(
                `{name: ${content.name}, price: ${content.price.replaceAll(
                    ",",
                    ""
                )}}`
            );
        }
    };

    return (
        <StContainer>
            <h1>Input</h1>
            <form onSubmit={onSubmitHandler}>
                <StNormalBox>
                    <div>
                        <label>이름</label>&nbsp;
                        <StInputBox
                            name="name"
                            value={content.name}
                            placeholder="이름을 입력하세요"
                            onChange={contentHandler}
                        />
                    </div>
                    <div>
                        <label>가격</label>&nbsp;
                        <StInputBox
                            name="price"
                            value={content.price}
                            placeholder="가격을 입력하세요"
                            onChange={contentHandler}
                        />
                    </div>
                    <Buttons color="green" size="small">
                        저장
                    </Buttons>
                </StNormalBox>
            </form>
        </StContainer>
    );
}

export default InputArea;
