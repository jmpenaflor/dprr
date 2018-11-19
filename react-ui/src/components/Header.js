import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import app from "../base";

export default class Header extends Component {
    constructor(props) {
		super(props);
		this.state = { username: null };
      }
      
      componentDidMount() {
        app.auth().onAuthStateChanged(function(user) {
            if (user) {
            var email = user.email;
            var emailVal = document.getElementById("userName");
            var text = document.createTextNode(email);
            emailVal.appendChild(text);
            } else {
                this.props.history.push("/login");
            }
          });
      }

      signOutUser = async () => {
		try {
			await app.auth().signOut();
			this.props.history.push("/login");
		} catch (e) {
			console.log(e);
		}
	}
    
render() {
    const { pageName } = this.props;
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="/">Adovin <small>{pageName}</small></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto" style={{float: 'right'}}>
              <li className="nav-item active">
                <Link id="about" to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link id="about" to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link id="about" to="/contact" className="nav-link">Contact</Link>
              </li>
              
            </ul>
          </div>
          <div style={{position: 'absolute', right: '20px'}}>
            <span id="userName" style={{color:'white'}}></span>&nbsp;
            <Button title="logout" onClick={() => this.signOutUser()} >logout</Button>
          </div>
        </div>
      </nav>
        );
    }
}