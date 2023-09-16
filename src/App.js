import styled from "styled-components";
import { useDeferredValue, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Audio from "./Components/Audio";
import play from "./assets/play.png";
import pause from "./assets/pause.png"
import music from "./assets/music.png"


const theme = {
  text: {
    dark: "black",
    light: "white"
  }
}

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [playMusic, setplayMusic] = useState(true);

  // useEffect(()=>{
  //   setInterval(()=>{
  //     setDarkMode(true);
  //     setTimeout(()=>{
  //       setDarkMode(false);
  //     },700)

  //   },1400)
  // },[darkMode])

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  const musicController = () => {
    setplayMusic(!playMusic);
  }


  return (
    <>
      <ThemeProvider theme={theme} >
        <Container darkMode={darkMode}>
          <Wrapper>
            <Image src={playMusic ? pause : music} onClick={musicController} />
            
          {/* //   <StyledButton onClick={handleClick}>
          //   {darkMode ? "Light Mode" : "Dark Mode"}
          // </StyledButton> */}
          </Wrapper>

          <Audio playMusic={playMusic}  ></Audio>

          <Para darkMode={darkMode} >
            Pratik Pisudde
          </Para>

       
        </Container>
      </ThemeProvider>
    </>

  );
}



const Para = styled.h1`
margin:3rem;
width:60vw;
font-size:7rem;
text-align: center;
/* color:${({ darkMode }) => darkMode ? "white" : "black"}; */
background-image: ${music};

`

const Container = styled.div`
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
background-image: ${({ darkMode }) => darkMode ? "linear-gradient(to right top, #061121, #00141d, #001616, #02150c, #0f1305)" : "linear-gradient(to right, #1566df, #008cd8, #00a1ae, #6aae90, #adb69a)"} ;

`
const StyledButton = styled.button`
height: 50px;
width: 50px;
background-color: blueviolet;
outline: none;
border-radius: 50%;
color:white;
border: none;
margin: 0px 10px;
cursor: pointer;
z-index: 5;

&:hover{
  scale: 0.95;
}
`

const Image = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
margin: 0px 10px;
cursor: pointer;
padding: 7px;
z-index: 5;

background-color: white;
`

const Wrapper = styled.div`
position: absolute;
top: 35px;
right:45px;
display:flex;


`


export default App;

