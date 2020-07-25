import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {fetchUsers} from '../store/userReducer';
class RegisterPage extends Component {

    state = {
		name: '',
		email: '',
        password: ''
	};
    
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const {  name, email, password } = this.state;
		const users = {
            name, email, password
		};
		console.log(users)
		this.props.fetchUsers(users);
	};
    render() {
        return (
            <div>
                        <Form onSubmit={this.handleSubmit} >
					<Form.Control
						type="text"
						name="name"
						placeholder="Enter your name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
          <br/>
          <br/>
					<Form.Control
						type="email"
						name="email"
						placeholder="Enter your email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
          <br/>
          <br/>
          <Form.Control
						type="password"
						name="password"
						placeholder="Enter your password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
          <br/>
          <br/>
					<Button type="submit" value="Register" variant="primary" >Register</Button>
				</Form>
            </div>
        )
    }
}

const mapStateToProps = (storeState) => {
	return {
		user: storeState.features.users.users,
	};
};

export default connect(mapStateToProps, {fetchUsers})(RegisterPage);