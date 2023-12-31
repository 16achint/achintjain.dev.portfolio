import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import { BrowserRouter as Route } from "react-router-dom";
import Experience from "./components/Experience";
import Project from "./components/Projects";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Wapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 184, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {

  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <ThemeProvider theme={darkTheme}>
      <Route>
        <Navbar />
        <Body>
          <Hero />
          <Wapper>
            <Skills />
            {/* <Experience /> */}
          </Wapper>
          <Project openModal={openModal} setOpenModal={setOpenModal} />
          <Wapper>
            <Education />
          </Wapper>
        </Body>
      </Route>
    </ThemeProvider>
  );
}

export default App;
