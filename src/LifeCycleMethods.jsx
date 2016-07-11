'use strict';
import React from 'react';

module.exports = React.createClass({
    propTypes: {
        timerStart: React.PropTypes.element.isRequired
    },

    render: function() {
        return (
            <div className="commentBox">
                <p>I am LifeCycleMethods</p>
                <p>Timer: {this.state.timer}</p>
                <p>Do you want to read about me? You <a href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods" target="_blank">can!</a></p>
            </div>
        );
    },
    componentWillMount: function() {
        this.setState({
            timer: this.props.timerStart
        })
    },
    componentDidMount: function() {

    },
    componentWillReceiveProps: function(nextProps) {

    },
    shouldComponentUpdate: function(nextProps, nextState) {

    },
    componentWillUpdate: function(nextProps, nextState) {

    },
    componentDidUpdate: function(prevProps, prevState) {

    },
    componentWillUnmount: function() {

    }
});