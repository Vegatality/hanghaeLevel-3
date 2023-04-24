import { useState } from "react";
import "./App.css";
import styled, { ThemeProvider, css } from "styled-components";
import ButtonArea from "components/ButtonArea";
import InputArea from "components/InputArea";
import ModalArea from "components/ModalArea";
import SelectArea from "components/SelectArea";
// import { darkTheme, lightTheme } from "styles/theme";
import { colors } from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";
import Modal from "components/Modal";

function App() {
    return (
        <ThemeProvider theme={colors}>
            <GlobalStyle />
            <ButtonArea />
            <InputArea />
            <ModalArea />
            <SelectArea />
        </ThemeProvider>
    );
}

export default App;
