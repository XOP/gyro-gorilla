import React, { Component, PropTypes } from 'react';

import Splash from '../components/splash';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column is-half is-offset-one-quarter-desktop">

                        <Splash>
                            Gyro Gorilla
                        </Splash>

                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
};

export default App;
