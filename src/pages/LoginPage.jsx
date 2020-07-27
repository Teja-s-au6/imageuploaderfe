import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {fetchLoginUsers} from '../store/userReducer'
class LoginPage extends Component {
    state = {
		email: '',
        password: ''
	};
    
	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
        event.preventDefault();
        const {email, password } = this.state;
        const users = {
            email : email, 
            password: password
		}
		const user = JSON.stringify(users)
		this.props.fetchLoginUsers(user);
		this.setState({
			email: "",
			password: ""
        })
    }
        
    render() {
        return (
            <div>
			<h1>LoginPage</h1>
            <Form onSubmit={this.handleSubmit} >

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
					<Button type="submit" value="Login" variant="primary" >Login</Button>
				</Form>
            </div>
        )
    }
}

export default connect(null,{fetchLoginUsers})(LoginPage);
