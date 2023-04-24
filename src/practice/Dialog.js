import React, { useEffect, useState } from "react";
import Button from "./Button";
import styled, { keyframes } from "styled-components";

// 트랜지션 효과를 적용 할 때에는 CSS Keyframe 을 사용하며, styled-components 에서 이를 사용 할 때에는 keyframes 라는 유틸을 사용합니다.
const fadeIn = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;
const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`;

const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.8);

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
`;

// Nested CSS 문법
// 굳이 이렇게 안 써도 됨.
// const Title = styled.h3``;
// const Description = styled.p``

const DialogBlock = styled.div`
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

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${slideUp};
    animation-fill-mode: forwards;
`;

const ButtonGroup = styled.div`
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;

const ShortMarginButton = styled(Button)`
    & + & {
        margin-left: 0.5rem;
    }
`;

// 기존 import 해온 Button 의 속성을 상속해서 덮을 수 있음.
//   안에다가 Button 넣은 거 보이죠?
// const ShortMarginButton = styled(Button)`
//     & + & {
//         margin-left: 0.5rem;
//     }
// `;

function Dialog({
    title,
    children,
    confirmText,
    cancelText,
    onConfirm,
    onCancel,
    visible,
}) {
    // 현재 트랜지션 효과를 보여주고 있는 중이라는 상태를 의미하는 animate
    // 실제로 컴포넌트가 사라지는 시점을 지연시키기 위한 localVisible
    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    useEffect(() => {
        // visible 값이 true -> false 가 되는 것을 감지
        if (localVisible && !visible) {
            setAnimate(true);
            setTimeout(() => setAnimate(false), 250);
        }
        setLocalVisible(visible);
    }, [localVisible, visible]);

    // if (!visible) return null;
    if (!animate && !localVisible) return null;
    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    {/* 여기 onClick 은 자동 추천 안뜨고 속성 Button.js에서 따로 안 받아도 되네? */}
                    <ShortMarginButton color="gray" onClick={onCancel}>
                        {cancelText}
                    </ShortMarginButton>
                    <ShortMarginButton color="pink" onClick={onConfirm}>
                        {confirmText}
                    </ShortMarginButton>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

Dialog.defaultProps = {
    confirmText: "확인",
    cancelText: "취소",
};

export default Dialog;
