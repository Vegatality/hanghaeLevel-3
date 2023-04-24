import Button from "practice/Button";
import Dialog from "practice/Dialog";
import styled, { ThemeProvider, css } from "styled-components";

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto; // 2개의 margin 속성값을 가질 때는 top과 bottom, right와 left 순으로 설정
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
    /* background-color: green; */
`;

const ButtonGroup = styled.div`
    // 뒤따라오는 ButtonGroup(만)이 margin-top 속성을 갖도록.(연속으로 갖게 됨.)
    & + & {
        margin-top: 1rem;
    }
`;

// ThemeProvider 내부는 하나의 리액트 엘리먼트로 감싸져있어야 하기 때문에
//  AppBlock 과 Dialog 를 <></> 으로 감싸주었습니다.
function StComponentStudy() {
    return (
        <ThemeProvider
            theme={{
                palette: {
                    blue: "#228be6",
                    gray: "#495057",
                    pink: "#f06595",
                },
            }}
        >
            <>
                <AppBlock>
                    <ButtonGroup>
                        <Button size="large">BUTTON</Button>
                        <Button>BUTTON</Button>
                        <Button size="small">BUTTON</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="gray" size="large">
                            BUTTON
                        </Button>
                        <Button color="gray">BUTTON</Button>
                        <Button color="gray" size="small">
                            BUTTON
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button color="pink" size="large">
                            BUTTON
                        </Button>
                        <Button color="pink">BUTTON</Button>
                        <Button color="pink" size="small">
                            BUTTON
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large" outline>
                            BUTTON
                        </Button>
                        <Button color="gray" outline>
                            BUTTON
                        </Button>
                        <Button color="pink" size="small" outline>
                            BUTTON
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button size="large" fullWidth>
                            BUTTON
                        </Button>
                        <Button size="large" color="gray" fullWidth>
                            BUTTON
                        </Button>
                        <Button size="large" color="pink" fullWidth>
                            BUTTON
                        </Button>
                    </ButtonGroup>
                </AppBlock>
                <Dialog
                    title="정말로 삭제하시겠습니까?"
                    confirmText="삭제"
                    cancelText="취소"
                >
                    데이터를 정말로 삭제하시겠습니까?
                </Dialog>
            </>
        </ThemeProvider>
    );
    // return (
    //     <StContainer>
    //         {/* <Circle color="red" huge /> */}
    //         <div>inner</div>
    //         {/* <StInset>inner</StInset> */}
    //     </StContainer>
    // );
}

const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${(props) => props.color || "black"};
    border-radius: 50%;
    ${(props) =>
        props.huge &&
        css`
            width: 10rem;
            height: 10rem;
        `}
`;
const StContainer = styled.div`
    position: relative;
    background: #eee;
    width: 200px;
    height: 200px;
    /* 중첩 스코프 */
    div {
        position: absolute;
        background: black;
        /* width: 50px; */
        /* height: 50px; */
        /* inset property를 사용하면 해당 노드가 가로값과 세로값이 없어도 부모 노드로부터 일정한 간격을 두고 위치하게 됨. */
        inset: 40px 50px;
    }
`;
const StInset = styled.div`
    position: absolute;
    background: black;
    width: 50px;
    height: 50px;
    /* inset property를 사용하면 해당 노드가 가로값과 세로값이 없어도 부모 노드로부터 일정한 간격을 두고 위치하게 됨. */
    inset: 40px 50px;
`;

export default StComponentStudy;
