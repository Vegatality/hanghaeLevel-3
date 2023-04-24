import React, { useState } from "react";
import styled from "styled-components";
import Buttons from "assets/Buttons";
import { StContainer, StNormalBox } from "assets/StNormalBox";

const primaryClick = () => {
    alert("버튼을 만들어보세요.");
};

const negativeClick = () => {
    prompt("어렵나요?");
};

function ButtonArea() {
    console.log(StNormalBox);
    return (
        <StContainer>
            <div>
                <h1>Button</h1>
                <StNormalBox>
                    <Buttons
                        color="green"
                        size="large"
                        outline
                        onClick={primaryClick}
                        iconOption={true}
                    >
                        Large Primary Button
                    </Buttons>
                    <Buttons color="green" size="medium">
                        Medium
                    </Buttons>
                    <Buttons color="green" size="small">
                        Small
                    </Buttons>
                </StNormalBox>
                <StNormalBox>
                    <Buttons
                        color="red"
                        size="large"
                        outline
                        onClick={negativeClick}
                        iconOption={true}
                    >
                        Large Negative Button
                    </Buttons>
                    <Buttons color="red" size="medium">
                        Medium
                    </Buttons>
                    <Buttons color="red" size="small">
                        Small
                    </Buttons>
                </StNormalBox>
            </div>
        </StContainer>
    );
}
export default ButtonArea;
