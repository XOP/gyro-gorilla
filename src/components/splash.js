import React, { PropTypes } from 'react';

const Splash = ({ children }) => (
    <section>
        <div className="section">
            <h1 className="title is-2">
                {children}
            </h1>
        </div>
    </section>
);

Splash.propTypes = {
    children: PropTypes.node
};

export default Splash;
