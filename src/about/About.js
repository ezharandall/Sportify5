import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTitle } from '../actions';

class About extends Component {

    componentDidMount() {
        this.props.dispatch(setTitle('About'));
    }

    render() {
        const listStyle = {
            padding: '0 0 5px 0'
        };
        
        return (
            <div style={{padding: Ext.os.is.Phone ? '0 10px': '0 20px'}}>
                <h2 style={{fontWeight: 100}}>ExtReact Conference App</h2>
                <div>
                    This app is built with <a href="https://github.com/sencha/extjs-reactor">Sencha ExtReact 6.5</a> and uses the following libraries:
                    <ul style={{listStyle: 'none', padding: '0'}}>
                        <li style={listStyle}><a href="https://facebook.github.io/react/">React 15.4</a></li>
                        <li style={listStyle}><a href="http://redux.js.org/">Redux 3.6</a></li>
                        <li style={listStyle}><a href="http://redux.js.org/">React Router 4.1</a></li>
                    </ul>
                </div>
                <p>
                    The source code for this app is available <a href="https://github.com/sencha/extjs-reactor/tree/master/packages/reactor-conference-app">here</a>.
                </p>
            </div>
        )
    }

};

const mapStateToProps = (state) => {
    return { };
}

export default connect(mapStateToProps)(About);