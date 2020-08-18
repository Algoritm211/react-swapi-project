import React from 'react'

import './error-button.css'

export default class ErrorButton extends React.Component {

    state = {
        renderError: false,
    }



    render() {

        console.log('render');

        if(this.state.renderError) {
            this.foo.bar=0
        }

        return (
            <button className='error-button btn btn-danger btn-lg mb-2 ml-2'
                    onClick={() => {this.setState({renderError: true})}}>
                        Throw Error
            </button>
            
        )
    }
}