import React from 'react'

import './error-boundry.css'
import ErrorIndicator from '../error-indicator';

export default class ErrorBoudry extends React.Component {

    state={
        hasError: false
    }


    componentDidCatch() {
        this.setState({
          hasError: true,
        });
      }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }


        return(
            this.props.children
        )
    }
}

