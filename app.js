import React from 'react';
import ReactDom from 'react-dom';
import Tabs from './src/Tabs/Tabs';
import TabPane from './src/Tabs/TabPane';

ReactDom.render(
    <Tabs defaultActiveIndex="1" className="kz-tabs">
        <TabPane tab="tab 1" order="1">Content Panel of Tab 1</TabPane>
        <TabPane tab="tab 2" order="2">Content Panel of Tab 2</TabPane>
        <TabPane tab="tab 3" order="3">Content Panel of Tab 3</TabPane>
        <TabPane tab="tab 4" order="4">Content Panel of Tab 4</TabPane>
        <TabPane tab="tab 5" order="5">Content Panel of Tab 5</TabPane>
        <TabPane tab="tab 6" order="6" disabled>Content Panel of Tab 6</TabPane>
    </Tabs>
    ,document.getElementById('tab-demo-card')
);
