import React, { Component } from 'react';

import cls from 'classnames';

import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.handlePlayControl = this.handlePlayControl.bind(this);

        this.state = {
            isAudioPlayed: false
        };
    }

    componentDidMount() {
        this.Audio.onplay = () => {
            this.setState({
                isAudioPlayed: true
            });
        };

        this.Audio.onended = () => {
            this.setState({
                isAudioPlayed: false
            });
        };
    }

    handlePlayControl() {
        if (this.state.isAudioPlayed) {
            return;
        }

        this.Audio.play();
    }

    render() {
        const soundRoar = require('../assets/gorilla.mp3');

        return (
            <div className={cls('gg-wrapper hero', {
                'is-primary': !this.state.isAudioPlayed,
                'is-warning': this.state.isAudioPlayed
            })}>
                <section className="gg-main">

                    <div className="gg-header">
                        <h1 className="title is-2 has-text-centered">
                            Gyro Gorilla
                        </h1>
                    </div>

                    <div className="gg-content">
                        <div className="gg-sound">
                            <audio ref={(audio) => { this.Audio = audio; }}>
                                <source src={soundRoar} type="audio/mp3" />
                            </audio>
                        </div>

                        <div
                            className={cls('gg-control button is-inverted is-outlined', {
                                'is-primary': !this.state.isAudioPlayed,
                                'is-warning': this.state.isAudioPlayed
                            })}
                            onClick={this.handlePlayControl}
                        >
                            <span className="icon">
                                {
                                    this.state.isAudioPlayed ?
                                        <i className="fa fa-volume-up" /> :
                                        <i className="fa fa-play" />
                                }
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
