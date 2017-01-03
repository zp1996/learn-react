import React from 'react';
import ReactDom from 'react-dom';
import ColorStrap from '../../src/ColorPicker/ColorStrap';

ReactDom.render(
    <ColorStrap width="210" strapHeight="14" />
    ,document.getElementById('color-picker-demo-card')
);