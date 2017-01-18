import React from 'react';
import ReactDom from 'react-dom';
import Gallery from '../../src/Gallery/image-figure';

ReactDom.render(
	<Gallery 
		url="/images/Gallery/first.jpg" 
	/>, document.getElementById('gallery-demo-card')
);
