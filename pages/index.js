import React from 'react'
import Link from 'next/Link'
import { connect } from 'react-redux'
import Head from 'next/head'

class HomePage extends React.Component {
  
    render() {
      const {text, length, dispatch} = this.props;
      return (
        <div>
          <Head>
            <title>Length Calculator</title>
          </Head>
          <input onChange={e => dispatch({type: 'SET_VALUE', payload: e.target.value})} value={text}/>
          <h3>Current Length is: {length} </h3>
          <Link href="/about">
            <a>About Page</a>
          </Link>
        </div>
      )
  }
}

function mapStateToProps (state) {
  return { ...state.experiments }
}

export default connect(mapStateToProps)(HomePage);