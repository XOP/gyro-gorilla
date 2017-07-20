import React, { Component } from 'react';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="hero is-primary gg-wrapper">
                <section className="gg-main">

                    <div className="gg-header">
                        <h1 className="title is-2 has-text-centered">
                            Gyro Gorilla
                        </h1>
                    </div>

                    <div className="gg-content">
                        <div className="button is-primary is-inverted is-outlined gg-control">
                            <span className="icon">
                                <i className="fa fa-volume-up" />
                            </span>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

App.propTypes = {
};

export default App;
