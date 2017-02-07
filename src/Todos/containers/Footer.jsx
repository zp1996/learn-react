import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';

const links = [ 'ALL', 'COMPLETE', 'ACTIVE' ];

const Footer = ({ dispatch }) => (
    <div>
        Show:
        {
            links.map((val,i) => (
                <a key={i}
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(setVisibilityFilter(`SHOW_${val}`));
                }}>{val}</a>
            ))
        }
    </div>
);


export default connect()(Footer);