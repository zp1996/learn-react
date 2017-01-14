import React, { Component, PropTypes } from 'react';
import styles from './gallery.scss';

class ImageFigure extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        introduction: PropTypes.string.isRequired,
        alt: PropTypes.string
    };
    static defaultProps = {
        introduction: 'a introduction for this photo',
        alt: 'a good photo'
    };
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'zp1996',
            maleChecked: true,
        };
    }
    render() {
        const { url,introduction,alt } = this.props;
        return (
            <div>
                <figure className="image-figure">
                    <img className="image-figure-img" 
                        src={url} 
                        alt={alt} 
                    />
                    <p className="image-figure-alt">{alt}</p>
                </figure>
            </div>
        );
    }
}

export default ImageFigure;