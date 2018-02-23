import React from 'react';

class Songslist extends React.Component {

	getTrackList() {
		return this.props.songsList.map((track) => {
			return <li ref={track.id} key={track.id} data-track-id={track.id} onClick={this.props.songClicked}>{track.title}</li>
		})
	}

	render() {
		return (
			<div className="songs-list-wrapper">
				<ul className="TrackList">
					{this.getTrackList()}
				</ul>
			</div>
			);
	}
};

export default Songslist;