import Buttons from "assets/Buttons";
import { StContainer, StNormalBox } from "assets/StNormalBox";
import React, { useState } from "react";
import Modal from "./Modal";

function ModalArea() {
    const [firstModal, setFirstModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);
    const [contents, setContents] = useState({ name: "", value: "" });

    const openModal = (name, value) => {
        if (name === "first_modal") {
            setFirstModal(true);
        } else {
            setSecondModal(true);
        }
        setContents({ name, value });
    };
    const onConfirm = (name) => {
        if (name === "first_modal") {
            console.log("on");
            // setFirstModal(false);
        } else {
            console.log("on");
            // setSecondModal(false);
        }
    };

    const onCancel = (name) => {
        // console.log("취소");
        if (name === "first_modal") {
            setFirstModal(false);
        } else {
            setSecondModal(false);
        }
    };
    return (
        <>
            <StContainer>
                <h1>Modal</h1>
                <StNormalBox>
                    <div>
                        <Buttons
                            color="green"
                            size="small"
                            name="first_modal"
                            value="닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요."
                            onClick={(e) =>
                                openModal(e.target.name, e.target.value)
                            }
                        >
                            open modal
                        </Buttons>
                    </div>
                    <div>
                        <Buttons
                            color="red"
                            size="large"
                            name="second_modal"
                            value="닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요."
                            onClick={(e) =>
                                openModal(e.target.name, e.target.value)
                            }
                        >
                            open modal
                        </Buttons>
                    </div>
                </StNormalBox>
            </StContainer>
            <Modal
                firstModal={firstModal}
                secondModal={secondModal}
                contents={contents}
                onConfirm={onConfirm}
                onCancel={onCancel}
            ></Modal>
        </>
    );
}

export default ModalArea;
