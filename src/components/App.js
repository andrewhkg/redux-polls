import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import AddPoll from './AddPoll'
import Poll from './Poll'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
        ? null
        // : <AddPoll/>
        // : <Poll match={{params: {id: 'loxhs1bqm25b708cmbf3g'}}}/>}
        // : <Poll match={{params: {id: 'xj352vofupe1dqz9emx13r'}}}/>}
         : <Poll match={{params: {id: 'loxhs1bqm25b708cmbf3g'}}}/>}
      </div>
    )
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
