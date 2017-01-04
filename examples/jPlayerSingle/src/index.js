import React from "react";

import "../../../src/less/default/jPlayer.less";
import render, {JPlayer, Media, Gui, KeyControl, Progress, SeekBar, PlaybackBar, Buffer, BrowserUnsupported, Poster, Audio, Title, FullScreen,
     Mute, Play, PlayBar, Repeat, PlaybackRateBar, PlaybackRateBarValue, VolumeBar, VolumeBarValue, Duration, CurrentTime} from "../../../src/index";

const AudioPlayer = () => (
    <JPlayer className="jp-default">
        <Gui>
            <Media>
                <Audio>
                    <track src="subtitles_en.vtt" kind="subtitles" srcLang="en" label="English" />
                </Audio>
            </Media>
            <div className="jp-poster-container">
                <Poster />
                <Title />
            </div>
            <div className="jp-controls">
                <KeyControl />
                <Play><i className="fa">{/*Icon set in css*/}</i></Play>
                <FullScreen><i className="fa fa-expand"></i></FullScreen>
                <Repeat><i className="fa fa-repeat"></i></Repeat>
                <PlaybackRateBar><PlaybackRateBarValue /></PlaybackRateBar>
                <div className="jp-volume-controls">
                    <Mute><i className="fa">{/*Icon set in css*/}</i></Mute>
                    <VolumeBar><VolumeBarValue /></VolumeBar>
                </div>
                <Progress>
                    <SeekBar>
                        <PlayBar />
                        <Buffer />
                        <CurrentTime />
                        <Duration />  
                    </SeekBar>  
                </Progress>
            </div>
        </Gui>             
        <BrowserUnsupported /> 
    </JPlayer>
);

const jPlayerOptions = {
    id: "audio-player",
    smoothPlayBar: false,
    muted: true,
    globalVolume: false,
    autoplay: false,
    media: {
        title: "Cro Magnon Man",
        artist: "The Stark Palace",
        mp3: "http://jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
        poster: "http://wallpapercave.com/wp/Mb4UPsY.png",
        free: true
    }
};

render(AudioPlayer, jPlayerOptions);

// onShuffleClick = (event) => {
//     event.preventDefault();

//     this.context.shuffle(!this.props.shuffled);
//     this.context.blur(event.target);
// }
// onPreviousClick = (event) => {
//     event.preventDefault();

//     this.context.previous();
//     this.context.blur(event.target);
// }
// onNextClick = (event) => {
//     event.preventDefault();

//     this.context.next();
//     this.context.blur(event.target);
// }
// onVideoPlayClick = () => this.props.dispatch(play())
// shuffle: (<a className={classNames.SHUFFLE} onClick={props.onShuffleClick}>{props.children}</a>),
// previous: (<a className={classNames.PREVIOUS} onClick={props.onPreviousClick}>{props.children}</a>),
// next: (<a className={classNames.NEXT} onClick={props.onNextClick}>{props.children}</a>)