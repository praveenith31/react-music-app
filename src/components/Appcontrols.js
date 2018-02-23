import React from 'react';

class Appcontrols extends React.Component {

	componentDidMount() {
		this.props.currentIndexPlaying === 1 && this.refs.prev.setAttribute('disabled', 'disabled');
		// disable next on the last songs
	}

	componentDidUpdate() {
		this.props.currentIndexPlaying === 0 && this.refs.prev.setAttribute('disabled', "disabled");
	}

	showPausePlay() {
		console.log('::::', this.props);
		return (
			this.props.isPlaying 
			? <i 
					id ='pause'
					className = 'fa fa-fw fa-pause'
					onClick = {this.props.handleClickControls}>
				</i>
			: <i 
					id ='play'
					className = 'fa fa-fw fa-play'
					onClick = {this.props.handleClickControls}>
				</i>
			);
	}

	render() {
		return (
			<div className="Artwork">
				<div className="controls-wrapper">
					<i 
						id ='prev'
						ref = 'prev'
						className = 'fa fa-fw fa-fast-backward'
						onClick = {this.props.handleClickControls}>
					</i>
					{this.showPausePlay()}
					<i 
						id ='next'
						ref = 'next'
						className = 'fa fa-fw fa-fast-forward'
						onClick = {this.props.handleClickControls}>
					</i>
					<i 
						id = "random"
						className="fa fa-random"
						ref = 'random'
						onClick = {this.props.handleClickControls}>
					</i>
				</div>
			</div>
			);
	}
};

export default Appcontrols;