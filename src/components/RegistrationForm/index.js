import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    first: null,
    second: null,
    running: true,
  }

  onBlurFirst = event => {
    if (event.target.value === '') {
      this.setState({first: 'Required', firstName: ''})
    } else {
      this.setState({firstName: event.target.value, first: null})
    }
  }

  onBlurSecond = event => {
    if (event.target.value === '') {
      this.setState({second: 'Required', secondName: ''})
    } else {
      this.setState({secondName: event.target.value, second: null})
    }
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName === '' && secondName === '') {
      this.setState({first: 'Required', second: 'Required'})
    } else if (firstName === '' && secondName !== '') {
      this.setState({first: 'Required', second: null})
    } else if (firstName !== '' && secondName === '') {
      this.setState({first: null, second: 'Required'})
    } else if (firstName !== '' && secondName !== '') {
      this.setState({first: null, second: null, running: false})
    }
  }

  submitAgain = () => {
    this.setState({running: true})
  }

  render() {
    const {first, second, running} = this.state
    return (
      <div className="cont">
        <h1 className="main-head">Registration</h1>
        {running ? (
          <form className="form-item" onSubmit={this.submitForm}>
            <div className="input-cont">
              <label htmlFor="first" className="label">
                FIRST NAME
              </label>
              <input
                type="text"
                className="input"
                id="first"
                onBlur={this.onBlurFirst}
              />
              <p className="err">{first}</p>
            </div>
            <div className="input-cont">
              <label htmlFor="second" className="label">
                LAST NAME
              </label>
              <input
                type="text"
                className="input"
                id="second"
                onBlur={this.onBlurSecond}
              />
              <p className="err">{second}</p>
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        ) : (
          <div className="hide-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success"
            />
            <p className="result">Submitted Successfully</p>
            <button
              type="button"
              className="again-btn"
              onClick={this.submitAgain}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
