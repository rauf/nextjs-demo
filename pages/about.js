import React from 'react'
import Link from 'next/Link'
import { connect } from 'react-redux'
import Head from 'next/head'

class AboutPage extends React.Component {

    render() {
      return (
          <div>
            <Head>
              <title>About Page</title>
            </Head>
            <h3>About</h3>
            <Link href="/">
              <a>Home Page</a>
            </Link>
          </div>
        )
  }
}

export default connect(null)(AboutPage);