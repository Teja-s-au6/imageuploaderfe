import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { fetchfiles } from '../store/createReducer';
class CreatePage extends Component {
	state = {
		title: '',
		description: '',
		file: '',
		privacyStatus: ''
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	};

	uploadImage = (event) => {
		this.setState({
			file: event.target.files[0],
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData()
		//console.log(this.state.file)
		formData.append('file', this.state.file)
		formData.append('title', this.state.title)
		formData.append('description', this.state.description)
		formData.append('privacy', this.state.privacyStatus)

		this.props.fetchfiles(formData);
		this.setState({
			file: "",
			title: "",
			description:"",
			privacyStatus: ""
        })
	};
	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit} encType="multipart/form-data">
					<input
						type="file"
						onChange={this.uploadImage}
						className="form-control-file"
						name="file"
					/>
					<br />
					<br />
					<Form.Control
						type="text"
						name="title"
						placeholder="Enter your title"
						value={this.state.title}
						onChange={this.handleChange}
					/>
					<br />
					<br />
					<Form.Control
						type="text"
						name="description"
						placeholder="Enter your description"
						value={this.state.description}
						onChange={this.handleChange}
					/>
					<br />
					<br />
					<Form.Control
						as="select"
						name="privacyStatus"
						onChange={this.handleChange}
						value={this.state.privacyStatus}
						custom
					>
						<option value="" disabled>
							Choose a status
						</option>
						<option value="public">Public</option>
						<option value="unlisted">Unlisted</option>
						<option value="private">Private</option>
					</Form.Control>
					<br />
					<br />
					<Button type="submit" value="create" variant="primary">
						create
					</Button>
				</Form>
			</div>
		);
	}
}

const mapStateToProps = (storeState) => {
	return {
		file: storeState.features.files.files
	};
};

export default connect(mapStateToProps, { fetchfiles })(CreatePage);
