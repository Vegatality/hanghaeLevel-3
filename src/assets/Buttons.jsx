import { darken, lighten } from "polished";
import React from "react";
import styled, { css } from "styled-components";

// color, outline

const colorStyles = css`
    ${({ theme, color }) => {
        const selected = theme[color];
        return css`
            /* color: ${selected}; */
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
            ${(props) =>
                props.size === "large" && color === "red"
                    ? css`
                          color: rgb(214, 48, 49);
                      `
                    : css`
                          color: black;
                      `}
            ${(props) =>
                props.outline &&
                css`
                    background: none;
                    border: 3px solid
                        ${() =>
                            color === "red"
                                ? "rgb(250, 177, 160)"
                                : "rgb(85, 239, 196)"};
                `}
        `;
    }}
`;

// text-overflow: hidden; white-space:  글씨 넘어가면 ... 처리해줌.... ellipsis
// padding 으로 하는 이유: 글자 수가 늘어나도 틀어지지 않음!
// width로 하면 글씨가 틀어질 수 있음.

const sizes = {
    large: {
        fontWeight: "600",
        width: "250px",
        height: "50px",
    },
    medium: {
        width: "150px",
        height: "50px",
    },
    small: {
        width: "100px",
        height: "45px",
    },
};

const sizeStyles = css`
    ${({ size }) => {
        // console.log(size);
        return css`
            font-weight: ${size === "large"
                ? sizes[size].fontWeight
                : "normal"};
            width: ${sizes[size].width};
            height: ${sizes[size].height};
        `;
    }}
`;

const StyledButton = styled.button`
    /* 공통 스타일 */
    /* display: inline-flex; */
    font-weight: normal;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    /* 크기 */
    ${sizeStyles}

    /* 색상 */
    ${colorStyles}
`;

const iconicOption = (iconOption, size, color) => {
    if (iconOption) {
        if (size === "large" && color === "red") {
            return "💡";
        } else if (size === "large") {
            return "👉";
        } else {
            return "";
        }
    } else {
        return "";
    }
};

function Buttons({
    children,
    size,
    color,
    outline,
    iconOption = false,
    ...rest
}) {
    // const additionalIcon = size === "large" ? color === "red"? iconOption ? "💡" : "" : "👉" : "";

    return (
        <StyledButton size={size} color={color} outline={outline} {...rest}>
            {children + iconicOption(iconOption, size, color)}
        </StyledButton>
    );
}

// Buttons.defaultProps = {
//     // icon 기본값 false로 설정
//     iconOption: false,
// };

export default Buttons;
