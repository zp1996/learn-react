import React, { Component, PropTypes } from 'react';
import styles from './ColorStrap.scss';
 
const getLeft = {
    br: color => color['g'] / 255 * 0.17,
    bg: color => color['r'] / 255 * 0.17 + 0.17,
    rg: color => color['b'] / 255 * 0.17 + 0.34,
    rb: color => color['g'] / 255 * 0.17 + 0.51,
    gb: color => color['r'] / 255 * 0.17 + 0.68,
    gr: color => color['b'] / 255 * 0.17 + 0.85
};

class ColorStrap extends Component {
    static propsType = {
        width: PropTypes.string.isRequired,
        strapHeight: PropTypes.string.isRequired,
        color: PropTypes.Object
    };
    static defaultProps = {
        color: { r: 255, g: 1, b: 0 }
    };
    static getPos({ r, g, b, width }) {
        const arr = [
            { key: 'r', val: r }, 
            { key: 'g', val: g },
            { key: 'b', val: b }
        ];
        arr.sort((a, b) => a.val - b.val);
        const min = arr[0].key,
            mid = arr[1].key,
            max = arr[2].key,
            color = {
                [min]: 0,
                [mid]: arr[1].val + 255 - arr[0].val - arr[2].val,
                [max]: 255
            },
            left = ~~(getLeft[min + max](color) * width);
        return left;
    };
    constructor(props) {
        super(props);
        this.strap_flag = false;
        this.strap_ctx = null;
    }
    componentDidMount() {
        const { width, strapHeight } = this.props,
            pointer = this.refs.pointer,
            strap_ctx = this.refs.strap.getContext('2d'),
            grd = strap_ctx.createLinearGradient(0, 0, width, 0);
        
        this.strap_ctx = strap_ctx;

        grd.addColorStop(0, "#FF0000");
        grd.addColorStop(0.17, "#FFFF00");
        grd.addColorStop(0.34, "#00FF00");
        grd.addColorStop(0.51, "#00FFFF");
        grd.addColorStop(0.68, "#0000FF");
        grd.addColorStop(0.85, "#FF00FF");
        grd.addColorStop(1, "#FF0000");
        strap_ctx.fillStyle = grd;
        strap_ctx.fillRect(0, 0, width, strapHeight);
    }
    strapMouseDown() {
        this.strap_flag = false;
    }
    strapMouseUp() {
        this.strap_flag = false;
    }
    strapHandle(e) {
        if (!this.strap_flag && e.type !== 'click') 
            return void 0;
        e = e.nativeEvent;
        const data = this.strap_ctx.getImageData(e.offsetX, e.offsetY, 1, 1).data,
            left = ColorStrap.getPos({
                r: data[0],
                g: data[1],
                b: data[2]
            }, this.props.width);
        //this.refs.pointer.style.left = `${parseInt(left * this.props.width)}px`; 
    }
    strapClick() {

    }
    render() {
        const { width, strapHeight, color } = this.props;
        const left = ColorStrap.getPos(color);
        return (
            <div className="color-strap">
                <i className="strap-pointer" ref="pointer"></i>
                <canvas 
                    width={width} 
                    height={strapHeight}
                    style={{left}}
                    ref="strap"
                    onClick={this.strapHandle.bind(this)}
                    color={color}
                ></canvas>
            </div>
        );
    }
}

export default ColorStrap;