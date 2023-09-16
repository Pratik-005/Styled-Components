import React from 'react';
import AudioPlayer from 'react-audio-player';
import sound from "../assets/Thalaiva.mp3";
import styled from 'styled-components';

function Audio({ playMusic }) {
    return (
        <>  <Container>

             { playMusic &&
                <AudioPlayer className="player"
                src={sound}
                autoPlay
                loop
            />
            }
            
        </Container>

        </>
    )
}


export default Audio;

const Container = styled.div`
    /* .player{
        width: 1px;
        height: 1px;

    } */

`
