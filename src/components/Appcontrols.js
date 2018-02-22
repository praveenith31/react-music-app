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
		return (
			this.props.isPlaying 
			? <span 
					id ='pause'
					className = 'fa fa-fw fa-pause'
					onClick = {this.props.handleClickControls}>
				</span>
			: <span 
					id ='play'
					className = 'fa fa-fw fa-play'
					onClick = {this.props.handleClickControls}>
				</span>
			);
	}

	render() {
		return (
			<div className="Artwork">
				<div className="controls-wrapper">
					<span 
						id ='prev'
						ref = 'prev'
						className = 'fa fa-fw fa-fast-backward'
						onClick = {this.props.handleClickControls}>
					</span>
					{this.showPausePlay()}
					<span 
						id ='next'
						ref = 'next'
						className = 'fa fa-fw fa-fast-forward'
						onClick = {this.props.handleClickControls}>
					</span>
				</div>
			</div>
			);
	}
};

export default Appcontrols;