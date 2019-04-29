import React from 'react';

import data from './tracks';

import Appcontrols from './components/Appcontrols';

import Songslist from './components/Songslist';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isPlaying: false,
			currentIndex: 1,
			isShuffle: false,
		};
		this.handleClickControls = this.handleClickControls.bind(this);
		this.songClicked = this.songClicked.bind(this);
	}

	playAudio() {
		this.audio.load();
		this.audio.play();
	}

	resumeAudio() {
		this.audio.play();
	}

	pauseAudio() {
		this.audio.pause();
	}

	songClicked(e) {
		this.setState({
			isPlaying: true,
			currentIndex: e.target.getAttribute('data-track-id')
		}, this.playAudio);
	}

	handleClickControls(e) {
		let nextRandomTrack = this.state.currentIndex;
		switch (e.target.id) {
			case 'play':
				this.setState({
					isPlaying: true	
				}, this.resumeAudio);
				break;
			case 'pause':
				this.setState({
					isPlaying: false	
				}, this.pauseAudio);
				break;
			case 'next':
				this.setState((prevState) => ({
						currentIndex: prevState.currentIndex !== data.tracks.length ? (prevState.currentIndex + 1) : prevState.currentIndex,
						isPlaying: true
				}), this.playAudio);
				break;
			case 'prev':
				this.setState((prevState) => ({
					currentIndex: prevState.currentIndex !== 1 ? (prevState.currentIndex - 1) : 1,
					isPlaying: true
				}), this.playAudio);
				break;
			case 'random':
				while(nextRandomTrack === this.state.currentIndex) {
					nextRandomTrack = Math.floor(Math.random() * data.tracks.length + 1)
				} 
				this.setState((prevState) => ({
					currentIndex: nextRandomTrack,
					isPlaying: true
				}), this.playAudio);
				break;
			default:
				break;
		}
		console.log(`You are gonna witness the magic of REACT below`);
		console.log(`The song playing prev is ${this.state.currentIndex}`);
	}

	getSongInfo() {
		const currentIndex = this.state.currentIndex;
		const songsList = data.tracks;
		console.log(':::::', currentIndex);
		return songsList[currentIndex - 1].title;
	}

	render() {
		return (
			<div className="App music-player-wrapper">
				<div className='songName'><h1>{this.getSongInfo()}</h1></div>
				<Appcontrols songsList={data} isPlaying={this.state.isPlaying} currentIndexPlaying={this.state.currentIndex} handleClickControls={this.handleClickControls}/>
				<audio ref={(audio) => this.audio = audio} src={`/songs/${this.state.currentIndex}.mp3`} />
				<Songslist songsList={data.tracks} currentIndexPlaying={this.state.currentIndex} songClicked={this.songClicked}/>
			</div>
			);
	}
};

export default App;