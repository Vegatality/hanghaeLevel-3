import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Buttons from "../assets/Buttons";

const StDarkBackGround = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: green; */
    background: rgba(0, 0, 0, 0.8);
    /* background: transparent; */
`;

const StModalContent = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: white;
    border-radius: 2px;
    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
    p {
        font-size: 1.125rem;
    }
`;

const StButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;

    button:not(:first-of-type) {
        margin-left: 10px;
    }
`;

function Modal({
    children,
    firstModal,
    secondModal,
    contents,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
}) {
    // console.log(contents);
    if (!firstModal && !secondModal) return null;

    const outerCloseDoor = (event) => {
        if (contents.name === "second_modal") {
            onCancel(contents.name);
        } else {
            return;
        }
    };

    const eventStopHandler = (event) => {
        if (contents.name === "second_modal") {
            event.stopPropagation();
        } else {
            return;
        }
    };

    return (
        <StDarkBackGround onClick={outerCloseDoor}>
            <StModalContent onClick={(e) => eventStopHandler(e)}>
                <p>{contents.value}</p>
                <StButtonGroup>
                    <Buttons
                        color="red"
                        size="small"
                        onClick={() => onCancel(contents.name)}
                    >
                        {cancelText}
                    </Buttons>
                    {contents.name === "first_modal" ? (
                        <Buttons
                            color="green"
                            size="small"
                            onClick={() => onConfirm(contents.name)}
                        >
                            {confirmText}
                        </Buttons>
                    ) : null}
                </StButtonGroup>
            </StModalContent>
        </StDarkBackGround>
    );
}

Modal.defaultProps = {
    cancelText: "닫기",
    confirmText: "확인",
};

export default Modal;
