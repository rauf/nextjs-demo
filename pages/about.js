import React from 'react'
import Link from 'next/Link'
import { connect } from 'react-redux'

class AboutPage extends React.Component {

    render() {
      return (
          <div>
              <h3>About</h3>
              <Link href="/">
                <a>Home Page</a>
              </Link>
          </div>
        )
  }
}

export default connect(null)(AboutPage);