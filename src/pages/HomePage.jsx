import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllfiles } from '../store/getAllReducer';
class HomePage extends Component {
	componentDidMount() {
		this.props.fetchAllfiles();
	}
	render() {
		return this.props.files ? (
			<div>
				{this.props.files.imguploaders.map(
					(file) =>
						file.privacy === 'public' ? (
							<div key={file.id}>
								<h1>{file.title}</h1>
								<p>{file.description}</p>
								{file.privacy === 'public' ? <p>status: {file.privacy}</p> : null}
								<img src={file.img} alt="pic" width="200px" height="250px" />
							</div>
						) : null
				)}
			</div>
		) : (
			<h1>Loading</h1>
		);
	}
}

const mapStateToProps = (storeState) => {
	return {
		files: storeState.features.getAll.files
	};
};
export default connect(mapStateToProps, { fetchAllfiles })(HomePage);
