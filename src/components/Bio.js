import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Nader Mokhtar`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Nader Mokhtar</strong> who lives in Boston building Technology that gets out of the way.{' '}
          <a href="https://www.linkedin.com/in/nmokhtar/">
            You should connect with me on LinkedIn
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
