import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadQuestions } from 'actions/index'
import { Link } from 'react-router'
import _ from 'lodash'
import Questions from './QuestionsComponent'
import Helmet from 'react-helmet'

class QuestionContainer extends Component {
  static fetchData ({ store }) {
    return store.dispatch(loadQuestions())
  }

  componentDidMount () {
    this.props.loadQuestions()
  }
  render () {
    console.log(this.props.questions)

    return (
      <div>
        <Helmet
          title='Questions'
        />
        <h2>Question</h2>

        <Link to='/'>Back to Home</Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { questions: state.questions }
}

export { QuestionContainer }
export default connect(mapStateToProps, { loadQuestions })(QuestionContainer)
