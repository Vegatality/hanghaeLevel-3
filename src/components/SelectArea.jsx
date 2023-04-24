import { StContainer, StNormalBox } from "assets/StNormalBox";
import React, { useState } from "react";
import styled from "styled-components";

function SelectArea() {
    const optionData = ["자바", "노드", "스프링", "리액트", "리액트 네이티브"];

    const [currentValue, setCurrentValue] = useState("자바");

    const handleOnChangeSelectValue = (e) => {
        const { innerText } = e.target;
        setCurrentValue(innerText);
    };

    const [isShow, setShow] = useState(false);

    return (
        <StContainer>
            <StSelectContainer>
                <h1>Select</h1>
                <StNormalBox>
                    <StSlectButtonAdjustment onClick={() => setShow((s) => !s)}>
                        <label>{currentValue}</label>
                        <SelectOption isShow={isShow}>
                            {optionData.map((option) => (
                                <Option
                                    key={option}
                                    value={option}
                                    onClick={handleOnChangeSelectValue}
                                >
                                    {option}
                                </Option>
                            ))}
                        </SelectOption>
                        {/* <option value="javascript">JavaScript</option>
                        <option value="php">PHP</option>
                        <option value="java">Java</option>
                        <option value="golang">Golang</option>
                        <option value="python">Python</option>
                        <option value="c#">C#</option> */}
                    </StSlectButtonAdjustment>
                </StNormalBox>
            </StSelectContainer>
        </StContainer>
    );
}

const StSelectContainer = styled.div`
    border: 3px solid gray;
    margin-top: 60px;
    height: 250px;
`;

const StSlectButtonAdjustment = styled.div`
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 40px;
    padding: 0 25px;
    box-sizing: border-box;
    // margin-bottom: 90px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;

    & > label {
        line-height: 40px;
    }

    /* inline요소는 transform을 사용할 수 없다. */
    &::after {
        content: "⌵";
        display: block;
        width: 10px;
        transform: translate(285px, -36px);
        color: #333;
        font-size: 20px;
    }
`;

const SelectOption = styled.ul`
    position: absolute;
    width: 350px;
    max-height: ${(props) => (props.isShow ? "none" : "0")};
    overflow: hidden;
    /* 얘는 padding이 들어왔을 때 width를 넘어가지 않는 선에서 padding을 포함한 width값이 350px이 되게 해 줌 */
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #ccc;
    transform: translateX(-25px);
`;

// 부모요소가 relative라는 가정 하에 자식요소가 부모요소 정가운데 있으려면
// position:absolute; top:50%;left:50%;transform:translate(-50%, -50%);
const Option = styled.li`
    width: 100%;
    padding: 10px 25px;
    &:hover {
        background-color: #ccc;
    }
`;

export default SelectArea;
