import React, { Component } from 'react';
import ReactPlayer from "react-player";

class Internal extends Component {
  state = {
    currentUserName: ''
  }

  componentDidMount () {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserName: idToken.idToken.claims.name
    })
  }

  render() {
    const { currentUserName } = this.state
    return (
      <div>
        <h2>Welcome {currentUserName}</h2>
        <p>This is the protected area of the site. Please enjoy this video.</p>

        <ReactPlayer url='https://www.youtube.com/watch?v=8-tEYMRW1oQ'/>

        <p>Shelter dogs pick their own Christmas present at DogsTrustIreland</p>
      </div>
    )
  }
}

export default Internal
