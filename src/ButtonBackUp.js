import { darken, lighten } from "polished";
import React from "react";
import styled, { css } from "styled-components";

const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
            /* outline 값은 안 담겨있는 것 같은데... */
            /* 밑 코드는 원래 한 줄이라서 중괄호도 필요없고 return도 필요없는 거 */
            ${(props) =>
                props.outline &&
                css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
                `}
        `;
    }}
`;

// 밑 sizeStyles에서 겹치는 식별자 빼서 따로 size 리팩토링
// const sizeStyles = css`
//     ${(props) =>
//         props.size === "large" &&
//         css`
//             height: 3rem;
//             font-size: 1.25rem;
//         `}

//     ${(props) =>
//         props.size === "medium" &&
//         css`
//             height: 2.25rem;
//             font-size: 1rem;
//         `}

//     ${(props) =>
//         props.size === "small" &&
//         css`
//             height: 1.75rem;
//             font-size: 0.875rem;
//         `}
// `;

const sizes = {
    large: {
        height: "3rem",
        fontSize: "1.25rem",
    },
    medium: {
        height: "2.25rem",
        fontSize: "1rem",
    },
    small: {
        height: "1.75rem",
        fontSize: "0.875rem",
    },
};

const sizeStyles = css`
    // props 중에 size라는 객체가 있음. 객체 리터럴로 받아왔음.
    ${({ size }) => css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `}
`;

const fullWidthStyle = css`
    ${(props) =>
        props.fullWidth &&
        css`
            width: 100%;
            justify-content: center;
            & + & {
                margin-left: 0;
                margin-top: 1rem;
            }
        `}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    ${sizeStyles}
    /* height: 2.25rem;
    font-size: 1rem; */

    /* 색상  CSS부분 색상 관련 부분만 따로 위로 빼 놨음.*/
    ${colorStyles}
    /* ${({ theme, color }) => {
        // const selected = props.theme.palette.blue;
        // Button에서 {...rest} 로 넘어온거 props => 한 다음에 props.color 이런식으로 뽑을 수 있었음.
        // const selected = props.theme.palette[props.color];
        // 리팩토링
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
        `;
    }} */
    /* 기타 */
    & + & {
        margin-left: 1rem;
    }

    ${fullWidthStyle}
`;

function Button({ children, color, size, outline, fullWidth, ...rest }) {
    // .defaultProps 함수 컴포넌트 밖에 써놔도 적용 됨.
    // Button.defaultProps = {
    //     color: "blue",
    // };
    return (
        <StyledButton
            color={color}
            size={size}
            outline={outline}
            fullWidth={fullWidth}
            {...rest}
        >
            {children}
        </StyledButton>
    );
}
Button.defaultProps = {
    color: "blue",
    size: "medium",
};

export default Button;
